import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// import Login from './components/Login/Login';
import Login from './components/Admin/Login/Login'
import AuthProvider from './Context/AuthProvider/AuthProvider';
import axios from 'axios';
import AdminPrivateRoute from './AdminPrivateRoute';
import Register from './components/Admin/Login/Register';

function App() {
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Accept'] = 'application/json';
  axios.defaults.withCredentials = true;

  axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? token : "";
    return config;
  })
  const userInfo = localStorage.getItem('user')
  const userData = (JSON.parse(userInfo))
  return (
    <div >
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {localStorage.getItem("token") ? <Redirect to={userData.role === 1 ? "/admin/dashboard" : "/merchant/dashboard"} /> : <Login />}
            </Route>
            <Route exact path="/register">
              {localStorage.getItem("token") ? <Redirect to={userData.role === 1 ? "/admin/dashboard" : "/merchant/dashboard"} /> : <Register />}
            </Route>
            <Route exact path="/login">
              {localStorage.getItem("token") ? <Redirect to={userData.role === 1 ? "/admin/dashboard" : "/merchant/dashboard"} /> : <Login />}
            </Route>
            <AdminPrivateRoute path="/" name="Admin" />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
