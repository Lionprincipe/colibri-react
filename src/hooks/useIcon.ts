import React from 'react'

import { ReactComponent as Heart } from '../assets/icons/heart.svg'
import { ReactComponent as Mail } from '../assets/icons/mail.svg'
import { ReactComponent as Menu } from '../assets/icons/menu.svg'
import { ReactComponent as Person } from '../assets/icons/person.svg'
import { ReactComponent as Phone } from '../assets/icons/phone.svg'
import { ReactComponent as Search } from '../assets/icons/search.svg'
import { ReactComponent as Support } from '../assets/icons/support.svg'

type UseIconType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined
  }
> | null

export const useIcon = (name: string): UseIconType => {
  switch (name) {
    case 'heart':
      return Heart
    case 'mail':
      return Mail
    case 'menu':
      return Menu
    case 'person':
      return Person
    case 'phone':
      return Phone
    case 'search':
      return Search
    case 'support':
      return Support
    default:
      return null
  }
}
