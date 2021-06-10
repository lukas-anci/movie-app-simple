import './App.css';
import MovieTable from './components/movieTable';
import Header from './components/header';
import Footer from './components/mvFooter';

function App() {
  return (
    <div className="App  mt-3">
      <Header />
      <MovieTable />

      <Footer />
    </div>
  );
}

export default App;
