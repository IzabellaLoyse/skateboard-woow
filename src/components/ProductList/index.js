/* eslint-disable import/no-extraneous-dependencies */
import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import './_ProductList.scss';
import Product from '../Product/index';

import imgSkateboard from '../../assets/images/skateboard.png';
import imgLongboard from '../../assets/images/longboard.png';
import imgCruiser from '../../assets/images/cruiser.png';

const {
  div,
} = helpers(h);

const productSkateboard = Product(
  'skateboard',
  'Skateboard',
  imgSkateboard,
);
const productLongboard = Product(
  'longboard',
  'Longboard',
  imgLongboard,
);
const productCruiser = Product('cruiser', 'Cruiser', imgCruiser);

const ProductList = div({ className: 'wow-product-list' }, [
  productSkateboard,
  productLongboard,
  productCruiser,
]);

export default ProductList;
