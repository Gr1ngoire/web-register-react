import {Validator} from "../validator";
import {NameValidator} from "./name.validator";
import {SurnameValidator} from "./surname.validator";
import {PhoneNumberValidator} from "./phone-number.validator";
import {EmailValidator} from "./email.validator";
import {SecondNameValidator} from "./second-name.validator";
import {PasswordValidator} from "./password.validator";
import {GroupValidator} from "./group.validator";
import {GenderValidator} from "./gender.validator";
import {BirthDateValidator} from "./birth-date.validator";

class SignUpValidator {

    private VALIDATORS = new Map<string, Validator>([['name', new NameValidator()], ['surname', new SurnameValidator()], ['phoneNumber', new PhoneNumberValidator()], ['email', new EmailValidator()], ['secondName', new SecondNameValidator()], ['password', new PasswordValidator()], ['group', new GroupValidator()], ['gender', new GenderValidator()], ['birthDate', new BirthDateValidator()]]);

    public validateField(fieldName: string, value: string): void {
        (this.VALIDATORS.get(fieldName) as Validator).validate(value);
    }
}

export {SignUpValidator}