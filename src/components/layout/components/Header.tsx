import { Info } from './Info'
import { Menu } from './Menu'

export const Header = () => {
  return (
    <div className="sticky top-0 z-50 hidden w-full bg-white shadow-md shadow-[#000000]/[.25] lg:block">
      <div className="header-nav-bar container mx-auto h-[80px] w-3/5">
        <div className="flex items-center justify-between">
          <Menu />
          <Info />
        </div>
      </div>
    </div>
  )
}
