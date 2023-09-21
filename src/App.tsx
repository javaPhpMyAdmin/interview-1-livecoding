import './App.css';
import { useCatImage } from './hooks/useCatImage';
import { useGetRandomFact } from './hooks/useGetRandomFact';

function App() {
  const { fact, getMoreRandomFact } = useGetRandomFact();
  const { catImageUrl } = useCatImage({ fact });

  const handleClick = () => {
    getMoreRandomFact();
  };

  return (
    <>
      <main>
        {' '}
        <h1>Cats app - live coding interview for a React junior position</h1>
        <button onClick={handleClick}>Get new fact</button>
        {fact && <p>{fact}</p>}
        {catImageUrl && (
          <img src={catImageUrl} alt="A cat img from a random api" />
        )}
      </main>
    </>
  );
}

export default App;
