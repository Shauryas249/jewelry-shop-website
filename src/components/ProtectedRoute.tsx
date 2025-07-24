import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@/contexts/AuthContext';

const publicRoutes = [
  '/', 
  '/login', 
  '/signup', 
  '/forgot-password', 
  '/magic-link-login', 
  '/reset-password',
  '/dashboard',
  '/collections',
  '/collections/bridal-collection',
  '/collections/diamond-jewelry',
  '/collections/gold-jewelry',
  '/collections/precious-stones',
  '/about',
  '/contact',
  '/blog'
];

// Function to check if a route is public, including dynamic routes
const isPublicRoute = (pathname: string): boolean => {
  // Check exact matches first
  if (publicRoutes.includes(pathname)) {
    return true;
  }
  
  // Check dynamic routes
  if (pathname.startsWith('/product/')) {
    return true;
  }
  
  if (pathname.startsWith('/collections/')) {
    return true;
  }
  
  return false;
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, initializing } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!initializing && !user && !isPublicRoute(router.pathname)) {
      router.push('/login');
    }
  }, [user, initializing, router]);

  if (initializing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!user && !isPublicRoute(router.pathname)) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;