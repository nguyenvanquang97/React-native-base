import * as yup from 'yup';

export const ValidationSchema = yup.object().shape({
    // fullName: yup
    //     .string()
    //     .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    //     .required('Full name is required'),

    email: yup
        .string()
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Email không đúng định dạng')
        .required('Email Address is Required'),

    // password: yup
    //     .string()
    //     .matches(/\w*[a-z]\w*/, "Mật khẩu phải ít nhất 6 ký tự, bao gồm ký tự hoa, thường, ký tự số")
    //     .matches(/\w*[A-Z]\w*/, "Mật khẩu phải ít nhất 6 ký tự, bao gồm ký tự hoa, thường, ký tự số")
    //     .matches(/\d/, "Mật khẩu phải ít nhất 6 ký tự, bao gồm ký tự hoa, thường, ký tự số")
    //     .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Mật khẩu phải ít nhất 6 ký tự, bao gồm ký tự hoa, thường, ký tự sốr")
    //     .min(6, ({ min }) => `Password must be at least ${min} characters`)
    //     .required('Password is required'),

    // phoneNumber: yup
    //     .string()
    //     .matches(/(09)(\d){8}\b/, 'Enter a valid phone number')
    //     .required('Phone number is required'),

    // confirmPassword: yup
    //     .string()
    //     .oneOf([yup.ref('password')], 'Passwords do not match')
    //     .required('Confirm password is required'),

})
export const initialValues = ({
    email: '',
    password: '',
    phoneNumber: '',
    fullName: '',
    confirmPassword: '',
})

