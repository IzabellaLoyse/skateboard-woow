/* eslint-disable import/no-extraneous-dependencies */
import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import './_Product.scss';
import Button from '../Button/index';

const { div, h2, img } = helpers(h);

const Product = (id, titleName, imgLink) => div(
  { id, className: 'wow-product' },
  [
    div({ className: 'wow-product-img' }, img({ src: imgLink })),
    div({ className: 'wow-product-footer' }, [h2(titleName), Button(
      'customize-skateboard',
      '',
      true,
      'customize-skateboard',
      'Escolher Estilo',
    )]),
  ],
);

export default Product;
