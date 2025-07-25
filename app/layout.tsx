import '@/app/ui/global.css'
import { inter, lusitana } from '@/app/ui/fonts'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: {
    template: '%s | Acme',
    default: 'Acme',
  },
  description: 'The official Next.js Course',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lusitana.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
