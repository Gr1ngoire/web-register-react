import {FC} from "react";

import styles from './styles.module.css'

const Loader: FC = () => {
    return <div className={styles.loader}>
        <div className={styles.animationCircleWrapper}>
            <div className={styles.animationCircle}></div>
            <div className={styles.animationCircle}></div>
        </div>
    </div>
}

export {Loader}