import style from "./Navbar.style.module.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="container">
      <div className={style.navbarSection}>
        <div className={style.logo}>
          <img src={logo} alt="Logo" />
          <span className={style.logoText}>ImagesAI</span>
        </div>
        <div>
          <ul className={style.nav_wrap}>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <select name="" id="">
                <option value="">Features</option>
              </select>
            </li>
            <li>
              <select name="" id="">
                <option value="">Resources</option>
              </select>
            </li>
            <li>
              <Link>Community</Link>
            </li>
            <li>
              <Link>Pricing</Link>
            </li>
          </ul>
        </div>
        <div className={style.sign_wrap}>
          <p className={style.signIn}>Sign In</p>
          <button className={style.sign_free}>
            <span className={style.btn_text}>Try for premium</span>
          </button>
        </div>
        <div onClick={() => setClick(!click)} className={style.menu}>
          {click ? (
            <RxCross2 className={style.mobileMenu} />
          ) : (
            <CiMenuFries className={style.mobileMenu} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
