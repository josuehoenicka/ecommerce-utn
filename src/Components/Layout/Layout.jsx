import React from 'react'
import "./Layout.css"

function Layout({children}) {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default Layout
