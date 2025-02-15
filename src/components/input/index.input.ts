
import input from './input.tpl';
import { Block } from '@utils/block';
import { validateInput } from '@/utils/helpers';


interface IInputProps {
    name: string,
    placeholder?: string,
    type?: string,
    label?: string,
    value?: string,
    rules?: string[],
    required?: boolean
}

export default class Input extends Block<IInputProps> {
    constructor(props: IInputProps) {
        super({
            ...props,
            classes: 'input',
            events: {
                blur: (event: Event) => {
                    const validateResult = validateInput((event.target as HTMLInputElement).value, props.rules || []);
                    if (validateResult) {
                        this.setProps({
                            ...this.props,
                            error: validateResult,
                            value: (event.target as HTMLInputElement).value,
                        });
                    } else {
                        this.setProps({
                            ...this.props,
                            error: false,
                            value: (event.target as HTMLInputElement).value,
                        });
                    }
                },
            },
        });
    }

    render(): DocumentFragment {
        return this.compile(input, this.props);
    }
}
