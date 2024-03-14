'use client';

import React, { PropsWithChildren } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

const SubmitButton: React.FC<PropsWithChildren> = ({ children }) => {
  const { pending } = useFormStatus();

  return (
    <Button type='submit' disabled={pending} aria-disabled={pending}>
      {pending ? 'Submitting...' : children}
    </Button>
  );
};

export default SubmitButton;
