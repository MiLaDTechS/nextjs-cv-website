import Head from 'next/head'
import { useState } from 'react'
import Content from '../components/content'
import InfoBar from '../components/info-bar'
import Layout, { siteTitle } from '../components/layout'
import MenuBar from '../components/menu-bar'

export default function Home() {

  const [toggleRightMenu, setToggleRightMenu] = useState(false);
  const [toggleMenuBar, setToggleMenuBar] = useState(false);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <InfoBar rightMenu={[toggleRightMenu, setToggleRightMenu]} menuBar={toggleMenuBar} />
      <MenuBar rightMenu={toggleRightMenu} menuBar={[toggleMenuBar, setToggleMenuBar]} />
      <Content rightMenu={[toggleRightMenu, setToggleRightMenu]} menuBar={[toggleMenuBar, setToggleMenuBar]} />
    </Layout>
  )
}