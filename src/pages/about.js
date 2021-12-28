/* eslint-disable import/no-extraneous-dependencies */
import h from 'hyperscript';
import helpers from 'hyperscript-helpers';

const { section, p } = helpers(h);

const aboutPage = section({ className: 'wow-about-page' }, [
  p({ className: 'page-home-text' }, 'Sobre a Woow!'),
]);

export default aboutPage;
