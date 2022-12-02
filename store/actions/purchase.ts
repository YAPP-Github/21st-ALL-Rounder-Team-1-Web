import { atom } from 'jotai';
import { orderer_email_atom } from '../atoms';

export const purchaseAtom = atom(null, async (get, set) => {
  const orderer_email = get(orderer_email_atom);
});
