import { ReactElement } from 'react'
import type { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export interface IProps {
  children?: ReactElement
  // ...
}
const Blog: FC<IProps> = function (props) {
  const { children } = props
  const router = useRouter()

  const goToPage = () => {
    // 形式一：
    router.push('/login')

    // 形式二：
    // router.push({
    //   pathname: '/login',
    //   query: {
    //     username: 'handsome'
    //   }
    // })

    // 形式三：
    // router.push('https://www.jd.com')

    // 形式四：
    // router.push('/login?id=1001', 'loginAgain?id=1002') // as
    // router.replace()
  }

  useEffect(() => {
    // 路由守卫 - 全局监听路由的切换
    const handleRouterChange = (url: string) => {
      console.log('routeChangeStart=>', url) // url 是当前访问的路径
    }
    const handleRouterChange2 = (url: string) => {
      console.log('routeChangeComplete=>', url) // url 是当前访问的路径
    }
    router.events.on('routeChangeStart', handleRouterChange)
    router.events.on('routeChangeComplete', handleRouterChange2)
    return () => {
      router.events.off('routeChangeStart', handleRouterChange)
      router.events.off('routeChangeComplete', handleRouterChange2)
    }
  }, [])

  return (
    <div className="blog">
      <div>Blog</div>

      {/* 组件导航-对象类型 */}
      <Link
        href={{
          pathname: '/login',
          query: {
            username: 'zs'
          }
        }}
      >
        <button>跳转到登录页</button>
      </Link>

      <br />
      {/* 组件导航-as:配置路径别名 */}
      <Link href="/register?id=1000" as="register_v2">
        <button>跳转到注册页面</button>
      </Link>

      <br />
      {/* 组件导航-URL */}
      <Link href="https://www.baidu.com" target={'_blank'}>
        <button>点击跳转到百度首页</button>
      </Link>

      <br />
      {/* 编程导航 */}
      <button onClick={goToPage}>编程导航跳转</button>
    </div>
  )
}
export default Blog
Blog.displayName = 'Blog' // 方便以后调试用的
