
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string;
  className?: string;
  onLoad?: () => void;
  onError?: (error: any) => void;
}

export const SplineScene = ({ scene, className = "", onLoad, onError }: SplineSceneProps) => {
  return (
    <div className={`spline-container ${className}`}>
      <Spline
        scene={scene}
        onLoad={onLoad}
        onError={onError}
      />
    </div>
  );
};
