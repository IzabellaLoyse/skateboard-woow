/* eslint-disable import/no-extraneous-dependencies */
import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import './_Button.scss';

const { button, a } = helpers(h);

const Button = (id, className, isLink, href, btnLabel) => (isLink
  ? a({ id, className: `${className} wow-button`, href }, btnLabel)
  : button({ id, className: `${className} wow-button` }, btnLabel));

export default Button;
