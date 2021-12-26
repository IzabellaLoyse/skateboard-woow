/* eslint-disable import/no-extraneous-dependencies */
import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import Navbar from '../Navbar/index';
import Steps from '../Steps/index';
import './_Layout.scss';

const {
  section, header, main, aside,
} = helpers(h);

const PageLayout = section({ className: 'wow-page-layout' }, [
  header({ className: 'wow-header' }, Navbar),
  aside({ className: 'wow-sidebar-left' }),
  main({ className: 'wow-main' }, Steps),
  aside({ className: 'wow-sidebar-right' }),
]);

export default PageLayout;
