import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:  Path:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Cette page n'existe pas.</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Retour vers la page d'accueil
        </a>
      </div>
    </div>
  );
}
