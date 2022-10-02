import {FC} from "react";

import styles from './styles.module.css'
import {Link} from "react-router-dom";
import {AppRoutes} from "../../common/enums/enums";

const SignIn: FC = () => {
    return <div className={styles.signInWrapper}>
        <form className={styles.signInForm}>
            <h3 className={styles.formHeading}>Увійти</h3>
            <label className={styles.formLabel}>Email</label>
            <input placeholder="Your email" type="email" name="email"/>
            <label className={styles.formLabel}>Password</label>
            <input placeholder="Your password" type="password" name="password"/>
            <button className={styles.signInButton} type="submit">Увійти</button>
            <div className={styles.switchWrapper}>
                <p className={styles.switch}>Не маєте акаунту?</p>
                <button type="button"><Link to={AppRoutes.signUp}>Реєстрація</Link></button>
            </div>
        </form>
    </div>
}

export {SignIn}