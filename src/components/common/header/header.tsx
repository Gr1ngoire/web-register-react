import {FC} from "react";

import styles from './styles.module.css'

const Header: FC = () => {
    return <header className={styles.header}>
        <div className={styles.logoHeadingWrapper}>
            <div className={styles.headerWrapper}>
                <a href="https://kpi.ua/en" target="_blank">
                    <img alt="kpi_logo" className={styles.logo} src="/kpi_big_logo.jpg" width="50" height="50"/>
                </a>
            </div>
            <div className={styles.nameWrapper}><h4>Kyiv Polytechnic Institute</h4></div>
        </div>
        <div className={styles.headerHoverSections}>
            <h5><a className={styles.headerAnchor} target="_blank" href="#">Головна</a></h5>
            <h5><a className={styles.headerAnchor} target="_blank" href="#">Успішність</a></h5>
            <h5><a className={styles.headerAnchor} target="_blank" href="#">Контакти</a></h5>
            <h5><a className={styles.headerAnchor} target="_blank" href="#">FAQ</a></h5>
        </div>
    </header>
}

export {Header}