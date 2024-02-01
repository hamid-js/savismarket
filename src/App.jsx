import { useRoutes } from 'react-router-dom';
import routeData from './router';
import AllNavs from './components/menus/AllNavs';
import Footer from './components/footer/Footer';
function App() {
  const router = useRoutes(routeData);
  return (
    <>
      <AllNavs />
      {router}
      <Footer />
    </>
  );
}

export default App;
