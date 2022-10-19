import {Validator} from "../validator";

class PhoneNumberValidator extends Validator {

    private UKRAINIAN_PHONE_NUMBER_DEFAULT_FORMAT = /\+380(\d{9})/g
    private UKRAINIAN_PHONE_NUMBER_DEFAULT_LENGTH = 13;

    validate(value: string) {
        console.log(value)
        this.validateZeroLength(value);
        this.validateFormat(value);
    }

    private validateZeroLength(value: string): void {
        if (value.length === 0) {
            throw new Error('Номер телефону не може бути порожнім');
        }
    }

    private validateFormat(value: string): void {
        if (!value.match(this.UKRAINIAN_PHONE_NUMBER_DEFAULT_FORMAT) || value.length !== this.UKRAINIAN_PHONE_NUMBER_DEFAULT_LENGTH) {
            throw new Error('Номер телефону має бути у форматі, зазначеним у полі вводу телефону');
        }
        console.log("OK")
    }
}

export {PhoneNumberValidator}