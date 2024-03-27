'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { v4 as uuid } from 'uuid';
import { ActionState } from '../actions/types';
import { addProductCategory } from '../actions/addProductCategory';
import { editProductCategory } from '../actions/editProductCategory';
import SubmitButton from './SubmitButton';
import { type CategoryEntity } from '../data/db-types';

// eslint-disable-next-line react/display-name
const AddEditProductCategoryForm = ({
  category,
}: {
  category?: CategoryEntity;
}) => {
  const router = useRouter();
  const [state, formAction] = useFormState(
    category ? addProductCategory : editProductCategory,
    {} as ActionState
  );

  return (
    <section className='m-auto w-[25rem]'>
      <h2 className='text-3xl mb-8'>
        {category ? 'Edit Category' : 'New Category'}
      </h2>
      <form action={formAction} className='flex flex-col gap-4'>
        {!category && <input type='hidden' value={uuid()} name='id' />}
        <div className='form-item grid grid-cols-product-form-item gap-2 items-center'>
          <label htmlFor='name'>Name</label>
          <Input
            name='name'
            id='name'
            placeholder='name'
            defaultValue={category?.name}
          />
        </div>
        <div className='form-item grid grid-cols-product-form-item gap-2 items-center'>
          <label htmlFor='price'>Alias</label>
          <Input
            name='alias'
            id='alias'
            placeholder='alias'
            defaultValue={category?.alias}
          />
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
