import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Squad</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && <li>
            <NavLink to='/login' activeClassName={classes.activeLink} className={classes.link}>Login</NavLink>
          </li>}
          {isLoggedIn && <li>
            <NavLink to='/dashboard' activeClassName={classes.activeLink} className={classes.link}>Dashboard</NavLink>
            </li>}
          {isLoggedIn && <li>
            <NavLink to='/promotores' activeClassName={classes.activeLink} className={classes.link}>Promotores</NavLink>
            </li>}
          {isLoggedIn && <li>
            <NavLink to='/indicacoes' activeClassName={classes.activeLink} className={classes.link}>Indicações</NavLink>
            </li>}          
          {isLoggedIn && <li>
            <button onClick={authCtx.logout}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
