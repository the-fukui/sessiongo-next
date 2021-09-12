import React, { useEffect, useRef } from 'react'
import style from './index.module.scss'
import { useRouter } from 'next/router'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
