import {FC} from "react";
import {Quote} from "./components/components";

import styles from './styles.module.css'

type Props = {
    question: string;
    questionPostDate: string;
    answer?: string;
    answerPostDate?: string;
}

const QuestionAnswerSection: FC<Props> = ({question, questionPostDate, answer = "", answerPostDate = ""}) => {
    return <div className={styles.questionAnswerSection}>
        <div className={styles.questionWrapper}>
            <p>{questionPostDate}</p>
            <Quote isAnswer={false} content={question}/>
        </div>
        {answer && answerPostDate ?
            <div className={styles.answerWrapper}>
                <p>{answerPostDate}</p>
                <Quote isAnswer={true} content={answer}/>
            </div>
            : null}
    </div>
}

export {QuestionAnswerSection}