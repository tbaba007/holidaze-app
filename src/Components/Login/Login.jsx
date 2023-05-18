import { Formik } from 'formik';
import React from 'react';

import loginImg from '../../assets/images/loginImg.svg'
import loginStyles from './Login.module.scss';

const Login = () => (
  <div className={loginStyles.LoginContainer}>
    <img src={loginImg} alt='LoginImage'/>
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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
          />
          {errors.password && touched.password && errors.password}
          </section>
          <div className={loginStyles.remember}>
          <label>Remember for 30days</label>
          <label>forgot password</label>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Login;