import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RenderRoutes from './components/RenderRoutes';
import Layout from './layouts/Layout/Layout';
import routes from './routes';
import './styles/Main.scss';

const Main = () => (
  <BrowserRouter>
    <Layout>
      <RenderRoutes routes={routes} />
    </Layout>
  </BrowserRouter>
);

export default Main;
