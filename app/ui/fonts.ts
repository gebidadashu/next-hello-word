import { Inter, Lusitana } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

// 添加错误处理和回退字体
export const lusitana = Lusitana({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  display: 'swap', // 添加字体显示策略
  fallback: ['serif'], // 添加回退字体
  preload: true, // 预加载字体
  variable: '--font-lusitana', // 添加 CSS 变量
})

// 创建一个安全的字体类，即使 Google Fonts 失败也能工作
export const lusitanaSafe = {
  className: `${lusitana.variable} font-serif`,
  style: {
    fontFamily: `var(--font-lusitana), Georgia, "Times New Roman", serif`,
  },
}