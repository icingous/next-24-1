'use server';

import { ActionState } from './types';

export const addProductCategory = async (
  state: ActionState,
  formData: FormData
): Promise<ActionState> => {
  console.log(formData);

  return {
    success: true,
    message: '',
  };
};
