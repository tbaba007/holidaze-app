import { Formik } from 'formik';
import React from 'react';
import signUpImg from '../../../assets/images/signupimg.svg'
import signUpStyles from './SignUp.module.scss';
import { registerUser } from '../../../services';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
document.title="Register";

const Signup = () => {
  const navigate=useNavigate();
  return (
    <div className={signUpStyles.Container}>
    <img src={signUpImg} alt='SignUpImage' className={signUpStyles.image}/>
    <Formik
      initialValues={{ email: '', password: '',name:'',avatar:'',venueManager: true }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if(!values.password){
          errors.password = 'Required';
        }
        else if(values.password.length<8){
          errors.password = 'Password must be 8 characters and above';
        }
        return errors;
      }}
       onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
         const data=await registerUser({payload:values});
        if(data && data?.id>0){
          toast.success('User created successfully');
          toast.info('Please wait, redirecting to login');
          setTimeout(()=>{
           navigate('/')
          },4000)
        }
        else{
          const {errors}=data;
          toast.error(errors[0]?.message);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
         <h3>Create an Account</h3>
          <span>Became holidaze member ,you’ll get exlusive offers from holidaze</span>
          <section>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            required
          />
          {errors.name && touched.name && errors.name}
          </section>
          <section>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder='Enter email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            required
          />
          {errors.email && touched.email && errors.email}
          </section>
          <section>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder='create a password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            required
          />
          {errors.password && touched.password && errors.password}
          </section>
          <section>
          <label>Avatar</label>
          <input
            type="text"
            name="avatar"
            placeholder='Avatar url'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.avatar}
            
          />
          {errors.avatar && touched.avatar && errors.avatar}
          </section>
          
          <button type="submit" disabled={isSubmitting}>
           Create an Account
          </button>
          <button type="button">
           Sign Up with Google
          </button>
        </form>
      )}
    </Formik>
   <ToastContainer/>
  </div>
  )
 
}

export default Signup;