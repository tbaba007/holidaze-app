import { Formik } from 'formik';
import React from 'react';

import signUpImg from '../../../assets/images/signupimg.svg'
import signUpStyles from './SignUp.module.scss';
document.title="Login";

const Signup = () => (
  <div className={signUpStyles.Container}>
    <img src={signUpImg} alt='SignUpImage' className={signUpStyles.image}/>
    <Formik
      initialValues={{ email: '', password: '',name:'',avatar:'' }}
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
            required
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
   
  </div>
);

export default Signup;