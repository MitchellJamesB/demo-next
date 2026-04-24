import Button from './Button'
import Tag from './Tag'
import { RocketLaunchIcon } from '@heroicons/react/24/solid'

const navigationButtons = [
    { title: 'About',
      href: '/about',
      isNew: true },
    { title: 'Home',
      href: '/',
      isNew: false },

]

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-indigo-50 p-6 items-center sticky top-0 shadow-lg">
      <a href= '/' className="bg-white p-4 rounded-full">
      <RocketLaunchIcon className="w-8 h-8 text-red-600 hover:scale-105 transition-all cursor-pointer"/>
      </a>
      <div className="flex gap-x-4 items-center">
        {navigationButtons.map(({href, title, isNew}) => (
          <>
          <Button href={href} classNameProp = "flex text-xl">
            {isNew && <Tag classNames = "mr-2 animate-pulse"/>}
            {title}
            </Button>
          </>
          ))}
      </div>
    </nav>
  )
}
