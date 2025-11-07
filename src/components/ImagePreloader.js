import { useState, useEffect } from 'react';

const ImagePreloader = ({ children }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      `${process.env.PUBLIC_URL}/assets/lightmode_background.jpg`,
      `${process.env.PUBLIC_URL}/assets/darkmode_background.jpg`,
    ];

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    imageUrls.forEach((url) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        // Still mark as loaded even on error to avoid infinite loading
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.src = url;
    });
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-light-moss dark:bg-warm-brown transition-colors duration-300">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-light-primary dark:border-warm-rust border-t-transparent"></div>
          <p className="mt-4 text-lg font-serif text-light-primary dark:text-warm-rust">
            Loading Portfolio...
          </p>
        </div>
      </div>
    );
  }

  return children;
};

export default ImagePreloader;
