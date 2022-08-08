import Header from "./components/Header";
import TareaProvider from "./provider/TareaProvider";
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <TareaProvider >

        <Header />
        <HomePage />

      </TareaProvider>
    </>
  );
}

export default App;
