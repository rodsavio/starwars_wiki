import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

import './App.css';

import Loading from './components/UI/loading';
import Menu from './components/UI/menu';
import Router from './components/UI/router';
import TopBar from './components/UI/topBar';

function App() {
  const loadingIsVisible = useSelector((state: RootStateOrAny) => state.ui.loadingIsVisible);
  const menuIsVisible = useSelector((state: RootStateOrAny) => state.ui.menuIsVisible);

  return (
    <React.Fragment>
      <TopBar/>
      {loadingIsVisible && <Loading />}
      {menuIsVisible && <Menu />}
      <Router />
    </React.Fragment>
  );
}

export default App;
