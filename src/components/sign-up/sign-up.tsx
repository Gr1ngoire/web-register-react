import {ChangeEvent, FC, FormEvent, useState} from "react";
import {Link} from "react-router-dom";
import PhoneInput from "react-phone-number-input/input";

import styles from './styles.module.css'
import {AppRoutes} from "../../common/enums/app/app-route.enum";
import {UserRegisterData} from "../../common/types/user/user-register-data.type";
import {defaultUserDataValues} from "./common/default-user-data-values";
import {RegistrationErrors} from "./common/types/types";
import {defaultErrorsValues} from "./common/default-errors-values";
import {SignUpValidator} from "../../validation/sign-up/sign-up.validator";

type ActionRow = {
    status: boolean;
    data: UserRegisterData;
}

const SignUp: FC = () => {
    const validator = new SignUpValidator();
    const [tableData, setTableData] = useState<ActionRow[]>([]);
    const [userData, setUserData] = useState<UserRegisterData>(defaultUserDataValues);
    const [errors, setErrors] = useState<RegistrationErrors>(defaultErrorsValues);
    const [isRegistrationLocked, setIsRegistrationLocked] = useState<boolean>(true);

    const resetData = () => {
        setUserData(prevState => ({
            email: '',
            phoneNumber: '',
            name: '',
            surname: '',
            secondName: '',
            gender: prevState.gender,
            group: prevState.group,
            birthDate: '',
            password: ''
        }));
    }

    const handleFormStateChange = (name: string, value: string) => {
        setUserData(prevState => {
            const nextState = {...prevState, [name]: value}
            try {
                validator.validateField(name, value);
                const isFormInvalid = Object.values(userData).some((el) => !Boolean(el));
                setIsRegistrationLocked(isFormInvalid);
                setErrors(prevState => ({...prevState, [name]: ''}));
            } catch (e) {
                setIsRegistrationLocked(true);
                setErrors(prevState => ({...prevState, [name]: (e as Error).message}));
            }
            return nextState;
        });
    }

    const handlePhoneNumberChange = (value?: any): void => {
       handleFormStateChange('phoneNumber', `${value}`);
    }

    const handleAllParamsFormStateChange = (event: ChangeEvent<HTMLInputElement>): void => {
        handleFormStateChange(event.target.name, event.target.value);
    }

    const handleChangeGroup = (event: ChangeEvent<HTMLSelectElement>): void => {
        handleFormStateChange(event.target.name, event.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTableData(prevState => ([...prevState, {status: false, data: userData}]))
        resetData();
        setIsRegistrationLocked(true);
    }

    const handleStatusChange = (email: string) => (event: ChangeEvent<HTMLInputElement>) => {
        setTableData((prevState) => {
            const updatedActionRows = tableData.filter((el => el.data.email === email)) as ActionRow[];
            updatedActionRows.forEach((row) => {
                row.status = event.target.checked
            })
            return [...prevState];
        })
    }

    const resetStatuses = () => {
        setTableData(prevState => [...prevState.map((row) => ({...row, status: false}))])
    }

    const handleDeleteSelected = () => {
        setTableData(prevState => [...prevState.filter((row) => !row.status)])
        resetStatuses();
    }

    const handleCopySelected = () => {
        setTableData(prevState => [...prevState, ...prevState.filter((row) => row.status)])
        resetStatuses();
    }


    return <div className={styles.signUpWrapper}>
        <form className={styles.signUpForm} onSubmit={handleSubmit}>
            <h3 className={styles.formHeading}>????????????????????</h3>
            <label className={styles.formLabel}>Email</label>
            <input placeholder="?????? email" type="email" name="email" onChange={handleAllParamsFormStateChange}
                   value={userData.email}/>
            <label className={styles.errorLabel}>{errors.email}</label>
            <label className={styles.formLabel}>?????????? ????????????????</label>
            <PhoneInput
                placeholder="+380 __ ___ ____"
                value={userData.phoneNumber}
                onChange={handlePhoneNumberChange}/>
            <label className={styles.errorLabel}>{errors.phoneNumber}</label>
            <label className={styles.formLabel}>????'??</label>
            <input placeholder="???????? ????'??" type="text" name="name" onChange={handleAllParamsFormStateChange}
                   value={userData.name}/>
            <label className={styles.errorLabel}>{errors.name}</label>
            <label className={styles.formLabel}>????????????????</label>
            <input placeholder="???????? ????????????????" type="text" name="surname" onChange={handleAllParamsFormStateChange}
                   value={userData.surname}/>
            <label className={styles.errorLabel}>{errors.surname}</label>
            <label className={styles.formLabel}>????-????????????????</label>
            <input placeholder="???????? ????-????????????????" type="text" name="secondName" onChange={handleAllParamsFormStateChange}
                   value={userData.secondName}/>
            <label className={styles.errorLabel}>{errors.secondName}</label>
            <ul className={styles.genderSection}>
                <label className={styles.formLabel}>??????????</label>
                <div className={styles.genderSectionFraction}>
                    <input placeholder="???????? ????-????????????????" type="radio" value="male" name="gender"
                           onChange={handleAllParamsFormStateChange}/>
                    <label className={styles.genderOptionLabel}>????????????????</label>
                </div>
                <div className={styles.genderSectionFraction}>
                    <input placeholder="???????? ????-????????????????" type="radio" value="female" name="gender"
                           onChange={handleAllParamsFormStateChange}/>
                    <label className={styles.genderOptionLabel}>????????????</label>
                </div>
                <div className={styles.genderSectionFraction}>
                    <input placeholder="???????? ????-????????????????" type="radio" value="other" name="gender"
                           onChange={handleAllParamsFormStateChange}/>
                    <label className={styles.genderOptionLabel}>????????</label>
                </div>
            </ul>
            <label className={styles.errorLabel}>{errors.gender}</label>
            <label className={styles.formLabel}>???????? ????????????????????</label>
            <input placeholder="???????? ???????? ????????????????????" type="date" name="birthDate" onChange={handleAllParamsFormStateChange}
                   value={userData.birthDate}/>
            <label className={styles.errorLabel}>{errors.birthDate}</label>
            <label className={styles.formLabel}>?????????????? ???????? ??????????</label>
            <select name="group" onChange={handleChangeGroup} value={userData.group}>
                <option>IA-11</option>
                <option>IA-12</option>
                <option>IA-13</option>
                <option>IA-14</option>
            </select>
            <label className={styles.errorLabel}>{errors.group}</label>
            <label className={styles.formLabel}>????????????</label>
            <input placeholder="?????? ????????????" type="password" name="password" onChange={handleAllParamsFormStateChange}
                   value={userData.password}/>
            <label className={styles.errorLabel}>{errors.password}</label>
            <button className={`${styles.signUpButton} ${isRegistrationLocked && styles.locked}`}
                    disabled={isRegistrationLocked} type="submit">??????????????????????????????
            </button>
            <div className={styles.switchWrapper}>
                <p className={styles.switch}>?????? ?????????? ?????????????</p>
                <Link to={AppRoutes.signIn}>
                    <button type="button">????????</button>
                </Link>
            </div>
        </form>
        <div className={styles.tableWrapper}>
            <div className={styles.actionSection}>
                <button className={styles.actionButton} type="button" onClick={handleDeleteSelected}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path
                            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>
                <button className={styles.actionButton} type="button" onClick={handleCopySelected}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-clipboard-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z"/>
                    </svg>
                </button>
            </div>
            <table className={styles.dataTable} border={1} rules={"rows"}>
                <thead>
                <tr>
                    <th>Selected</th>
                    <th>Email</th>
                    <th>????'??</th>
                    <th>????????????????</th>
                    <th>????-????????????????</th>
                    <th>??????????</th>
                    <th>???????? ????????????????????</th>
                    <th>?????????? ????????????????</th>
                    <th>????????????</th>
                    <th>??????????</th>
                </tr>
                </thead>
                <tbody>
                {tableData.map(({
                                    status, data: {
                        email,
                        name,
                        surname,
                        secondName,
                        group,
                        birthDate,
                        phoneNumber,
                        password,
                        gender
                    }
                                }, index) => <tr key={index}>
                    <td><input type="checkbox" checked={status} onChange={handleStatusChange(email)}/></td>
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
    </div>
}

export {SignUp}