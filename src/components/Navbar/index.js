/* eslint-disable import/no-extraneous-dependencies */
import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import './_Navbar.scss';
import Logo from '../../assets/images/logo-woow.png';

const {
  div, img, nav, a,
} = helpers(h);

const Navbar = div({ className: 'wow-navbar' }, [
  div({ className: 'wow-logo' }, img({ src: Logo })),
  nav({ className: 'wow-menu' }, [
    a({ href: '#' }, 'Home'),
    a({ href: '#' }, 'Montar skate'),
    a({ href: '#' }, 'Sobre'),
  ]),
]);

export default Navbar;
