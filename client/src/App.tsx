import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Screens
import Layout from './components/router/Layout';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Login from './screens/Login/Login';
import NotFound from './screens/NotFound/NotFound';

function App() {
  console.log(window.location.host);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeScreen />} />
        </Route>

        <Route path="/login" element={<Login />} />
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
