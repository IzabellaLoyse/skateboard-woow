/* eslint-disable import/no-extraneous-dependencies */
import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import './_Steps.scss';

const { section, a, div } = helpers(h);

const Steps = section({ className: 'wow-steps' }, [
  div({ className: 'wow-step wow-step-1 ' }, [
    a({ href: '#' }, '1'),
    a({ href: '#' }, 'Escolha o estilo'),
  ]),
  div({ className: 'wow-step wow-step-2 ' }, [
    a({ href: '#' }, '2'),
    a({ href: '#' }, 'Customize'),
  ]),
  div({ className: 'wow-step wow-step-3 ' }, [
    a({ href: '#' }, '3'),
    a({ href: '#' }, 'Envie o pedido'),
  ]),
]);

export default Steps;
