import {Validator} from "../validator";

class SecondNameValidator extends Validator {

    validate(value: string) {
        this.validateLength(value)
    }

    private validateLength(value: string): void {
        if (value.length === 0) {
            throw new Error('По-батькові не може бути порожнім');
        }
    }
}

export {SecondNameValidator}