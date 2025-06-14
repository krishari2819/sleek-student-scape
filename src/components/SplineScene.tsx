

import Spline from '@splinetool/react-spline';
import { useState } from 'react';

interface SplineSceneProps {
  scene: string;
  className?: string;
  onLoad?: () => void;
  onError?: (error: any) => void;
}

export const SplineScene = ({ scene, className = "", onLoad, onError }: SplineSceneProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    console.log('Spline scene loaded:', scene);
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = (error: any) => {
    console.error('Spline scene error:', error);
    setIsLoading(false);
    setHasError(true);
    onError?.(error);
  };

  return (
    <div className={`spline-container ${className}`} style={{ pointerEvents: 'none' }}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-background/10 backdrop-blur-sm">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full mx-auto mb-2"></div>
            <p>Loading 3D Scene...</p>
          </div>
        </div>
      )}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center text-center p-4 bg-background/10 backdrop-blur-sm">
          <div>
            <p className="text-red-400 mb-2">Failed to load 3D scene</p>
            <p className="text-sm text-muted-foreground">
              Scene may not be published or URL format incorrect
            </p>
          </div>
        </div>
      )}
      {!hasError && (
        <div style={{ pointerEvents: 'none' }}>
          <Spline
            scene={scene}
            onLoad={handleLoad}
            onError={handleError}
          />
        </div>
      )}
    </div>
  );
};

