import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0; // hauteur du header, si présent
        const offsetTop = element.offsetTop - headerHeight - 20; // ajoute 20px en moins pour le décalage

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, [hash]);
};

export default useScrollToHash;
