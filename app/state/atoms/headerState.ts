import { atom } from 'recoil';

export const headerState = atom<boolean>({
  key: 'headerState',
  default: true,
});