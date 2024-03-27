'use client';

import { Button } from '@/components/ui/button';
import React, { MouseEventHandler, startTransition } from 'react';
import { CategoryEntity } from '../data/db-types';
import { deleteProductCategory } from '../actions/deleteProductCategory';
import { useFormState } from 'react-dom';

const DeleteCategoryButton = ({ category }: { category: CategoryEntity }) => {
  const [state, formAction] = useFormState(deleteProductCategory, {});
  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.set('id', String(category.id));
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <Button variant='link' onClick={onClick}>
      Delete
    </Button>
  );
};

export default DeleteCategoryButton;
