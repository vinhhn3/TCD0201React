import React from 'react';
import userApi from '../.././api/userApi'
import { FastField, Form, Formik } from 'formik';
import InputField from '../../custom-fields/InputField';
import * as Yup from 'yup'

const LoginForm = () => {
    const initialValues = {
        username: '',
        password: '',
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('This field is required'),
        password: Yup.string().required('This field is required'),
    })

    const handleOnSubmit = async (values, { resetForm }) => {
        try {
            const loginValues = {
                username: values.username,
                password: values.password
            }

            const response = await userApi.login(loginValues)
            console.log('Login account successful: ', response)

            resetForm();
        } catch (error) {
            console.log('Fail: ', error.message);
        }
    }

    return (
        <div className="Register">
            <h1>Login Page</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleOnSubmit}
            >
                {(formikProps) => {
                    const { values, errors, touched } = formikProps
                    console.log({ values, errors, touched })

                    return (
                        <Form>
                            <FastField
                                name="username"
                                component={InputField}
                                type="email"

                                label="Email"
                            />

                            <FastField
                                name="password"
                                component={InputField}
                                type="password"

                                label="Password"
                            />

                            <div className="form-control">
                                <button type="submit">Login</button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>

        </div>
    );
};

export default LoginForm;