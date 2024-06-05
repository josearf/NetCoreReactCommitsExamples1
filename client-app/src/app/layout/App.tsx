import React, { Fragment } from 'react';
import MainLayoutRoutes from './MainLayoutRoutes';
import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path="*" Component={MainLayoutRoutes} />
      </Routes>
    </Fragment>
  );
}

export default observer(App);
