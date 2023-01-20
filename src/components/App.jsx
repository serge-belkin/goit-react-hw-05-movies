import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout';
import Reviews from 'components/Reviews';
import Casts from 'components/Casts';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieInfo = lazy(() => import('pages/MovieInfo')) 

export const App = () => {
  return (
    <div style={{
        maxWidth: '1600px',
      margin: '0 auto',
      }}>
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
