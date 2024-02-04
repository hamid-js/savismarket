import BlogPage from './pages/BlogPage';
import ComparePage from './pages/ComparePage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PageNotFound from './pages/PageNotFound';
import ProductPreviewPage from './pages/ProductPreviewPage';
import ShoppingPage from './pages/ShoppingPage';
import WishlistPage from './pages/WishlistPage';

const routeData = [
  {
    path: '/',
    element: <HomePage />,
    children: [{ path: 'login', element: <LoginPage /> }],
  },
  { path: '/product/:id', element: <ProductPreviewPage /> },
  { path: '/shopping', element: <ShoppingPage /> },
  { path: '/wishlist', element: <WishlistPage /> },
  { path: '/compare', element: <ComparePage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '*', element: <PageNotFound /> },
];

export default routeData;
