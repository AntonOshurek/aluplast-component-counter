//types
import type { RootState } from '../../../../types';
import type { IGumsItem, IGumsData } from '../../types/';

export const SelectorGetGumsState = (state: RootState): IGumsData => state.gums;

export const SelectorGetCurrentGum =
  (UNID: string) =>
  (state: RootState): IGumsItem =>
    state.gums[UNID];

export const SelectorGetGums =
  () =>
  (state: RootState): IGumsData => {
    return state.gums;
  };
export const SelectorCheckIfElementExistsByUNID =
  (UNID: string | undefined) =>
  (state: RootState): boolean => {
    let result = false;
    if (!UNID) {
      result = false;
    } else {
      if (!state.gums[UNID]) {
        result = false;
      } else {
        result = true;
      }
    }

    return result;
  };
