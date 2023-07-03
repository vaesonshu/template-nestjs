import Main from '@/components/main'

// 判断当前的运行的环境、读取环境变量
if (typeof window === 'object') {
  console.log('client')
  console.log(process.env.NEXT_PUBLIC_BASE_URL)
} else {
  console.log('server')
  console.log(process.env.NAME)
  console.log(process.env.PORT)
  console.log(process.env.HOST)
  console.log(process.env.NEXT_PUBLIC_BASE_URL)
}

// 项目的首页
export default function Home() {
  return (
    <>
      <Main></Main>
    </>
  )
}
