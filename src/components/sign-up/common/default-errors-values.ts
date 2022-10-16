import {RegistrationErrors} from "./types/registration-errors.type";

const defaultErrorsValues: RegistrationErrors = {
    email: '',
    phoneNumber: '',
    name: '',
    surname: '',
    secondName: '',
    gender: '',
    birthDate: '',
    group: '',
    password: ''
}

export {defaultErrorsValues}