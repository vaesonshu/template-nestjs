import { memo, ReactElement } from 'react'
import type { FC } from 'react'
import { useRouter } from 'next/router'
export interface IProps {
  children?: ReactElement
  // ...
}
const Detail: FC<IProps> = function (props) {
  const { children } = props
  const router = useRouter() // 没有这个 useRoute Hook

  // const { id } = router.params; // 是没有这个 params 属性

  // router.query 不但可以拿到查询字符串的参数,还可以拿到动态路由的params参数
  // 如果查询字符串参数 和 动态路由参数名字重复怎么办?
  // Next.js 会优先使用动态路由的参数.
  const { id } = router.query
  return (
    <div className="Detail">
      <div>Detail id={id}</div>
    </div>
  )
}
export default memo(Detail)
Detail.displayName = 'Detail' // 方便以后调试用的
