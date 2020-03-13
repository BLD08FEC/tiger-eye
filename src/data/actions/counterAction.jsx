import { CHANGE_COUNT } from '../types/types';

const changeCount = (count) => ({
  type: CHANGE_COUNT,
  // eslint-disable-next-line object-shorthand
  count: count,
});

export default changeCount;
