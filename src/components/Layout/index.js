/* eslint-disable import/no-extraneous-dependencies */
import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import './layout.scss';

const {
  section, header, main, aside,
} = helpers(h);

const PageLayout = section({ className: 'wow-page-layout' }, [
  header({ className: 'wow-header' }),
  aside({ className: 'wow-sidebar-left' }),
  main({ className: 'wow-main' }),
  aside({ className: 'wow-sidebar-right' }),
]);

export default PageLayout;
