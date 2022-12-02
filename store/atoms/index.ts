//jotai를 위한 예시입니다 https://devblog.kakaostyle.com/ko/2022-01-13-2-jotai-recipe/
import { Atom, atom } from 'jotai';

export * from './orderer';
export const address1_atom = atom('');
export const address2_atom = atom('');

export function getInitialValues(
  address1: string,
  address2: string,
): Array<[Atom<unknown>, unknown]> {
  return [
    [address1_atom, address1],
    [address2_atom, address2],
  ];
}
