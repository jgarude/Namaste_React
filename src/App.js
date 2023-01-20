import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About/About';
import Error from './components/Error/Error';
import RestaurantDetails from './components/RestaurantDetails/RestaurantDetails';

const AppContainer = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppContainer />,
    errorElement: (
      <>
        <Header />
        <Error />
        <Footer />
      </>
    ),
    children: [
      { path: '/', element: <Body /> },
      { path: '/about', element: <About /> },
      { path: '/restaurant/:id', element: <RestaurantDetails /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
