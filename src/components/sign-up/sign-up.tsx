import {ChangeEvent, FC, FormEvent, useMemo, useState} from "react";
import {Link} from "react-router-dom";

import styles from './styles.module.css'
import {AppRoutes} from "../../common/enums/app/app-route.enum";
import {UserRegisterData} from "../../common/types/user/user-register-data.type";
import {defaultUserDataValues} from "./common/default-user-data-values";
import {RegistrationErrors} from "./common/types/types";
import {defaultErrorsValues} from "./common/default-errors-values";
import {SignUpValidator} from "../../validation/sign-up/sign-up.validator";

const SignUp: FC = () => {
    const validator = new SignUpValidator();
    const [tableData, setTableData] = useState<UserRegisterData[]>([]);
    const [userData, setUserData] = useState<UserRegisterData>(defaultUserDataValues);
    const [errors, setErrors] = useState<RegistrationErrors>(defaultErrorsValues);
    const [isRegistrationLocked, setIsRegistrationLocked] = useState<boolean>(true);

    const resetData = () => {
        setUserData({
            email: '',
            phoneNumber: '',
            name: '',
            surname: '',
            secondName: '',
            gender: '',
            group: 'IA-11',
            birthDate: '',
            password: ''
        });
    }

    const handleChangeFormState = (event: ChangeEvent<HTMLInputElement>): void => {
        setUserData(prevState => {
            const nextState = {...prevState, [event.target.name]: event.target.value}
            try {
                validator.validateField(event.target.name, event.target.value);
                const isFormInvalid = Object.values(userData).some((el) => !Boolean(el));
                setIsRegistrationLocked(isFormInvalid);
                setErrors(prevState => ({...prevState, [event.target.name]: ''}));
            } catch (e) {
                setErrors(prevState => ({...prevState, [event.target.name]: (e as Error).message}));
                setIsRegistrationLocked(true);
            }
            return nextState;
        });
    }

    const handleChangeGroup = (event: ChangeEvent<HTMLSelectElement>): void => {
        setUserData(prevState => {
            const nextState = {...prevState, [event.target.name]: event.target.value}
            try {
                validator.validateField('group', event.target.value);
                const isFormInvalid = Object.values(userData).some((el) => !Boolean(el));
                setIsRegistrationLocked(isFormInvalid)
            } catch (e) {
                setIsRegistrationLocked(true);
                setErrors(prevState => ({...prevState, [event.target.name]: (e as Error).message}));
            }
            return nextState
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTableData(prevState => ([...prevState, userData]))
        resetData();
    }


    return <div className={styles.signUpWrapper}>
        <form className={styles.signUpForm} onSubmit={handleSubmit}>
            <h3 className={styles.formHeading}>Реєстрація</h3>
            <label className={styles.formLabel}>Email</label>
            <input placeholder="Ваш email" type="email" name="email" onChange={handleChangeFormState}
                   value={userData.email}/>
            <label className={styles.errorLabel}>{errors.email}</label>
            <label className={styles.formLabel}>Номер телефону</label>
            <input placeholder="+38(0__)-___-__-__" type="tel" name="phoneNumber" onChange={handleChangeFormState}
                   value={userData.phoneNumber}/>
            <label className={styles.errorLabel}>{errors.phoneNumber}</label>
            <label className={styles.formLabel}>Ім'я</label>
            <input placeholder="Ваше ім'я" type="text" name="name" onChange={handleChangeFormState}
                   value={userData.name}/>
            <label className={styles.errorLabel}>{errors.name}</label>
            <label className={styles.formLabel}>Прізвище</label>
            <input placeholder="Ваше прізвище" type="text" name="surname" onChange={handleChangeFormState}
                   value={userData.surname}/>
            <label className={styles.errorLabel}>{errors.surname}</label>
            <label className={styles.formLabel}>По-батькові</label>
            <input placeholder="Ваше по-батькові" type="text" name="secondName" onChange={handleChangeFormState}
                   value={userData.secondName}/>
            <label className={styles.errorLabel}>{errors.secondName}</label>
            <ul className={styles.genderSection}>
                <label className={styles.formLabel}>Стать</label>
                <div className={styles.genderSectionFraction}>
                    <input placeholder="Ваше по-батькові" type="radio" value="male" name="gender"
                           onChange={handleChangeFormState}/>
                    <label className={styles.genderOptionLabel}>Чоловіча</label>
                </div>
                <div className={styles.genderSectionFraction}>
                    <input placeholder="Ваше по-батькові" type="radio" value="female" name="gender"
                           onChange={handleChangeFormState}/>
                    <label className={styles.genderOptionLabel}>Жіноча</label>
                </div>
                <div className={styles.genderSectionFraction}>
                    <input placeholder="Ваше по-батькові" type="radio" value="other" name="gender"
                           onChange={handleChangeFormState}/>
                    <label className={styles.genderOptionLabel}>Інше</label>
                </div>
            </ul>
            <label className={styles.errorLabel}>{errors.gender}</label>
            <label className={styles.formLabel}>Дата народження</label>
            <input placeholder="Ваша дата народження" type="date" name="birthDate" onChange={handleChangeFormState}
                   value={userData.birthDate}/>
            <label className={styles.errorLabel}>{errors.birthDate}</label>
            <label className={styles.formLabel}>Оберіть вашу групу</label>
            <select name="group" onChange={handleChangeGroup} value={userData.group}>
                <option>IA-11</option>
                <option>IA-12</option>
                <option>IA-13</option>
                <option>IA-14</option>
            </select>
            <label className={styles.errorLabel}>{errors.group}</label>
            <label className={styles.formLabel}>Пароль</label>
            <input placeholder="Ваш пароль" type="password" name="password" onChange={handleChangeFormState}
                   value={userData.password}/>
            <label className={styles.errorLabel}>{errors.password}</label>
            <button className={`${styles.signUpButton} ${isRegistrationLocked && styles.locked}`}
                    disabled={isRegistrationLocked} type="submit">Зареєструватись
            </button>
            <div className={styles.switchWrapper}>
                <p className={styles.switch}>Вже маєте акаунт?</p>
                <Link to={AppRoutes.signIn}>
                    <button type="button">Вхід</button>
                </Link>
            </div>
        </form>
        <table className={styles.dataTable} border={1} rules={"rows"}>
            <thead>
            <tr>
                <th>Email</th>
                <th>Ім'я</th>
                <th>Прізвище</th>
                <th>По-батькові</th>
                <th>Група</th>
                <th>Дата народження</th>
                <th>Номер телефону</th>
                <th>Пароль</th>
                <th>Стать</th>
            </tr>
            </thead>
            <tbody>
            {tableData.map(({
                                email,
                                name,
                                surname,
                                secondName,
                                group,
                                birthDate,
                                phoneNumber,
                                password,
                                gender
                            }, index) => <tr key={index}>
                <td>{email}</td>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{secondName}</td>
                <td>{group}</td>
                <td>{birthDate}</td>
                <td>{phoneNumber}</td>
                <td>{password}</td>
                <td>{gender}</td>
            </tr>)}
            </tbody>
        </table>
    </div>
}

export {SignUp}