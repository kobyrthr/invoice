import Image from 'next/image';
import logo from '@/../public/logo.svg';
import ImageAvatar from '@/../public/image-avatar.jpg';
import { cn } from '@/lib/utils';

export function AppNavbar({ className = '' }) {
  return (
    <nav
      className={cn(
        'bg-sidebar h-20 max-w-screen overflow-hidden rounded-none flex items-center justify-between',
        className
      )}
    >
      <Image src={logo} alt="Invoice App Logo" width={80} height={80} />

      <div className="flex flex-row w-fit">
        <Image
          src="/icon-moon.svg"
          className="mx-auto mt-auto py-8 px-8 w-fit"
          alt="Moon Icon"
          width={20}
          height={20}
        />
        <div className="flex items-center justify-center border-l border-l-sidebar-foreground px-8 py-6">
          <Image
            className="rounded-full self-auto min-w-8"
            src={ImageAvatar}
            alt="Avatar"
            width={32}
            height={32}
          />
        </div>
      </div>
    </nav>
  );
}
