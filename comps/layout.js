import React from 'react'
import Nav from '@/comps/header'

const Layout = ({children}) => {
  return (
    <>
        <Nav/>
        <div className="content">{children}</div>
    </>
  )
}

export default Layout
