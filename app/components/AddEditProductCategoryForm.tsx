'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { v4 as uuid } from 'uuid';
import { ActionState } from '../actions/types';
import { addProductCategory } from '../actions/addProductCategory';
import SubmitButton from './SubmitButton';

// eslint-disable-next-line react/display-name
const AddEditProductCategoryForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(
    addProductCategory,
    {} as ActionState
  );

  return (
    <section className='m-auto w-[25rem]'>
      <h2 className='text-3xl mb-8'>New Category</h2>
      <form action={formAction} className='flex flex-col gap-4'>
        <input type='hidden' value={uuid()} name='id' />
        <div className='form-item grid grid-cols-product-form-item gap-2 items-center'>
          <label htmlFor='name'>Name</label>
          <Input name='name' id='name' placeholder='name' />
        </div>
        <div className='form-item grid grid-cols-product-form-item gap-2 items-center'>
          <label htmlFor='price'>Alias</label>
          <Input name='alias' id='alias' placeholder='alias' />
        </div>
        <SubmitButton>Submit</SubmitButton>
        <Button
          variant='secondary'
          type='button'
          onClick={() => {
            router.back();
          }}
        >
          Cancel
        </Button>
      </form>
    </section>
  );
};

export default AddEditProductCategoryForm;
