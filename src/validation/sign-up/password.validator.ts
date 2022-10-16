import {Validator} from "../validator";

class PasswordValidator extends Validator {

    validate(value: string) {
        this.validateZeroLength(value);
        this.validateFormat(value);
    }

    private validateZeroLength(value: string): void {
        if (value.length === 0) {
            throw new Error('Пароль не може бути порожнім');
        }
    }

    private validateFormat(value: string): void {
        if (value.length < 8) {
            throw new Error('Пароль має бути хоча б 8 символів в довжину');
        } else if (value.length > 20) {
            throw new Error('Пароль має бути хоча б 8 символів в довжину');
        } else if (!/\d/g.test(value)) {
            throw new Error('Пароль повинен мати хоча б 1 число');
        } else if (!/[A-Z]/g.test(value)) {
            throw new Error('Пароль повинен мати хоча б одну латинську букву у верхньому реєстрі');
        } else if (!/[!$#&]/g.test(value)) {
            throw new Error('Пароль повинен мати хоча б один спеціальний символ - !, $, #, &');
        }
    }
}

export {PasswordValidator}