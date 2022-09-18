import React, {useState} from 'react';
import { Formik } from 'formik';
import styles from '../Assets/Css/Signup.module.css'
import axios from 'axios';

axios.defaults.withCredentials = true;
export default function Signup() {

    const [error, seterror] = useState('');


    return (
        <div className={styles.formBox} >
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
                    if (!values.password) errors.password = 'Required';
                    else if (values.password.length < 8) errors.password = 'password length must be atleast 8 characters long';

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('asfs')
                    axios.defaults.withCredentials = true;
                    axios.post('http://localhost:5000/signup', {
                        ...values
                    }).then((res)=>{
                        console.log(res)
                    }).catch(error=>{
                        if(error.response.status == 409);
                        seterror(error.response.data);
                    })
                    setSubmitting(false);
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
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} >
                        <div className={styles.formSection}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                id="email"
                            />
                            {
                                touched.email && errors.email &&
                                <p className={styles.error}>{errors.email}</p>
                            }
                        </div>

                        <div className={styles.formSection}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                />
                            {
                                touched.password && errors.password &&
                                <p className={styles.error}>{errors.password}</p>
                            }
                        </div>
                        {
                            error.length>0 &&
                            <p className={styles.error}>{error}</p>
                        }
                        <button type="submit" disabled={isSubmitting} className={styles.button}>
                            Sign Up
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}

