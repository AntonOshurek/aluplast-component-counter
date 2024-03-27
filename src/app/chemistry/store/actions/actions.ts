import { chemistrySlice } from '../slice/slice';
//repository
import chemistryRepository from '../../repository/chemistry-repository';
//types
import type { AppThunk, IClearItemAction, IIncDecAction } from '../../../../types';
//variables
import { ChemistryLogsNames } from '../../variables/';

const { increment, decrement, log, clearItem, clearData } = chemistrySlice.actions;

export const incrementAction =
  (action: IIncDecAction<ChemistryLogsNames>): AppThunk =>
  (dispatch, getState) => {
    dispatch(increment(action));

    const newLog = {
      log: `+${action.value.toString()}`,
      logName: ChemistryLogsNames.COUNTER,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    chemistryRepository.sendData(getState().chemistry);
  };

export const decrementAction =
  (action: IIncDecAction<ChemistryLogsNames>): AppThunk =>
  (dispatch, getState) => {
    dispatch(decrement(action));

    const newLog = {
      log: `-${action.value.toString()}`,
      logName: ChemistryLogsNames.COUNTER,
      UNID: action.UNID,
    };

    dispatch(log(newLog));
    chemistryRepository.sendData(getState().chemistry);
  };

export const clearItemDataAction =
  (action: IClearItemAction): AppThunk =>
  (dispatch, getState) => {
    const clearedItem = chemistryRepository.getDefaultItemData(action.item.UNID);
    dispatch(clearItem({ item: clearedItem }));

    chemistryRepository.sendData(getState().chemistry);
  };

export const clearDataAction = (): AppThunk => (dispatch) => {
  const clearedItem = chemistryRepository.getDefaultData();
  dispatch(clearData(clearedItem));

  chemistryRepository.clearData();
};
