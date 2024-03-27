'use client';

import { Button } from '@/components/ui/button';
import React from 'react';

const EditButton = () => {
  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };

  return (
    <Button variant='link' onClick={onClick}>
      Edit
    </Button>
  );
};

export default EditButton;
