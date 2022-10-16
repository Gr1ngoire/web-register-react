import {Validator} from "../validator";

class GroupValidator extends Validator {

    validate(value: string) {
        this.validateLength(value)
    }

    private validateLength(value: string): void {
        if (value.length === 0) {
            throw new Error('Поле групи не може бути порожнім');
        }
    }
}

export {GroupValidator}