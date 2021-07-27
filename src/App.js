import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import Promoters from './pages/Promoters';
import Leads from './pages/Leads';
import Dashboard from './pages/Dashboard';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Layout>
      <Switch>
        <Route path='/' exact> 
          {!isLoggedIn ? 
            <Redirect to='/login' />
            :<HomePage />}
        </Route>
        {!isLoggedIn && <Route path='/login'>
          <AuthPage />
        </Route>}
        {isLoggedIn &&
          <Route path='/perfil'>
            <UserProfile />
          </Route>}
        {isLoggedIn &&
        <Route path='/promotores'>
          <Promoters />
        </Route>}
        {isLoggedIn &&
        <Route path='/indicacoes'>
          <Leads />
        </Route>}
        {isLoggedIn &&
        <Route path='/dashboard'>
          <Dashboard />
        </Route>}
      </Switch>
    </Layout>
  );
}

export default App;
