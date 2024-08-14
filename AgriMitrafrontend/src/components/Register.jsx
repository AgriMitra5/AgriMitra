// import axios from 'axios'
// import { useState } from 'react'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
// import { toast } from 'react-toastify'

// const Register = () => {
//   const history = useHistory()
//   const BASE_URL = process.env.REACT_APP_BACKEND_URL
//   const [user, setUser] = useState({
//     uname: '',
//     address: '',
//     userid: '',
//     pwd: '',
//     cpwd: '',
//     phone: '',
//     gender: '',
//     license: '',
//   })
//   const handleInput = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value })
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(user)
//     if (user.pwd != user.cpwd) {
//       toast.error('Password not match with confirm')
//     } else {
//       axios
//         .post(BASE_URL + 'api/customers', user)
//         .then((resp) => {
//           console.log(resp.data)
//           toast.success(resp.data)
//           history.push('/login')
//         })
//         .catch((error) => {
//           console.log('Error', error.response)
//           toast.error(error.response.data)
//         })
//     }
//   }
//   return (
//     <>
//       <div className='container' style={{ minHeight: '79vh' }}>
//         <div className='row'>
//           <div
//             className='col-sm-8 mx-auto text-center'
//             style={{ boxShadow: '0 0 2px 1px white' }}
//           >
//             <div className='card shadow' style={{ marginTop: 50 }}>
//               <div className='card-body'>
//                 <img
//                   src={'https://cdn-icons-png.flaticon.com/512/6851/6851128.png'}
//                   style={{ width: 150 }}
//                   className='my-2 rounded-circle'
//                 />
//                 <form
//                   onSubmit={handleSubmit}
//                   autoComplete='off'
//                   action='regprocess.php'
//                 >
//                   <div className='form-row'>
//                     <div className='col-sm-6'>
//                       <div className='form-group'>
//                         <div className='input-group'>
//                           <div className='input-group-prepend'>
//                             <span className='input-group-text bg-success border-0 text-white'>
//                               <i className='fas fa-user-tie' />
//                             </span>
//                           </div>
//                           <input
//                             type='text'
//                             pattern='[a-zA-Z ]+'
                            
//                             placeholder='User Name'
//                             name='uname'
//                             value={user.uname}
//                             onChange={handleInput}
//                             className='form-control'
//                           />
//                         </div>
//                       </div>
//                       <div className='form-group'>
//                         <div className='input-group'>
//                           <div className='input-group-prepend'>
//                             <span className='input-group-text bg-success border-0 text-white'>
//                               <i className='fas fa-user-tie' />
//                             </span>
//                           </div>
//                           <input
//                             type='email'
                            
//                             placeholder='Email Id '
//                             name='userid'
//                             value={user.userid}
//                             onChange={handleInput}
//                             className='form-control'
//                           />
//                         </div>
//                       </div>
//                       <div className='form-group'>
//                         <div className='input-group'>
//                           <div className='input-group-prepend'>
//                             <span className='input-group-text bg-success border-0 text-white'>
//                               <i className='fas fa-key' />
//                             </span>
//                           </div>
//                           <input
//                             type='password'
                            
//                             name='pwd'
//                             value={user.pwd}
//                             onChange={handleInput}
//                             placeholder='Password'
//                             className='form-control'
//                           />
//                         </div>
//                       </div>
//                       <div className='form-group'>
//                         <div className='input-group'>
//                           <div className='input-group-prepend'>
//                             <span className='input-group-text bg-success border-0 text-white'>
//                               <i className='fas fa-key' />
//                             </span>
//                           </div>
//                           <input
//                             type='password'
                            
//                             name='cpwd'
//                             value={user.cpwd}
//                             onChange={handleInput}
//                             placeholder='Repeat Password'
//                             className='form-control'
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className='col-sm-6'>
//                       <div className='form-group'>
//                         <div className='input-group'>
//                           <div className='input-group-prepend'>
//                             <span className='input-group-text bg-success border-0 text-white'>
//                               <i className='fas fa-user-tie' />
//                             </span>
//                           </div>
//                           <input
//                             type='text'
//                             pattern='[0-9]{10,10}'
//                             value={user.phone}
//                             onChange={handleInput}
                            
//                             placeholder='Phone Number'
//                             name='phone'
//                             className='form-control'
//                             maxLength={10}
//                           />
//                         </div>
//                       </div>
//                       <div className='form-group'>
//                         <div className='input-group'>
//                           <div className='input-group-prepend'>
//                             <span className='input-group-text bg-success border-0 text-white'>
//                               <i className='fas fa-key' />
//                             </span>
//                           </div>
//                           <select
//                             required
//                             name='gender'
//                             value={user.gender}
//                             onChange={handleInput}
//                             className='form-control'
//                           >
//                             <option value>-- Select Gender --</option>
//                             <option>Male</option>
//                             <option>Female</option>
//                           </select>
//                         </div>
//                       </div>
//                       <div className='form-group'>
//                         <div className='input-group'>
//                           <div className='input-group-prepend'>
//                             <span className='input-group-text bg-success border-0 text-white'>
//                               <i className='fas fa-home' />
//                             </span>
//                           </div>
//                           <input
//                             type='text'
                            
//                             placeholder='Address'
//                             value={user.address}
//                             onChange={handleInput}
//                             name='address'
//                             className='form-control'
//                           />
//                         </div>
//                       </div>
//                       <div className='form-group'>
//                         <div className='input-group'>
//                           <div className='input-group-prepend'>
//                             <span className='input-group-text bg-success border-0 text-white'>
//                               <i className='fas fa-home' />
//                             </span>
//                           </div>
//                           <input
//                             type='text'
                            
