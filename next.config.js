/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用严格模式, 辅助我们编写代码, 如果用到了过时的函数方法和属性,会提示已过期
  reactStrictMode: true,
  // 配置环境变量 process.env 这里的优先级更高
  env: {
    PORT: 9999,
    NEXT_PUBLIC_BASE_URL: 'http://localhost:9999'
  },
  // 图片引入外部资源需配置白名单
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.music.126.net'
      }
    ]
  }
  // swcMinify: true, // swc -> speedy web compiler  Rust-base -> Babel + Terser
  // basePath: "/base", // 给网站添加一个路径前缀
}

module.exports = nextConfig
