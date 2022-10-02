import {FC} from "react";

import styles from './styles.module.css'

type Props = {
    isAnswer: boolean;
    content: string;
}

const Quote: FC<Props> = ({isAnswer, content}) => {
    return <div className={`${styles.quoteWrapper} ${isAnswer ? styles.answer : styles.question}`}>
        <p className={styles.content}>{content}</p>
    </div>
}

export {Quote}