//                             placeholder='aadhar number'
//                             name='license'
//                             value={user.license}
//                             onChange={handleInput}
//                             className='form-control'
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <input
//                     type='submit'
//                     defaultValue='Register'
//                     className='btn btn-success btn-block'
//                   />
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Register


import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Register = () => {
  const history = useHistory()
  const BASE_URL = process.env.REACT_APP_BACKEND_URL

  const validationSchema = Yup.object({
    uname: Yup.string()
      .matches(/^[a-zA-Z ]+$/, 'Only letters and spaces are allowed')
      .required('Username is required'),
    userid: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    pwd: Yup.string()
      .required('Password is required'),
    cpwd: Yup.string()
      .oneOf([Yup.ref('pwd'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    gender: Yup.string().required('Gender is required'),
    address: Yup.string().required('Address is required'),
    license: Yup.string()
      .matches(/^[0-9]{12}$/, 'Aadhar number must be 12 digits')
      .required('Aadhar number is required'),
  })

  const formik = useFormik({
    initialValues: {
      uname: '',
      userid: '',
      pwd: '',
      cpwd: '',
      phone: '',
      gender: '',
      address: '',
      license: '',
    },
    validationSchema,
    onSubmit: (values) => {
      axios
        .post(BASE_URL + 'api/customers', values)
        .then((resp) => {
          toast.success(resp.data)
          history.push('/login')
        })
        .catch((error) => {
          toast.error(error.response.data)
        })
    },
  })

  return (
    <>
      <div className='container' style={{ minHeight: '79vh' }}>
        <div className='row'>
          <div
            className='col-sm-8 mx-auto text-center'
            style={{ boxShadow: '0 0 2px 1px white' }}
          >
            <div className='card shadow' style={{ marginTop: 50 }}>
              <div className='card-body'>
                <img
                  src={'https://www.icmbf.org/wp-content/uploads/2018/12/register-button-png.png.webp'}
                  style={{ width: 150 }}
                  
                />
                <br></br><br></br><br></br>
                <form onSubmit={formik.handleSubmit} autoComplete='off'>
                  <div className='form-row'>
                    <div className='col-sm-6'>
                      <div className='form-group'>
                        <div className='input-group'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text bg-success border-0 text-white'>
                              <i className='fas fa-user-tie' />
                            </span>
                          </div>
                          <input
                            type='text'
                            placeholder='User Name'
                            name='uname'
                            value={formik.values.uname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='form-control'
                          />
                          {formik.touched.uname && formik.errors.uname ? (
                            <div className='text-danger'>{formik.errors.uname}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className='form-group'>
                        <div className='input-group'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text bg-success border-0 text-white'>
                              <i className='fas fa-user-tie' />
                            </span>
                          </div>
                          <input
                            type='email'
                            placeholder='Email Id'
                            name='userid'
                            value={formik.values.userid}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='form-control'
                          />
                          {formik.touched.userid && formik.errors.userid ? (
                            <div className='text-danger'>{formik.errors.userid}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className='form-group'>
                        <div className='input-group'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text bg-success border-0 text-white'>
                              <i className='fas fa-key' />
                            </span>
                          </div>
                          <input
                            type='password'
                            placeholder='Password'
                            name='pwd'
                            value={formik.values.pwd}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='form-control'
                          />
                          {formik.touched.pwd && formik.errors.pwd ? (
                            <div className='text-danger'>{formik.errors.pwd}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className='form-group'>
                        <div className='input-group'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text bg-success border-0 text-white'>
                              <i className='fas fa-key' />
                            </span>
                          </div>
                          <input
                            type='password'
                            placeholder='Repeat Password'
                            name='cpwd'
                            value={formik.values.cpwd}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='form-control'
                          />
                          {formik.touched.cpwd && formik.errors.cpwd ? (
                            <div className='text-danger'>{formik.errors.cpwd}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='form-group'>
                        <div className='input-group'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text bg-success border-0 text-white'>
                              <i className='fas fa-user-tie' />
                            </span>
                          </div>
                          <input
                            type='text'
                            placeholder='Phone Number'
                            name='phone'
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='form-control'
                            maxLength={10}
                          />
                          {formik.touched.phone && formik.errors.phone ? (
                            <div className='text-danger'>{formik.errors.phone}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className='form-group'>
                        <div className='input-group'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text bg-success border-0 text-white'>
                              <i className='fas fa-key' />
                            </span>
                          </div>
                          <select
                            required
                            name='gender'
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='form-control'
                          >
                            <option value=''>-- Select Gender --</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                          </select>
                          {formik.touched.gender && formik.errors.gender ? (
                            <div className='text-danger'>{formik.errors.gender}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className='form-group'>
                        <div className='input-group'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text bg-success border-0 text-white'>
                              <i className='fas fa-home' />
                            </span>
                          </div>
                          <input
                            type='text'
                            placeholder='Address'
                            name='address'
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='form-control'
                          />
                          {formik.touched.address && formik.errors.address ? (
                            <div className='text-danger'>{formik.errors.address}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className='form-group'>
                        <div className='input-group'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text bg-success border-0 text-white'>
                              <i className='fas fa-home' />
                            </span>
                          </div>
                          <input
                            type='text'
                            placeholder='Aadhar Number'
                            name='license'
                            value={formik.values.license}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='form-control'
                          />
                          {formik.touched.license && formik.errors.license ? (
                            <div className='text-danger'>{formik.errors.license}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type='submit'
                    defaultValue='Register'
                    className='btn btn-success btn-block'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register

