import { CHANGE_PRODUCT_ID } from '../types/types';

const changeProductId = (productId) => ({
  type: CHANGE_PRODUCT_ID,
  productId,
});

export default changeProductId;
