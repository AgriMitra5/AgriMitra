import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default function BookingDetails() {
  const { bid } = useParams()
  const [data, setData] = useState(null)
  const [bikes, setBikes] = useState([])
  const [pmts, setPmts] = useState([])
  const [bike, setBike] = useState(null)
  const BASE_URL = process.env.REACT_APP_BACKEND_URL

  const validationSchema = Yup.object({
    fromdate: Yup.date().required('From Date is required'),
    todate: Yup.date()
      .required('To Date is required')
      .min(Yup.ref('fromdate'), 'To Date must be after From Date'),
    cardNumber: Yup.string()
      .matches(/^[0-9]{16}$/, 'Card number must be exactly 16 digits and contain only numbers')
      .required('Card number is required'),
    nameOnCard: Yup.string()
      .matches(/^[a-zA-Z ]+$/, 'Name on Card must contain only letters')
      .required('Name on Card is required'),
    cvv: Yup.string()
      .matches(/^[0-9]{3}$/, 'CVV must be exactly 3 digits')
      .required('CVV is required'),
    expiryDate: Yup.date()
      .required('Expiry Date is required')
      .min(new Date(), 'Expiry Date cannot be in the past'),
  })

  const handleSubmit = (values) => {
    axios
      .put(BASE_URL + 'api/bookings/' + values.bid, {
        bno: values.bike,
        paymentDetails: {
          cardNumber: values.cardNumber,
          nameOnCard: values.nameOnCard,
          cvv: values.cvv,
          expiryDate: values.expiryDate,
        },
      })
      .then((resp) => {
        toast.success(resp.data)
        loadData()
      })
      .catch((error) => {
        toast.error(error)
      })
  }

  useEffect(() => {
    console.log('Booking id', bid)
    loadData()
  }, [])

  const loadData = () => {
    axios.get(BASE_URL + 'api/bookings/' + bid).then((resp) => {
      setData(resp.data)
    })
  }

  useEffect(() => {
    if (data) {
      axios.get(BASE_URL + 'api/product/variants/' + data?.variant?.id).then((resp) => {
        setBikes(resp.data)
      })
      axios.get(BASE_URL + 'api/bookings/payments/' + data?.id).then((resp) => {
        setPmts(resp.data)
      })
    }
  }, [data])

  return (
    <div className='content-wrapper p-2'>
      <div className='container-fluid shadow p-2 bg-white' style={{ minHeight: '88vh' }}>
        <h4 className='p-2 mb-3 border-bottom border-success'>Booking Details</h4>
        <div className='form-row'>
          <div className='col-sm-6'>
            <div className='card shadow'>
              <img src={BASE_URL + data?.variant?.photo} className='card-top-img' />
              <div className='card-body'>
                <table className='table table-sm'>
                  <tbody>
                    <tr>
                      <th>Booking ID</th>
                      <th>{data?.id}</th>
                      <th>Farmer Name</th>
                      <th>{data?.customer?.uname}</th>
                    </tr>
                    <tr>
                      <th>From Date</th>
                      <th>{data?.fromdate}</th>
                      <th>To Date</th>
                      <th>{data?.todate}</th>
                    </tr>
                    <tr>
                      <th>Product Variant</th>
                      <th>{data?.variant?.title}</th>
                      <th>Price per Day</th>
                      <th>{data?.variant?.price}</th>
                    </tr>
                    <tr>
                      <th>Booking Date</th>
                      <th>{data?.bookingdate}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='card shadow'>
              <div className='card-body'>
                <h5 className='text-center'>Booking Confirmation</h5>
                {data?.status === 'Pending' ? (
                  <Formik
                    initialValues={{
                      bike: '',
                      fromdate: '',
                      todate: '',
                      cardNumber: '',
                      nameOnCard: '',
                      cvv: '',
                      expiryDate: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ setFieldValue }) => (
                      <Form>
                        <div className='form-row'>
                          <div className='col-sm-6'>
                            <div className='form-group'>
                              <label>Select Product *</label>
                              <Field
                                as='select'
                                className='form-control form-control-sm'
                                name='bike'
                                onChange={(e) => setFieldValue('bike', e.target.value)}
                              >
                                <option value=''>-- Select Product --</option>
                                {bikes.map((x, index) => (
                                  <option key={index} value={x.id}>
                                    {x.id}
                                  </option>
                                ))}
                              </Field>
                              <ErrorMessage name='bike' component='div' className='text-danger' />
                            </div>
                          </div>
                        </div>
                        {/* Add other form fields for payment details here */}
                        <input
                          type='submit'
                          defaultValue='Confirm Booking'
                          className='btn btn-outline-success btn-sm float-right'
                        />
                      </Form>
                    )}
                  </Formik>
                ) : (
                  <>
                    <h6 className='text-success text-center p-2'>Booking confirmed</h6>
                    <div className='form-row'>
                      <div className='col-sm-8 p-3'>
                        <h5>Product No : {data?.bike?.id}</h5>
                      </div>
                    </div>
                    <div className='card shadow' style={{ minHeight: '100%' }}>
                      <div className='card-body p-2'>
                        <h5 className='text-center p-2' style={{ borderBottom: '2px solid green' }}>
                          Payment History
                        </h5>
                        {pmts.map((x) => (
                          <div className='card shadow p-2 mb-2' key={x.id}>
                            <p className='p-1 m-0'>Date : {x.pmtdate}</p>
                            <p className='m-0'>Amount : ₹ {x.amount}</p>
                            <p className='m-0 font-weight-bold'>{x.remarks}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
