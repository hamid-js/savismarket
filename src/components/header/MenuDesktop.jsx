import { RiArrowDownSLine } from "react-icons/ri"
import { NavLink } from "react-router-dom"

function MenuDesktop() {
    return (
        <nav className="flex gap-7 text-lg *:flex *:items-center *:justify-center *:gap-1 *:uppercase *:text-white hover:*:text-slate-200">
        <div>
          <NavLink to="/">Home</NavLink>
          <span className="text-slate-400 ">
            <RiArrowDownSLine />
          </span>
        </div>
        <div>
          <NavLink to="/shop">shop</NavLink>
          <span className="text-slate-400 ">
            <RiArrowDownSLine />
          </span>
        </div>
        <div>
          <NavLink to="/blog">blog</NavLink>
          <span className="text-slate-400 ">
            <RiArrowDownSLine />
          </span>
        </div>
      </nav>
    )
}

export default MenuDesktop
