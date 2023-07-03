import Head from 'next/head'
import Image from 'next/image'
import GirlImg from '@/assets/images/girl.jpeg'
import Script from 'next/script'
import styles from './about.module.scss'
const About = function () {
  return (
    <>
      {/* 作用:方便我们做SEO 和 添加一个外部的资源 */}
      <Head>
        {/* html的标签 */}
        <title>我是about页面</title>
        <meta name="description" content="网易云音乐商城"></meta>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      {/* 加载显示本地的图片 */}
      <Image src={GirlImg} alt="Girl"></Image>

      {/* 加载显示网络的图片 */}
      <Image className="custom-img" src={'https://p2.music.126.net/oqnkUWyxI6ZFVwY6cv645A==/109951168622392207.jpg?param=140y140'} alt="User" width={140} height={140} priority></Image>

      {/* 是给 home 首页的body 插入一个script标签 */}
      <Script src="https://festack.cn"></Script>

      {/* 全局样式 */}
      <div className="base-style">Hello Nextjs</div>

      {/* 局部样式 */}
      <div className={styles['aboutStyle']}>局部样式</div>

      {/* 使用scss导出的变量 */}
      <div style={{ color: styles.primaryColor }} className={styles['aboutStyle']}>
        使用scss导出的变量
      </div>

      {/* 字体图标 */}
      <div className="base-style">
        <span>字体图标</span>
        <i className="iconfont icon-fuzhi icon"></i>
      </div>
    </>
  )
}

export default About
