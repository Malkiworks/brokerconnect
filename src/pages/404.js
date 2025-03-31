import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Custom404() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/');
  }, [router]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">Sorry, the page you are looking for doesn't exist.</p>
        <a href="/" className="text-blue-500 hover:underline">
          Return to Home
        </a>
      </div>
    </div>
  );
} 