type Gender = 'male' | 'female' | 'other';
type StudentGroup = 'IA-11' | 'IA-12' | 'IA-13' | 'IA-14'

type UserRegisterData = {
    email: string;
    phoneNumber: string;
    name: string;
    surname: string;
    secondName: string;
    gender: Gender;
    birthDate: string;
    group: StudentGroup;
    password: string;
}

export {type UserRegisterData};