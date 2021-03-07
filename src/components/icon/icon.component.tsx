import './icon.style.css'
import { useIcon } from '../../hooks/useIcon'
interface IconProps {
  name: string
}
export const Icon: React.FC<IconProps> = ({ name, ...otherProps }) => {
  const Icon = useIcon(name)
  return <div>{Icon && <Icon className='icon_svg' {...otherProps} />}</div>
}

export default Icon
