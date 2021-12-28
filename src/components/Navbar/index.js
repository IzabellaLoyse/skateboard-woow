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
    a({ href: '/', id: 'home' }, 'Home'),
    a({ href: '/customize', id: 'customize' }, 'Montar skate'),
    a({ href: '/about', id: 'about' }, 'Sobre'),
  ]),
]);
const allNavLinks = Navbar.querySelectorAll('.wow-menu a');

allNavLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const linkPath = link.getAttribute('href');

    window.history.pushState(null, 'Title', linkPath);
  });
});

export default Navbar;
