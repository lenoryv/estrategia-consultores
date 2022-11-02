import { NavLink } from 'react-router-dom'
import './styles.css'

function NavItem({ content, href }) {
    
  const pathname = window.location.pathname;
  console.log(pathname, href);

  return (
    <li>
      <NavLink
        to={href}
        activeClassName="active">
        {content}
      </NavLink>
    </li>
  );
}

export { NavItem };
