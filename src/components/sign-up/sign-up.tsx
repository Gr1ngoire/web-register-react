import {FC} from "react";

import styles from './styles.module.css'
import {Link} from "react-router-dom";
import {AppRoutes} from "../../common/enums/app/app-route.enum";

const SignUp: FC = () => {
    return <div className={styles.signUpWrapper}>
        <form className={styles.signUpForm}>
            <h3 className={styles.formHeading}>Реєстрація</h3>
            <label className={styles.formLabel}>Email</label>
            <input placeholder="Ваш email" type="email" name="email"/>
            <label className={styles.formLabel}>Ім'я</label>
            <input placeholder="Ваше ім'я" type="text" name="name"/>
            <label className={styles.formLabel}>Прізвище</label>
            <input placeholder="Ваше прізвище" type="text" name="surname"/>
            <label className={styles.formLabel}>По-батькові</label>
            <input placeholder="Ваше по-батькові"  type="text" name="secondName"/>
            <label className={styles.formLabel}>Дата народження</label>
            <input placeholder="Ваша дата народження"  type="date" name="birthDate"/>
            <label className={styles.formLabel}>Оберіть вашу групу</label>
            <select name="group">
                <option>IA-11</option>
                <option>IA-12</option>
                <option>IA-13</option>
                <option>IA-14</option>
            </select>
            <label className={styles.formLabel}>Пароль</label>
            <input placeholder="Ваш пароль" type="password" name="password"/>
            <button className={styles.signUpButton} type="submit">Зареєструватись</button>
            <div className={styles.switchWrapper}>
                <p className={styles.switch}>Вже маєте акаунт?</p>
                <button type="button"><Link to={AppRoutes.signIn}>Вхід</Link></button>
            </div>
        </form>
    </div>
}

export {SignUp}