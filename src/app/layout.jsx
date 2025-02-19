import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/ui/app-sidebar';
import { League_Spartan } from 'next/font/google';
import './globals.css';

const leagueSpartan = League_Spartan({
  variable: '--font-spartan',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Invoice',
  description: 'Invoice App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger className="md:hidden rounded-l-none rounded-r-lg mt-8 size-12" />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
