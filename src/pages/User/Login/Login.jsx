import { Formik } from 'formik';
import React from 'react';

import loginImg from '../../../assets/images/loginImg.svg'
import { signinUser } from '../../../services';
import loginStyles from './Login.module.scss';
import { toast } from 'react-toastify';

document.title="Login";

const Login = () => (
  <div className={loginStyles.LoginContainer}>
    <img src={loginImg} alt='LoginImage' className={loginStyles.image}/>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      const onSubmit={async(values, { setSubmitting }) => {
        const isUserAuthenticated=await signinUser({payload:values});
        if(isUserAuthenticated && isUserAuthenticated?.accessToken){
          document.cookie=isUserAuthenticated?.accessToken;
          localStorage.setItem('user',JSON.stringify(isUserAuthenticated))
        }
        else{
            const {errors}=isUserAuthenticated;
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
         <h3>Welcome back</h3>
          <span>Welcome back! Please enter your details</span>
          <section>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
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
            placeholder='Enter Password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            required
          />
          {errors.password && touched.password && errors.password}
          </section>
          <div className={loginStyles.remember}>
          <label>Remember for 30days</label>
          <label>forgot password</label>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Log in
          </button>
        </form>
      )}
    </Formik>
   
  </div>
);

export default Login;