import Handlebars from 'handlebars';
import button from './button/button.hbs?raw';
import formInput from './formInput/formInput.hbs?raw';

Handlebars.registerPartial('button', button);
Handlebars.registerPartial('formInput', formInput);
