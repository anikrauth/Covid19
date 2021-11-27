import Board from './components/Board';
import { BrowserRouter as Router } from 'react-router-dom';
import TitelSection from './components/layout/TitelSection';
import CardList from './components/cards/CardList';
import FooterSection from './components/layout/FooterSection';

function App() {
  return (
    <Board>
      <TitelSection streetName="Koblenzerstraße" />
      <CardList />
      <FooterSection />
    </Board>
  );
}

export default App;
