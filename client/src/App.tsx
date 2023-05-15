import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Layout from './components/router/Layout';
import Header from './components/header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import NotFound from './screens/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeScreen />} />
        </Route>

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
