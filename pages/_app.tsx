// 导入全局的样式
import '@/styles/globals.css'
import '@/styles/main.scss'
// 导入字体图标
import '@/assets/cus-font/iconfont.css'
import type { AppProps } from 'next/app'

/**
 * 该文件可以：
 * 1.自定义布局 Layout
 * 2.Redux
 * 3.Theme
 * 4.监听全局的路由
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
