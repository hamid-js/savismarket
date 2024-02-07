import { useRoutes } from 'react-router-dom';
import routeData from './router';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { PostProvider } from './contexts/PostContext';
import { Toaster } from 'react-hot-toast';

function App() {
  const router = useRoutes(routeData);

  return (
  
      <PostProvider>
        <Header />
        {router}
        <Footer />
        <Toaster position='top-center' reverseOrder={false} />
      </PostProvider>
    
  );
}

export default App;
