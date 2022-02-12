import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction<string, 'contacts/changeFilter'>(
  'contacts/changeFilter'
);
