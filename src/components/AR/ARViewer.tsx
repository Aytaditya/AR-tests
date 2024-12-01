import React from 'react';
import { ModelViewer } from '../3D/ModelViewer';

export const ARViewer = () => {
  return (
    <ModelViewer
      modelUrl="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
      posterUrl="https://modelviewer.dev/shared-assets/models/Astronaut.webp"
      title="Interactive 3D Preview"
    />
  );
};