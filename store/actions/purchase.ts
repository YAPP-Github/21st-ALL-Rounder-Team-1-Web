//jotai를 위한 예시입니다 https://devblog.kakaostyle.com/ko/2022-01-13-2-jotai-recipe/
import { atom } from 'jotai';
import { orderer_email_atom } from '../atoms';

export const purchaseAtom = atom(null, async (get, set) => {
  const orderer_email = get(orderer_email_atom);
});
