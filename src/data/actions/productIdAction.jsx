/* eslint-disable import/prefer-default-export */
import { CHANGE_PRODUCT_ID } from '../types/types';

export const changeProductId = (productId) => ({
  type: CHANGE_PRODUCT_ID,
  productId,
});

