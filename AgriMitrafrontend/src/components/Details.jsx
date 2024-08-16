import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { toast } from 'react-toastify';

const Details = () => {
  const { varid } = useParams();
  const state = useSelector((state) => state);
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const [data, setData] = useState({});
  const [amount, setAmount] = useState(0);
  const today = moment().format('YYYY-MM-DD');
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
  const [errors, setErrors] = useState({});
  const history = useHistory();

  // Handle input changes and validation
  const handleInput = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));

    let validationErrors = {};

    // Validate date range
    if (name === 'fromdate' || name === 'todate') {
      const fromDate = name === 'fromdate' ? value : booking.fromdate;
      const toDate = name === 'todate' ? value : booking.todate;
      if (moment(toDate).isBefore(moment(fromDate))) {
        validationErrors.todate = 'To Date must be greater than or equal to From Date';
      }
    }

    // Validate Card Number
    if (name === 'cardno') {
      const isValidCardNumber = /^[0-9]{16}$/.test(value) && !/^0{16}$/.test(value);
      if (!isValidCardNumber) {
        validationErrors.cardno = 'Card number must be 16 digits and cannot be all 0s';
      }
    }

    // Validate Name on Card
    if (name === 'nameoncard') {
      const isValidName = /^[A-Za-z\s]+$/.test(value);
      if (!isValidName) {
        validationErrors.nameoncard = 'Name on card must contain only alphabets';
      }
    }

    // Validate CVV
    if (name === 'cvv') {
      const isValidCVV = /^[0-9]{3}$/.test(value);
      if (!isValidCVV) {
        validationErrors.cvv = 'CVV must be 3 digits';
      }
    }

    // Validate Expiry Date
    if (name === 'expiry') {
      const expiryDate = moment(value + '-01'); // Convert to the first of the month for comparison
      if (expiryDate.isBefore(moment(), 'month')) {
        validationErrors.expiry = 'Expiry date must be in the future';
      }
    }

    setErrors(validationErrors);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    booking.billamount = amount;

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
          toast.error(error.message);
        });
    } else {
      toast.error('Please fix the errors before submitting');
    }
  };

  // Calculate amount based on date range
  useEffect(() => {
    let days = moment(booking.todate).diff(moment(booking.fromdate), 'days') + 1;
    setAmount(data.price * days);
  }, [booking, data.price]);

  // Fetch data on component mount
  useEffect(() => {
    axios.get(BASE_URL + 'api/variants/' + varid).then((resp) => {
      setData(resp.data);
      setAmount(resp.data.price);
      setBooking((prev) => ({
        ...prev,
        advance: resp.data.price / 2, // Setting the advance to half of the price
      }));
    });
  }, [varid, BASE_URL]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <div className="card m-2">
            <div className="card-header text-center"></div>
            <img
              style={{ height: 450, width: 450 }}
              src={BASE_URL + data.photo}
              alt={data.title}
              className="card-top-img"
            />
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
            <form>
              <div className="card shadow mb-2">
                <div className="card-body">
                  <h5 style={{ borderBottom: '2px solid green' }}>Booking Details</h5>
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
                  <div className="form-row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Card Number</label>
                        <input
                          type="text"
                          name="cardno"
                          value={booking.cardno}
                          onChange={handleInput}
                          maxLength="16"
                          className="form-control"
                        />
                        {errors.cardno && <span className="text-danger">{errors.cardno}</span>}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Name on Card</label>
                        <input
                          type="text"
                          name="nameoncard"
                          value={booking.nameoncard}
                          onChange={handleInput}
                          className="form-control"
                        />
                        {errors.nameoncard && <span className="text-danger">{errors.nameoncard}</span>}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={booking.cvv}
                          onChange={handleInput}
                          maxLength="3"
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
                          name="expiry"
                          value={booking.expiry}
                          onChange={handleInput}
                          className="form-control"
                        />
                        {errors.expiry && <span className="text-danger">{errors.expiry}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary"
                disabled={
                  errors.cardno ||
                  errors.nameoncard ||
                  errors.cvv ||
                  errors.expiry ||
                  !moment(booking.todate).isSameOrAfter(moment(booking.fromdate))
                }
              >
                Submit
              </button>
              <Link to="/" className="btn btn-secondary ml-2">
                Back
              </Link>
            </form>
          ) : (
            <p className="text-danger">Please log in to book</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
