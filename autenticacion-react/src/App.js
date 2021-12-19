import {BrowserRouter, Switch} from 'react-router-dom';
import {LOGIN, PRIVATE, LOGOUT} from './config/router/paths';
import Login from './components/views/Login';
import Logout from './components/views/Logout';
import Private from './components/views/Private';
import PrivateRoute from './components/router/PrivateRoute';
import PublicRoute from './components/router/PublicRoute';
import AuthProvider from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path={PRIVATE} component={Private} />
          <PrivateRoute path={LOGOUT} component={Logout} />
          <PublicRoute path={LOGIN} component={Login} exact />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;