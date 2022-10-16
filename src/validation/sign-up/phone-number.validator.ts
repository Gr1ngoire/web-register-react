import {Validator} from "../validator";

class PhoneNumberValidator extends Validator {

    private UKRAINIAN_PHONE_NUMBER_DEFAULT_FORMAT = /\+380(\d{2})(\d{3})(\d{2})(\d{2})/g

    validate(value: string) {
        this.validateZeroLength(value);
        this.validateFormat(value);
    }

    private validateZeroLength(value: string): void {
        if (value.length === 0) {
            throw new Error('Номер телефону не може бути порожнім');
        }
    }

    private validateFormat(value: string): void {
        if (!value.match(this.UKRAINIAN_PHONE_NUMBER_DEFAULT_FORMAT)) {
            throw new Error('Номер телефону має бути у форматі, зазначеним у полі вводе телефону');
        }
    }
}

export {PhoneNumberValidator}