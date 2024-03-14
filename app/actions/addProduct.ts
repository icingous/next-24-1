'use server';

import { ActionState } from './types';

export const addProduct = async (
  state: ActionState,
  formData: FormData
): Promise<ActionState> => {
  console.log(formData, state);

  return {
    success: true,
    message: 'ok',
  };
};
