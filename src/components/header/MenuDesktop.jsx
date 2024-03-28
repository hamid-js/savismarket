import { NavLink } from "react-router-dom"

function MenuDesktop() {
    return (
        <nav className="flex gap-8 text-lg *:flex *:items-center *:justify-center  *:uppercase *:text-white hover:*:text-slate-200">
        <div>
          <NavLink to="/">Home</NavLink>
          <span className="text-slate-400 ">
            
          </span>
        </div>
        <div>
          <NavLink to="/shop">shop</NavLink>
          <span className="text-slate-400 ">
            
          </span>
        </div>
        <div>
          <NavLink to="/blog">blog</NavLink>
          <span className="text-slate-400 ">
            
          </span>
        </div>
      </nav>
    )
}

export default MenuDesktop
