import {FC} from "react";

import styles from './styles.module.css'

const SignUp: FC = () => {
    return <div className={styles.signUpWrapper}>
        <form className={styles.signUpForm}>
            <input type="email" name="email"/>
            <input type="text" name="name"/>
            <input type="text" name="surname"/>
            <input type="text" name="secondName"/>
            <input type="date" name="birthDate"/>
            <select name="group">
                <option>IA-11</option>
                <option>IA-12</option>
                <option>IA-13</option>
                <option>IA-14</option>
            </select>
            <input type="password" name="password"/>
            <button type="submit"/>
        </form>
    </div>
}

export {SignUp}