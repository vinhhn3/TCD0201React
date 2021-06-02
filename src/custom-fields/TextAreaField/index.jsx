import React from 'react';
import PropTypes from 'prop-types';

TextAreaField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

TextAreaField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function TextAreaField(props) {
    const {
        field, form,
        type, label, placeholder, disabled,
    } = props;

    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form
    const showErrors = errors[name] && touched[name]

    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}

                type={type}
                disabled={disabled}
                placeholder={placeholder}
            >

            </textarea>
            {showErrors && <p>{errors[name]}</p>}
        </div>
    );
}

export default TextAreaField;