'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import logo from '@/../public/logo.svg';
import ImageAvatar from '@/../public/image-avatar.jpg';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { useTheme } from 'next-themes';

export function AppSidebar({ className = '' }) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <Sidebar
      className={cn('overflow-hidden !rounded-r-[20px] border-none', className)}
    >
      <SidebarHeader className="p-0">
        <Image src={logo} alt="Invoice App Logo" width={103} height={103} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />

        <Button
          variant="ghost"
          className="mx-auto mt-auto py-8"
          onClick={toggleTheme}
        >
          <Image src="/icon-moon.svg" alt="Moon Icon" width={20} height={20} />
        </Button>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-foreground flex items-center justify-center px-8 py-6">
        <Image
          className="rounded-full"
          src={ImageAvatar}
          alt="Avatar"
          width={40}
          height={40}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
