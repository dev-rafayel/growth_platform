import { getGlobal } from '@/lib/strapi/global';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { mapAnnouncementBar } from '@/lib/strapi/mappers/announcementBarMapper';
import { Header } from '@/components/layout/Header';
import { mapHeader } from '@/lib/strapi/mappers/headerMapper';
import { Footer } from '@/components/layout/Footer';
import { mapFooter } from '@/lib/strapi/mappers/footerMapper';
import './globals.css';

export default async function RootLayout({ children }: 
  Readonly<{ children: React.ReactNode }>) {

  const global = await getGlobal();
  return (
    <html lang="en">
      <body className='bg-bg font-sans text-ink'>
        {global?.announcementBar &&
          <AnnouncementBar 
            {...mapAnnouncementBar(global.announcementBar)}
          />
        }
        {global?.header && (
          <Header
            {...mapHeader(global.header, global.siteName)}
          />
        )}
        {children}
        {global?.footer && (
          <Footer
            {...mapFooter(global.footer, global.siteName)}
          />
        )}
      </body>
    </html>
  );
}