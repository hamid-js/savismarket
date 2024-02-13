import { useRoutes } from 'react-router-dom';
import routeData from './router';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { PostProvider } from './contexts/PostContext';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  const router = useRoutes(routeData);

  return (
  
      <PostProvider>
      <ScrollToTop />
        <Header />
        {router}
        <Footer />
        <Toaster position='top-center' reverseOrder={false} />
      </PostProvider>
    
  );
}

export default App;
