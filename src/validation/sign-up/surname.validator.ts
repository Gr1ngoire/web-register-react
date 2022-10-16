import {Validator} from "../validator";

class SurnameValidator extends Validator {

    validate(value: string) {
        this.validateLength(value)
    }

    private validateLength(value: string): void {
        if (value.length === 0) {
            throw new Error('Прізвище не може бути пустим');
        }
    }
}

export {SurnameValidator}