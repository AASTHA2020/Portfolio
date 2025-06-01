import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="loading-screen"
        >
          <div className="relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-portfolio-purple/20 rounded-full blur-3xl animate-float" />
              <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-portfolio-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-portfolio-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            </div>

            {/* Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="loading-logo"
            >
              <div className="w-full h-full bg-gradient-to-br from-portfolio-purple via-portfolio-cyan to-portfolio-pink rounded-full animate-gradient" />
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-portfolio-purple via-portfolio-cyan to-portfolio-pink bg-clip-text text-transparent animate-text-gradient">
                Loading...
              </h2>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
