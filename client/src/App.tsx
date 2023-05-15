import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './components/header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';

function App() {
  return (
    <div>
      <Header />
      {/* TODO - React Router@latest */}
      <HomeScreen />
    </div>
  );
}

export default App;
