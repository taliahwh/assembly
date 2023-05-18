import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Screens
import Layout from './components/router/Layout';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/Login/LoginScreen';
import SignUpScreen from './screens/SignUp/SignUpScreen';
import NotFound from './screens/NotFound/NotFound';
import PostDetails from './screens/PostDetails/PostDetails';
import ProfileSettings from './screens/Settings/ProfileSettings/ProfileSettings';
import SettingsLayout from './components/router/SettingsLayout';

function App() {
  // console.log(window.location.host);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Route>

        <Route element={<SettingsLayout />}>
          <Route path="/settings/profile/:id" element={<ProfileSettings />} />
        </Route>

        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// {/* <div>
// <Header />
// {/* TODO - React Router@latest */}
// <HomeScreen />
// </div> */}
