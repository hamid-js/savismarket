import { useRoutes } from 'react-router-dom';
import routeData from './router';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { PostProvider } from './PostContext';

function App() {
  const router = useRoutes(routeData);

  return (
  
      <PostProvider>
        <Header />
        {router}
        <Footer />
      </PostProvider>
    
  );
}

export default App;
