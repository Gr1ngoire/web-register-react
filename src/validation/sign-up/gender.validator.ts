import {Validator} from "../validator";

class GenderValidator extends Validator {

    validate(value: string) {
        this.validateLength(value)
    }

    private validateLength(value: string): void {
        if (value.length === 0) {
            throw new Error('Поле статі не може бути порожнім');
        }
    }
}

export {GenderValidator}