import {FC} from "react";

import styles from './styles.module.css'

type Props = {
    name: string;
    phoneNumber: string;
}

const Contact: FC<Props> = ({name, phoneNumber}) => {
    return <div className={styles.contactSection}>
        <p>{name}</p>
        <p><a className={styles.phoneNumberAnchor} href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
    </div>
}

export {Contact}