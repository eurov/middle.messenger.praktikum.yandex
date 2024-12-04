import input from './profileInput.tpl';
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

export default class ProfileInput extends Block<IInputProps> {
    constructor(props: IInputProps) {
        super({
            ...props,
            classes: 'input',
            events: {
                blur: (event: any) => {
                    const validateResult = validateInput(event.target.value, props.rules || []);
                    if (validateResult) {
                        this.setProps({
                            ...this.props,
                            error: validateResult,
                            value: event.target.value,
                        });
                    } else {
                        this.setProps({
                            ...this.props,
                            error: false,
                            value: event.target.value,
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
