import { Icon } from '..'

interface NavListProps {
  navItems: string[]
}

const NavList: React.FC<NavListProps> = ({ navItems }) => {
  return (
    <>{navItems && navItems.map((item) => <Icon key={item} name={item} />)}</>
  )
}

export default NavList
