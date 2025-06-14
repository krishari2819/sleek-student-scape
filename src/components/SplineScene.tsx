
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
    <div className={`spline-container ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          Loading 3D Scene...
        </div>
      )}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center text-red-500">
          Failed to load 3D scene
        </div>
      )}
      <Spline
        scene={scene}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};
