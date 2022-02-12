import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './filterActions';

interface IFilterAction {
  type: string;
  payload: string;
}

export const filterReducer = createReducer('', {
  [changeFilter.type]: (_: string, { payload }: IFilterAction) =>
    payload.toLowerCase(),
});
