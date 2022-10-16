import {ChangeEvent, FC, useState} from "react";
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
    const [userData, setUserData] = useState<UserRegisterData>(defaultUserDataValues);
    const [errors, setErrors] = useState<RegistrationErrors>(defaultErrorsValues);
    const [isRegistrationLocked, setIsRegistrationLocked] = useState<boolean>(true);

    const handleChangeFormState = (event: ChangeEvent<HTMLInputElement>): void => {
        try {
            Object.entries<string>(userData).forEach((entry) => {
                const [key, value] = entry;
                validator.validateField(key, value);
            });
            setUserData(prevState => ({...prevState, [event.target.name]: event.target.value}));
            setIsRegistrationLocked(false);
        } catch (e) {
            setIsRegistrationLocked(true);
            setErrors(prevState => ({...prevState, [event.target.name]: (e as Error).message}));
        }
    }

    const handleChangeGroup = (event: ChangeEvent<HTMLSelectElement>): void => {
        setUserData(prevState => ({...prevState, [event.target.name]: event.target.value}));
    }


    return <div className={styles.signUpWrapper}>
        <form className={styles.signUpForm}>
            <h3 className={styles.formHeading}>Реєстрація</h3>
            <label className={styles.formLabel}>Email</label>
            <input placeholder="Ваш email" type="email" name="email" onChange={handleChangeFormState}/>
            <label className={styles.errorLabel}>{errors.email}</label>
            <label className={styles.formLabel}>Номер телефону</label>
            <input placeholder="+38(0__)-___-__-__" type="tel" name="phoneNumber" onChange={handleChangeFormState}/>
            <label className={styles.errorLabel}>{errors.phoneNumber}</label>
            <label className={styles.formLabel}>Ім'я</label>
            <input placeholder="Ваше ім'я" type="text" name="name" onChange={handleChangeFormState}/>
            <label className={styles.errorLabel}>{errors.name}</label>
            <label className={styles.formLabel}>Прізвище</label>
            <input placeholder="Ваше прізвище" type="text" name="surname" onChange={handleChangeFormState}/>
            <label className={styles.errorLabel}>{errors.surname}</label>
            <label className={styles.formLabel}>По-батькові</label>
            <input placeholder="Ваше по-батькові"  type="text" name="secondName" onChange={handleChangeFormState}/>
            <label className={styles.errorLabel}>{errors.secondName}</label>
            <ul className={styles.genderSection}>
                <label className={styles.formLabel}>Стать</label>
                <div className={styles.genderSectionFraction}>
                    <input placeholder="Ваше по-батькові"  type="radio" value="male" name="gender" onChange={handleChangeFormState}/>
                    <label className={styles.genderOptionLabel}>Чоловіча</label>
                </div>
                <div className={styles.genderSectionFraction}>
                    <input placeholder="Ваше по-батькові"  type="radio" value="female" name="gender" onChange={handleChangeFormState}/>
                    <label className={styles.genderOptionLabel}>Жіноча</label>
                </div>
                <div className={styles.genderSectionFraction}>
                    <input placeholder="Ваше по-батькові"  type="radio" value="other" name="gender" onChange={handleChangeFormState}/>
                    <label className={styles.genderOptionLabel}>Інше</label>
                </div>
            </ul>
            <label className={styles.errorLabel}>{errors.gender}</label>
            <label className={styles.formLabel}>Дата народження</label>
            <input placeholder="Ваша дата народження"  type="date" name="birthDate" onChange={handleChangeFormState}/>
            <label className={styles.errorLabel}>{errors.birthDate}</label>
            <label className={styles.formLabel}>Оберіть вашу групу</label>
            <select name="group" onChange={handleChangeGroup}>
                <option>IA-11</option>
                <option>IA-12</option>
                <option>IA-13</option>
                <option>IA-14</option>
            </select>
            <label className={styles.errorLabel}>{errors.group}</label>
            <label className={styles.formLabel}>Пароль</label>
            <input placeholder="Ваш пароль" type="password" name="password" onChange={handleChangeFormState}/>
            <label className={styles.errorLabel}>{errors.password}</label>
            <button className={`${styles.signUpButton} ${isRegistrationLocked && styles.locked}`} disabled={isRegistrationLocked} type="submit">Зареєструватись</button>
            <div className={styles.switchWrapper}>
                <p className={styles.switch}>Вже маєте акаунт?</p>
                <Link to={AppRoutes.signIn}><button type="button">Вхід</button></Link>
            </div>
        </form>
    </div>
}

export {SignUp}