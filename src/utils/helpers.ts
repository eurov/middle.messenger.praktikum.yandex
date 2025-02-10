// import { app } from '@/main';


const validationRules = new Map<string, any>([
    ['name-valid', (value: string) => !/^[А-ЯA-ZЁ][а-яёA-Za-z-]*$/g.test(value) && `латиница или кириллица,
первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).`],
    ['login-valid', (value: string) => !/^(?![0-9_-]+$)[A-Za-z0-9_-]{3,20}$/g.test(value)
        && `Логин должен быть от 3 до 20 символов, латиница, может содержать цифры,
но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание).`],
    ['email-valid', (value: string) => !/^[A-Za-z0-9\\._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g.test(value)
        && `Email должен быть латиница, может включать цифры и спецсимволы вроде дефиса
и подчёркивания, обязательно должна быть «собака» (@) и точка после неё,
но перед точкой обязательно должны быть буквы.`],
    ['password-valid', (value: string) => !/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/g.test(value)
        && 'Пароль должен быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.'],
    ['phone-valid', (value: string) => !/^\+?\d{10,15}$/g.test(value)
        && 'Телефон должен быть от 10 до 15 символов, состоит из цифр, может начинается с плюса.'],
    ['not-empty', (value: string) => !/.+/g.test(value)
        && 'не должно быть пустым'],
]);
export const validateInput = (value: string, rules: string[]) => {
    for (const rule of rules) {
        const validationRuleHandler = validationRules.get(rule);
        if (validationRuleHandler !== undefined) {
            const resultValidation = validationRuleHandler(value);
            if (resultValidation) return resultValidation;
        }
    }
    return false;
};

// const isValid = (event: SubmitEvent) => {
//     event.preventDefault();
//     const formInputs = (event.target as Element).querySelectorAll('input');
//     return Array.from(formInputs).every(input => !input.classList.contains('invalid'));
// };

// export const validateSignin = (event: SubmitEvent) => {
//     if (isValid(event)) {
//         app.url = '/chats';
//         app.render();
//     }
// };
// export const validateProfile = (event: SubmitEvent) => {
//     if (isValid(event)) {
//         app.url = '/profile';
//         app.render();
//     }
// };
export const getFormData = (event: SubmitEvent) => {
    event.preventDefault();
    const formData: Record<string, string> = {};
    if (event.target == null) {
        return formData;
    }
    const formInputs = (event.target as Element).querySelectorAll('input');
    formInputs.forEach((input: HTMLInputElement) => {
        formData[input.name] = input.value;
        input.dispatchEvent(new Event('blur'));
    });
    return formData;
};


type Indexed<T = any> = {
    [key in string]: T;
};

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
    for (const p in rhs) {
        if (!rhs.hasOwnProperty(p)) {
            continue;
        }

        try {
            if (rhs[p] instanceof Object) {
                rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
            } else {
                lhs[p] = rhs[p];
            }
        } catch (e) {
            lhs[p] = rhs[p];
        }
    }

    return lhs;
}

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
    if (typeof object !== 'object' || object === null) {
        return object;
    }

    if (typeof path !== 'string') {
        throw new Error('path must be string');
    }

    const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
        [key]: acc,
    }), value as any);
    return merge(object as Indexed, result);
}
