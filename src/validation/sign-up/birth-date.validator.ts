import {Validator} from "../validator";

class BirthDateValidator extends Validator {

    validate(value: string) {
        this.validateLength(value)
        this.validateDate(value)
        this.validateAge(value)
    }

    private validateLength(value: string): void {
        if (value.length === 0) {
            throw new Error('Дата народження не може бути пустою');
        }
    }

    private validateDate(value: string): void {
        if (new Date(value).getTime() >= new Date().getTime()) {
            throw new Error('Дата народження не може сьогоднішньою, або в майбутньому');
        }
    }

    private validateAge(value: string): void {

        const millisecondsInThirteenYears = ((13 * 365) + 4) * 24 * 60 * 60 * 1000

        if (new Date().getTime() - new Date(value).getTime() < millisecondsInThirteenYears) {
            throw new Error('На сайті можуть реєструватись лише особи, яким виповнилось 13 років');
        }
    }
}

export {BirthDateValidator}