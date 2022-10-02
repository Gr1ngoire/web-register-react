import {FC} from "react";
import {Contact} from "./components/components";

import styles from './styles.module.css'
import {ContactItemDto} from "../../common/types/types";

const Contacts: FC = () => {

    const contacts: ContactItemDto[] = [
        {id: 1, name: "Пан Ректор", phoneNumber: "88005553535"},
        {id: 2, name: "Пан Декан", phoneNumber: "88005553535"},
        {id: 3, name: "Пан Ректор", phoneNumber: "88005553535"},
        {id: 4, name: "Пан Декан", phoneNumber: "88005553535"},
        {id: 5, name: "Пан Ректор", phoneNumber: "88005553535"},
        {id: 6, name: "Пан Декан", phoneNumber: "88005553535"},
        {id: 7, name: "Пан Ректор", phoneNumber: "88005553535"},
        {id: 8, name: "Пан Декан", phoneNumber: "88005553535"},
        {id: 9, name: "Пан Ректор", phoneNumber: "88005553535"},
        {id: 10, name: "Пан Декан", phoneNumber: "88005553535"},
        {id: 11, name: "Пан Ректор", phoneNumber: "88005553535"},
        {id: 12, name: "Пан Декан", phoneNumber: "88005553535"},
    ]

    return <div className={styles.contacts}>
        <div className={styles.contactsWrapper}>
            {contacts.map(({id, name, phoneNumber}) => <div key={id} className={styles.borderWrapper}><Contact name={name} phoneNumber={phoneNumber}/></div>)}
        </div>
    </div>
}

export {Contacts}