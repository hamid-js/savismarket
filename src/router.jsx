import BlogPage from './pages/BlogPage';
import ComparePage from './pages/ComparePage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PageNotFound from './pages/PageNotFound';
import ProductPage from './pages/ProductPage';
import ShoppingPage from './pages/ShoppingPage';
import WishlistPage from './pages/WishlistPage';

const routeData = [
  {
    path: '/',
    element: <HomePage />,
    children: [{ path: 'login', element: <LoginPage /> }],
  },

  { path: '/shopping', element: <ShoppingPage /> },
  { path: '/wishlist', element: <WishlistPage /> },
  { path: '/compare', element: <ComparePage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/product/:ID', element: <ProductPage /> },
  { path: '*', element: <PageNotFound /> },
];

export default routeData;
