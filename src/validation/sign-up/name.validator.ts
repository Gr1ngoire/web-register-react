import {Validator} from "../validator";

class NameValidator extends Validator {

    validate(value: string) {
        this.validateLength(value)
    }

    private validateLength(value: string): void {
        if (value.length === 0) {
            throw new Error('Ім\'я не може бути порожнім');
        }
    }
}

export {NameValidator}