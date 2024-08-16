import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { toast } from 'react-toastify';
import QRCode from 'qrcode.react';

const Details = () => {
  const { varid } = useParams();
  const state = useSelector((state) => state);
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  console.log('LoggedIn ', state.loggedin.IsLoggedIn);
  const [data, setData] = useState({});
  const [amount, setAmount] = useState(0);
  const today = moment(new Date()).format('YYYY-MM-DD');
  const [booking, setBooking] = useState({
    varid: varid,
    fromdate: today,
    todate: today,
    userid: sessionStorage.getItem('userid'),
    message: '',
    advance: 0,
    billamount: 0,
    cardno: '',
    nameoncard: '',
    cvv: '',
    expiry: '',
  });
  const [showQRCode, setShowQRCode] = useState(false);
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });

    // Validate inputs and set errors
    let validationErrors = {};

    // Validation: Ensure that 'todate' is greater than or equal to 'fromdate'
    if (name === 'fromdate' || name === 'todate') {
      const fromDate = name === 'fromdate' ? value : booking.fromdate;
      const toDate = name === 'todate' ? value : booking.todate;
      if (moment(toDate).isBefore(moment(fromDate))) {
        validationErrors.todate = 'To Date must be greater than or equal to From Date';
      }
    }

    // Validation: Card Number (16 digits, not all 0)
    if (name === 'cardno') {
      const isValidCardNumber = /^[0-9]{16}$/.test(value) && !/^0{16}$/.test(value);
      if (!isValidCardNumber) {
        validationErrors.cardno = 'Card number must be 16 digits and cannot be all 0s';
      }
    }

    // Validation: Name on Card (only text)
    if (name === 'nameoncard') {
      const isValidName = /^[A-Za-z\s]+$/.test(value);
      if (!isValidName) {
        validationErrors.nameoncard = 'Name on card must contain only alphabets';
      }
    }

    // Validation: CVV (3 digits)
    if (name === 'cvv') {
      const isValidCVV = /^[0-9]{3}$/.test(value);
      if (!isValidCVV) {
        validationErrors.cvv = 'CVV must be 3 digits';
      }
    }

    // Validation: Expiry Date (must be in the future)
    if (name === 'expiry') {
      const expiryDate = moment(value + '-01'); // Convert to the first of the month for comparison
      if (expiryDate.isBefore(moment(), 'month')) {
        validationErrors.expiry = 'Expiry date must be in the future';
      }
    }

    setErrors(validationErrors);
  };

  const handleGenerateQR = () => {
    setShowQRCode(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    booking.billamount = amount;
    console.log('formdata', booking);

    if (booking.advance > amount) {
      toast.error('Advance cannot be greater than billing amount');
      return;
    }
    if (
      booking.cardno === '' ||
      booking.nameoncard === '' ||
      booking.cvv === '' ||
      booking.expiry === ''
    ) {
      toast.error('Please provide payment details');
      return;
    }

    if (Object.keys(errors).length === 0) {
      axios
        .post(BASE_URL + 'api/bookings', booking)
        .then((resp) => {
          toast.success(resp.data);
          history.push('/');
        })
        .catch((error) => {
          toast.error(error);
        });
      console.log('form submitted');
    } else {
      toast.error('Please fix the errors before submitting');
    }
  };

  useEffect(() => {
    console.log(booking);
    let bdays = moment(booking.todate).diff(moment(booking.fromdate), 'days') + 1;
    setAmount(data.price * bdays);
    console.log('Days', bdays + 1);
  }, [booking]);

  useEffect(() => {
    axios.get(BASE_URL + 'api/variants/' + varid).then((resp) => {
      console.log(resp.data);
      setData(resp.data);
      setAmount(resp.data.price);
      setBooking((prev) => ({
        ...prev,
        advance: resp.data.price / 2, // Setting the advance to half of the price
      }));
    });
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="card m-2">
              <div className="card-header text-center"></div>
              <img
                style={{ height: 450, width: 450 }}
                src={BASE_URL + data.photo}
                className="card-top-img"
              />
              <br></br>
              <div className="card-footer">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>{data.title}</th>
                    </tr>
                    <tr>
                      <th>Price per day</th>
                      <th>₹ {data.price}/day</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            {state.loggedin.IsLoggedIn ? (
              <>
                <form>
                  <div className="card shadow mb-2">
                    <div className="card-body">
                      <h5 style={{ borderBottom: '2px solid green' }}>Booking Details</h5>
                      <br></br>
                      <div className="form-row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>From Date</label>
                            <input
                              type="date"
                              min={today}
                              value={booking.fromdate}
                              onChange={handleInput}
                              name="fromdate"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>To Date</label>
                            <input
                              type="date"
                              min={today}
                              value={booking.todate}
                              onChange={handleInput}
                              name="todate"
                              className="form-control"
                            />
                            {errors.todate && <span className="text-danger">{errors.todate}</span>}
                          </div>
                          <br></br>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Price</label>
                            <input
                              type="text"
                              readOnly
                              name="amount"
                              value={amount}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Message (Optional)</label>
                            <input
                              type="text"
                              name="message"
                              onChange={handleInput}
                              value={booking.message}
                              className="form-control"
                            />
                          </div>
                          <br></br>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Booking Money</label>
                            <input
                              type="number"
                              readOnly
                              name="advance"
                              value={booking.advance}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card shadow mb-2">
                    <div className="card-body">
                      <h5 style={{ borderBottom: '2px solid green' }}>Payment Details</h5>
                      <br></br>
                      <div className="form-row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Card Number</label>
                            <input
                              type="text"
                              required
                              name="cardno"
                              onChange={handleInput}
                              value={booking.cardno}
                              maxLength={16}
                              className="form-control"
                            />
                            {errors.cardno && (
                              <span className="text-danger">{errors.cardno}</span>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Name on Card</label>
                            <input
                              type="text"
                              required
                              name="nameoncard"
                              onChange={handleInput}
                              value={booking.nameoncard}
                              className="form-control"
                            />
                            {errors.nameoncard && (
                              <span className="text-danger">{errors.nameoncard}</span>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>CVV</label>
                            <input
                              type="text"
                              required
                              name="cvv"
                              onChange={handleInput}
                              value={booking.cvv}
                              maxLength={3}
                              className="form-control"
                            />
                            {errors.cvv && <span className="text-danger">{errors.cvv}</span>}
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Expiry Date</label>
                            <input
                              type="month"
                              required
                              name="expiry"
                              onChange={handleInput}
                              value={booking.expiry}
                              className="form-control"
                            />
                            {errors.expiry && <span className="text-danger">{errors.expiry}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                    {showQRCode && (
                      <div className="card shadow mb-2">
                        <div className="card-body text-center">
                          <QRCode value="sample" size={150} />
                        </div>
                      </div>
                    )}
                    <div className="form-row">
                      <div className="col-sm-12 text-center">
                        <button
                          type="button"
                          className="btn btn-warning mr-2"
                          onClick={handleGenerateQR}
                          disabled={Object.keys(errors).length > 0}
                        >
                          Generate QR Code
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={handleSubmit}
                          disabled={Object.keys(errors).length > 0}
                        >
                          Submit
                        </button>
                        <Link to="/" className="btn btn-secondary ml-2">
                          Cancel
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </>
            ) : (
              <>
                <h4>
                  <Link to="/login">Please Login First</Link>
                </h4>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
