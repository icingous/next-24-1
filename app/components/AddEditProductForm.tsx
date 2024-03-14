'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { v4 as uuid } from 'uuid';
import { CategoryEntity, ColorEntity, MakeEntity } from '../data/db-types';
import { ActionState } from '../actions/types';
import { addProduct } from '../actions/addProduct';
import SubmitButton from './SubmitButton';

interface Props {
  category: CategoryEntity;
  colors: ColorEntity[];
  makes: MakeEntity[];
}

// eslint-disable-next-line react/display-name
const AddEditProductForm = ({ category, colors, makes }: Props) => {
  const router = useRouter();
  const [state, formAction] = useFormState(addProduct, {} as ActionState);

  return (
    <section className='m-auto w-[25rem]'>
      <h2 className='text-3xl mb-8'>New Product of {category.name}</h2>
      <form action={formAction} className='flex flex-col gap-4'>
        <input type='hidden' value={uuid()} name='id' />
        <div className='form-item grid grid-cols-product-form-item gap-2 items-center'>
          <label htmlFor='name'>Name</label>
          <Input type='text' name='name' id='name' placeholder='name' />
        </div>
        <div className='form-item grid grid-cols-product-form-item gap-2 items-center'>
          <label htmlFor='price'>Price</label>
          <Input type='number' name='price' id='price' placeholder='price' />
        </div>
        <div className='form-item grid grid-cols-product-form-item gap-2 items-center'>
          <label htmlFor='color'>Color</label>
          <Select name='color'>
            <SelectTrigger
              className='w-full'
              id='color'
              disabled={!Boolean(colors?.length)}
            >
              <SelectValue placeholder='color' />
            </SelectTrigger>
            <SelectContent>
              {colors.map(({ id, name }) => (
                <SelectItem key={id} value={id}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='form-item grid grid-cols-product-form-item gap-2 items-center'>
          <label htmlFor='make'>Make</label>
          <Select name='make'>
            <SelectTrigger
              className='w-full'
              id='make'
              disabled={!Boolean(makes?.length)}
            >
              <SelectValue placeholder='make' />
            </SelectTrigger>
            <SelectContent>
              {makes.map(({ id, name }) => (
                <SelectItem key={id} value={id}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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

export default AddEditProductForm;
