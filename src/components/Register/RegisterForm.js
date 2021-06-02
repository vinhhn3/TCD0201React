import React from 'react';
import userApi from '../.././api/userApi'
import { FastField, Form, Formik } from 'formik';
import InputField from '../../custom-fields/InputField';
import * as Yup from 'yup'

function RegisterForm(props) {
    const initialValues = {
        username: '',
        password: '',
        rePassword: '',
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('This field is required'),
        password: Yup.string().required('This field is required'),
        rePassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password do not match')
    })

    const handleOnSubmit = async (values, { resetForm }) => {
        try {
            const registerValues = {
                username: values.username,
                password: values.password
            }
            const response = await userApi.register(registerValues)
            console.log('Register account successful: ', response)

            resetForm();

        } catch (error) {
            console.log('Fail: ', error.message);
        }
    }

    return (
        <div className="Register">
            <h1>Register Page</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleOnSubmit}
            >
                {(formikProps) => {
                    const { values, errors, touched } = formikProps;
                    console.log({ values, errors, touched });

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

                            <FastField
                                name="rePassword"
                                component={InputField}
                                type="password"

                                label="Re-Password"
                            />

                            <div className="form-control">
                                <button type="submit">Register</button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default RegisterForm;
