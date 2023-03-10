import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';
import css from './Layout.module.css';

 const Layout = () => {
  return (
    <div>
      <nav className={css.container}>
        <NavLink
          className={({ isActive }) =>
            isActive ? css.link + ' ' + css.active : css.link
          }
          to="/">Home</NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? css.link + ' ' + css.active : css.link
          }
          to="/movies">Movies</NavLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;