import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/ui/app-sidebar';
import { AppNavbar } from '@/components/ui/app-navbar';
import { League_Spartan } from 'next/font/google';
import './globals.css';
import ClientLayout from './client-layout';
import { ThemeProvider } from 'next-themes';

const leagueSpartan = League_Spartan({
  variable: '--font-spartan',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Invoice',
  description: 'Invoice App',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${leagueSpartan.className} antialiased`}>
        <ClientLayout>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider className=" flex-col md:flex-row font-spartan">
              <AppSidebar className="hidden md:block" />
              <AppNavbar className="block md:hidden" />
              <main className="block w-full bg-color-01 relative">
                {children}
              </main>
            </SidebarProvider>
          </ThemeProvider>
        </ClientLayout>
      </body>
    </html>
  );
}
