import { Html, Head, Main, NextScript } from 'next/document'

// 不支持在这里使用 Script 内置组件
export default function Document() {
  return (
    <Html lang="en">
      {/* 这里的SEO的配置,是作用域所有的页面 */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
