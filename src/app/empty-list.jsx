'use client';
import Image from 'next/image';
import ImageAvatar from '@/../public/illustration-empty.svg';
import { Typography } from '@/components/ui/typography';

export default function EmptyList() {
  return (
    <div className="mx-auto my-auto flex flex-col max-w-[241px] text-center">
      <Image src={ImageAvatar} alt="Empty List" />
      <Typography type="heading-m" className="mt-4">
        There is nothing here
      </Typography>

      <Typography type="body" className="px-6 mt-2 text-color-06 font-medium">
        Create an invoice by clicking the{' '}
        <span className="font-bold">New Invoice</span> button and get started
      </Typography>
    </div>
  );
}
