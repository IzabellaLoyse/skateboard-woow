/* eslint-disable import/no-extraneous-dependencies */
import h from 'hyperscript';
import helpers from 'hyperscript-helpers';

const { section, p } = helpers(h);

const homePage = section({ className: 'wow-home-page' }, [
  p({ className: 'page-home-text' }, 'Bem vindo ao Woow!'),
]);

export default homePage;
