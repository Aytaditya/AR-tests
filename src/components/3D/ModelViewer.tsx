import React from 'react';
import { Box, Maximize2, Minimize2 } from 'lucide-react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          'camera-controls'?: boolean;
          'auto-rotate'?: boolean;
          'rotation-per-second'?: string;
          'interaction-prompt'?: string;
          'interaction-prompt-style'?: string;
          'interaction-prompt-threshold'?: string;
          'camera-orbit'?: string;
          'environment-image'?: string;
          exposure?: string;
          poster?: string;
          loading?: string;
          reveal?: string;
          ar?: boolean;
          'shadow-intensity'?: string;
          'shadow-softness'?: string;
        },
        HTMLElement
      >;
    }
  }
}

interface ModelViewerProps {
  modelUrl: string;
  posterUrl?: string;
  title: string;
}

export const ModelViewer: React.FC<ModelViewerProps> = ({
  modelUrl,
  posterUrl,
  title,
}) => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      className={`relative transition-all duration-300 ease-in-out ${
        isFullscreen
          ? 'fixed inset-0 z-50 bg-black'
          : 'w-full h-[500px] bg-gray-900 rounded-xl overflow-hidden'
      }`}
    >
      <model-viewer
        src={modelUrl}
        poster={posterUrl}
        camera-controls
        auto-rotate
        rotation-per-second="30deg"
        interaction-prompt="auto"
        interaction-prompt-style="basic"
        camera-orbit="-45deg 75deg 105%"
        environment-image="neutral"
        exposure="1"
        loading="eager"
        reveal="auto"
        shadow-intensity="1"
        shadow-softness="0.5"
        className="w-full h-full"
      ></model-viewer>

      <div className="absolute top-4 right-4 flex space-x-2">
        <button
          onClick={toggleFullscreen}
          className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors"
        >
          {isFullscreen ? (
            <Minimize2 className="h-6 w-6 text-white" />
          ) : (
            <Maximize2 className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Box className="h-6 w-6 text-white" />
              <span className="text-white font-medium">{title}</span>
            </div>
            <div className="flex space-x-2">
              <button className="bg-gray-800 text-white px-3 py-1 rounded-lg hover:bg-gray-700 transition-colors">
                Reset View
              </button>
              <button className="bg-indigo-600 text-white px-3 py-1 rounded-lg hover:bg-indigo-700 transition-colors">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};