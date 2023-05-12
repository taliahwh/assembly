import './app.css';

// Components
import Header from './components/header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';

function App() {
  return (
    <>
      <Header />
      {/* TODO - React Router@latest */}
      <HomeScreen />
    </>
  );
}

export default App;
