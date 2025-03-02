import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import Comics from './components/Comics';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetail from './components/CharacterDetails';
import NavigationBar from './components/NavigationBar';
import NotFound from './components/NotFound';
// import './components/character-styles.css';

function App() {

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/browse-characters' element={<BrowseCharacters />} />
        <Route path='/character-detail/:name' element={<CharacterDetail />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
