import { useRoutes } from 'react-router-dom';
import routeData from './router';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
function App() {
  const router = useRoutes(routeData);
  return (
    <>
      <Header />
      {router}
      <Footer />
    </>
  );
}

export default App;
