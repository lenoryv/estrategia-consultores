import { NavLink } from 'react-router-dom'
import './styles.css'

function NavItem({ content, to }) { 

  return (
    <li>
      <NavLink
        onClick={() => console.log('click')}
        to={to}
        activeclassname="active"
      >
        {content}
      </NavLink>
    </li>
  );
}

export { NavItem };
