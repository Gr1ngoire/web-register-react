type QuestionAnswerItemDto = {
    content: string;
    postDate: string;
}

type QuestionItemDto = {
    id: number;
    content: string;
    postDate: string;
    answer: QuestionAnswerItemDto | null
}

export {type QuestionItemDto}