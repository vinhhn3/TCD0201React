import React from 'react';
import PropTypes from 'prop-types';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function InputField(props) {
    const {
        field, form,
        type, label, placeholder, disabled,
    } = props;

    const { name, value, onChange, onBlur } = field;
    const { errors, touched } = form
    const showErrors = errors[name] && touched[name]

    return (
        <div className="form-control">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}

                type={type}
                disabled={disabled}
                placeholder={placeholder}
            />

            {showErrors && <p>{errors[name]}</p>}
        </div>
    );
}

export default InputField;