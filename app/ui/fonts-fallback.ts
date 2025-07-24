import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({ subsets: ['latin'] })

// 使用本地字体作为 Lusitana 的替代
export const lusitana = localFont({
  src: [
    {
      path: './fonts/Lusitana-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Lusitana-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  fallback: ['serif'],
  variable: '--font-lusitana',
})

// 如果本地字体不可用，使用系统字体
export const lusitanaFallback = {
  className: 'font-serif', // 使用系统 serif 字体
  style: {
    fontFamily: 'Georgia, "Times New Roman", serif',
  },
} 