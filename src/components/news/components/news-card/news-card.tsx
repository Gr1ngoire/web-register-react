import {FC} from "react";

import styles from './styles.module.css'

type Props = {
    imgUrl: string;
    postDate: string;
    title: string;
    description: string;
}

const NewsCard: FC<Props> = ({imgUrl, postDate, title, description}) => {
    return <div className={styles.cardWrapper}>
        <img className={styles.newsImg} alt="newsCard" src={imgUrl}/>
        <p>{postDate}</p>
        <div className={styles.newsInfoSection}>
            <h3 className={styles.newsTitle}>{title}</h3>
            <p className={styles.newsDescription}>{description}</p>
        </div>
    </div>
}

export {NewsCard}