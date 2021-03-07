import './layout.style.css'
import NavList from '../nav-list/nav-list.component'
import { data } from './layout.data'
import Icon from '../icon/icon.component'

export const Layout: React.FC = ({ children }) => {
  return (
    <div className='container'>
      <header className='header'>
        <div className='header__brand'>{data.header.brand.text}</div>
        <nav className='header__nav'>
          <NavList navItems={data.header.nav.navBtns} />
        </nav>
        <div className='menu'>
          <Icon name='menu' />
        </div>
      </header>
      <main>{children}</main>
      <footer className='footer'>
        <nav className='footer__nav'>
          <NavList navItems={data.footer.navBtns} />
        </nav>
      </footer>
    </div>
  )
}
