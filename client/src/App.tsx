import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Header Layouts
import Layout from './components/router/Layout';
import SettingsLayout from './components/router/SettingsLayout';

// Screens
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/Login/LoginScreen';
import SignUpScreen from './screens/SignUp/SignUpScreen';
import NotFound from './screens/NotFound/NotFound';
import PostDetails from './screens/PostDetails/PostDetails';
import ProfileSettings from './screens/Settings/ProfileSettings/ProfileSettings';
import PaymentsScreen from './screens/Settings/Payments/PaymentsScreen';
import UserPostsScreen from './screens/Settings/Posts/UserPostsScreen';
import UserProfile from './screens/UserProfile/UserProfile';

function App() {
  // console.log(window.location.host);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/profile/:id" element={<UserProfile />} />
        </Route>

        <Route element={<SettingsLayout />}>
          <Route path="/settings/profile/:id" element={<ProfileSettings />} />
          <Route path="/settings/payments/:id" element={<PaymentsScreen />} />
          <Route path="/settings/posts/:id" element={<UserPostsScreen />} />
        </Route>

        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/**
 * TODO
 * - add navigation to menu in settings
 * - settings -> Posts
 * - settings -> Library [rename??]
 */
