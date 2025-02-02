import React from 'react'
import NavLinks from './components/Navlink'


export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <NavLinks />
      {children}
    </div>
  )
}
