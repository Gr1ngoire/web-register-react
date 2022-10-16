import {UserRegisterData} from "../../../common/types/user/user-register-data.type";

const defaultUserDataValues: UserRegisterData = {
    email: '',
    phoneNumber: '',
    name: '',
    surname: '',
    secondName: '',
    gender: 'male',
    birthDate: '',
    group: 'IA-11',
    password: '',
}

export {defaultUserDataValues};