import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { Reviews } from './Reviews/Reviews';
import { Casts } from './Casts/Casts';

const { Home } = lazy(() => import('pages/Home/Home'));
const { Movies } = lazy(() => import('pages/Movies/Movies'));
const { MovieInfo } = lazy(() => import('pages/MovieInfo/MovieInfo')) 

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<Casts />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
