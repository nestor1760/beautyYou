import { selector } from 'recoil';
import { headerState } from '../atoms/headerState';

export const doubledCounterState = selector({
  key: 'doubledCounterState',
  get: ({ get }) => {
    const count = get(headerState);
    return count;
  },
});
