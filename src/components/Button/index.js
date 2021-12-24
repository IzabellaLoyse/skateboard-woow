/* eslint-disable import/no-extraneous-dependencies */
import h from 'hyperscript';
import helpers from 'hyperscript-helpers';

const { button } = helpers(h);

const Button = button({ id: ' btn ' }, 'Meu botão');

export default Button;
