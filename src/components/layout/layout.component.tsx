import { Icon } from '..'

export const Layout: React.FC = ({ children }) => {
  return (
    <div className='container'>
      <Icon name='email' />
      <header className='header'>
        <div className='header__brand'>colibri</div>
        <nav className='header__nav'>
          <div className='header__nav_btn'>btn</div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className='footer'>
        <nav>
          <div className='footer-nav__btn'>btn nav</div>
        </nav>
      </footer>
    </div>
  )
}
