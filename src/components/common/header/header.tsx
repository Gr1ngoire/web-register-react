import {FC} from "react";

import styles from './styles.module.css'
import {Link} from "react-router-dom";
import {AppRoutes} from "../../../common/enums/enums";

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
            <h5><Link className={styles.headerAnchor} to={AppRoutes.root}>Головна</Link></h5>
            <h5><Link className={styles.headerAnchor} to={AppRoutes.students}>Успішність</Link></h5>
            <h5><Link className={styles.headerAnchor} to={AppRoutes.contacts}>Контакти</Link></h5>
            <h5><Link className={styles.headerAnchor} to={AppRoutes.faq}>FAQ</Link></h5>
            <h5><Link className={styles.headerAnchor} to={AppRoutes.signIn}>Вхід</Link></h5>
        </div>
    </header>
}

export {Header}