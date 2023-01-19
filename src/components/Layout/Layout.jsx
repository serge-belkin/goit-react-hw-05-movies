import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from "./Layout.module.css";

export const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
