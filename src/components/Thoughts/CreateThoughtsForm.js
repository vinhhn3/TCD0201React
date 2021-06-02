import { FastField, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup'
import TextAreaField from '../../custom-fields/TextAreaField';

function CreateThoughtsForm(props) {
    const initialValues = {
        description: '',
    }

    const validationSchema = Yup.object().shape({
        description: Yup.string().required('This field is required')
    })

    const handleOnSubmit = async (values, { resetForm }) => {
        const { onThoughtsFormSubmit } = props;

        try {
            const thoughtsValues = {
                description: values.description,
            }

            onThoughtsFormSubmit(thoughtsValues)
            resetForm();

        } catch (error) {
            console.log('Fail: ', error.message);
        }
    }

    return (
        <div>
            <h1>Share your thoughts...</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleOnSubmit}
            >
                {(formikProps) => {
                    const { values, errors, touched } = formikProps
                    console.log({ values, errors, touched })

                    return (
                        <Form >
                            <FastField
                                name="description"
                                component={TextAreaField}

                                placeholder="Your thoughts..."
                            >
                            </FastField>
                            <button type="submit">Post</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default CreateThoughtsForm;