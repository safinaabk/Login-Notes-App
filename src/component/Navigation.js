import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import ToggleTheme from "./ToggleTheme";
import { LocaleConsumer } from "../contexts/LocaleContext";

function Navigation({ logout, name }) {
  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => {
        return (
          <header>
            <h1>
              <Link to="/">{locale === "id" ? "Aplikasi Catatan" : "Note App"}</Link>
            </h1>
            <ToggleTheme />
            <button className="toggle-locale" onClick={toggleLocale}>
              {locale === "id" ? "en" : "id"}
            </button>
            <button className="button-logout" onClick={logout}>
              {name}
              <FiLogOut />
            </button>
          </header>
        );
      }}
    </LocaleConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func,
  name: PropTypes.string,
};

export default Navigation;
// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { FiLogOut } from "react-icons/fi";
// import ToggleTheme from "./ToggleTheme";
// import { LocaleConsumer } from "../contexts/LocaleContext";

// function Navigation({ logout, name }) {
//   return (
//     <LocaleConsumer>
//       {({ locale, toggleLocale }) => {
//         return (
//           <nav className="navigation">
//             <ul>
//               <li>
//                 <button onClick={toggleLocale}>{locale === "id" ? "en" : "id"}</button>
//               </li>
//               <li>
//                 <ToggleTheme />
//               </li>
//               <li>
//                 <button onClick={logout}>
//                   {" "}
//                   {name}
//                   <FiLogOut />
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         );
//       }}
//     </LocaleConsumer>
//   );
// }

// Navigation.propTypes = {
//   logout: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
// };

// export default Navigation;
