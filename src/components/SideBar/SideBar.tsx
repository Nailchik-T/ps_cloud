import "./SideBar.scss";
import logo from "../../assets/big_logo_og.jpg";
import { HiMenuAlt4, HiMoon } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { CiShoppingBasket } from "react-icons/ci";
import { MdGTranslate, MdLocalPhone } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar-layout">
      <div className="sidebar-logo">
        <img className="sidebar-logo" src={logo} alt="ps cloud service" />
      </div>
      <div className="sidebar-content">
        <nav className="menu open-current-submenu">
          <ul>
            <HiMenuAlt4
              style={{ color: "white", fontSize: "42px", cursor: "pointer" }}
            />
            <li className="menu-item">
              <NavLink to="#" className="menu-link">
                <span className="menu-title">
                  <VscAccount style={{ color: "#bdcdd6", fontSize: "22px" }} />
                </span>
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="menu-item">
              <NavLink to="#" className="menu-link">
                <span className="menu-title">
                  <CiShoppingBasket
                    style={{ color: "#bdcdd6", fontSize: "22px" }}
                  />
                </span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="#" className="menu-link">
                <span className="menu-title">
                  <MdLocalPhone
                    style={{ color: "#bdcdd6", fontSize: "22px" }}
                  />
                </span>
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="menu-item">
              <NavLink to="#" className="menu-link">
                <span className="menu-title">
                  <MdGTranslate
                    style={{ color: "#bdcdd6", fontSize: "22px" }}
                  />
                </span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="#" className="menu-link">
                <span className="menu-title">
                  <HiMoon style={{ color: "#bdcdd6", fontSize: "22px" }} />
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
