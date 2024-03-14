'use client';

import { useState, FormEventHandler } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ColorEntity, MakeEntity } from '../data/db-types';

export default function ProductFilter({
  colors,
  makes,
}: {
  colors?: ColorEntity[];
  makes?: MakeEntity[];
}) {
  const [colorValues, setColorValues] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [makeValues, setMakeValues] = useState<{ [key: string]: boolean }>({});
  const router = useRouter();
  const pathname = usePathname();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    let searchParams: string[] = [];
    let searchString = '';

    const colors = Object.entries(colorValues)
      .filter(([_, checked]) => checked)
      .map(([id]) => id);
    for (const id of colors) {
      searchParams.push(`color=${id}`);
    }

    const makes = Object.entries(makeValues)
      .filter(([_, checked]) => checked)
      .map(([id]) => id);
    for (const id of makes) {
      searchParams.push(`make=${id}`);
    }

    searchString = searchParams.join('&');

    router.push(`${pathname}${searchString ? `?${searchString}` : ''}`);
  };

  const onColorCheckedChange = (id: string) => {
    return (checked: boolean) =>
      setColorValues((values) => ({
        ...values,
        [id]: checked,
      }));
  };

  const onMakeCheckedChange = (id: string) => {
    return (checked: boolean) =>
      setMakeValues((values) => ({
        ...values,
        [id]: checked,
      }));
  };

  return Boolean(makes?.length) || Boolean(colors?.length) ? (
    <>
      <h3 className='text-xl font-bold'>Filters:</h3>
      <form className='mt-4' onSubmit={handleSubmit}>
        {Boolean(makes?.length) && (
          <div className='mb-2'>
            <h4 className='mb-3 font-bold'>makes:</h4>
            {makes?.map(({ id, name }) => (
              <div key={id} className='items-top flex space-x-2 mb-4'>
                <Checkbox id={id} onCheckedChange={onMakeCheckedChange(id)} />
                <div className='grid gap-1.5 leading-none'>
                  <label
                    htmlFor={id}
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  >
                    {name}
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}
        {Boolean(colors?.length) && (
          <div className='mb-2'>
            <h4 className='mb-3 font-bold'>colors:</h4>
            {colors?.map(({ id, name, value }) => {
              return (
                <div key={id} className='items-top flex space-x-2 mb-4'>
                  <Checkbox
                    id={id}
                    onCheckedChange={onColorCheckedChange(id)}
                  />
                  <div className='grid grid-cols-product-filter gap-1.5 leading-none'>
                    <label
                      htmlFor={id}
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                      {name}
                    </label>
                    <div
                      className={`w-4 h-4 rounded-[50%] border border-gray-300 ${value}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <Button className='mt-4' variant='secondary' type='submit'>
          Apply Filters
        </Button>
      </form>
    </>
  ) : (
    <h3>no filters available</h3>
  );
}
