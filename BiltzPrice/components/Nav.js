import React from 'react'
import Link from 'next/link'

/* const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})  */

const Nav = () => (
  
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">BiltzPrice</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor03">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link href ='/'>
        <a className="nav-link">Home <span className="sr-only">(current)</span></a>
        </Link>
        
      </li>
      <li className="nav-item">
        <Link href='#'>
        <a className="nav-link">Features</a>
        </Link>
        
      </li>
      <li className="nav-item">
      <Link href='#'>
      <a className="nav-link" >Pricing</a>
        </Link>
       
      </li>
      <li className="nav-item">
      <Link href='/about'>
      <a className="nav-link">About</a>
        </Link>
      
      </li>
    </ul>
   
  </div>
</nav>

)

export default Nav
