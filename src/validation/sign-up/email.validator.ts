import {Validator} from "../validator";

class EmailValidator extends Validator {

    private EMAIL_DEFAULT_FORMAT = /\w+@\w+\.\w+/g

    validate(value: string) {
        this.validateZeroLength(value);
        this.validateFormat(value);
    }

    private validateZeroLength(value: string): void {
        if (value.length === 0) {
            throw new Error('Email не може бути порожнім');
        }
    }

    private validateFormat(value: string): void {
        if (!value.match(this.EMAIL_DEFAULT_FORMAT)) {
            throw new Error('Email має мати наступний формат - abc@test.com');
        }
    }
}

export {EmailValidator}