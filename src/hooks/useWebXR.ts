import { useState, useCallback } from 'react';

export const useWebXR = () => {
  const [isARSupported, setIsARSupported] = useState(false);
  const [session, setSession] = useState<XRSession | null>(null);

  // Check if WebXR is supported
  const checkARSupport = useCallback(async () => {
    if ('xr' in navigator) {
      try {
        const supported = await navigator.xr.isSessionSupported('immersive-ar');
        setIsARSupported(supported);
        return supported;
      } catch (error) {
        console.error('Error checking AR support:', error);
        return false;
      }
    }
    return false;
  }, []);

  // Start AR session
  const startAR = useCallback(async () => {
    if (!isARSupported) {
      console.warn('AR is not supported on this device');
      return;
    }

    try {
      const xrSession = await navigator.xr.requestSession('immersive-ar', {
        requiredFeatures: ['hit-test', 'dom-overlay'],
        domOverlay: { root: document.getElementById('ar-overlay') },
      });

      setSession(xrSession);

      xrSession.addEventListener('end', () => {
        setSession(null);
      });

      return xrSession;
    } catch (error) {
      console.error('Error starting AR session:', error);
    }
  }, [isARSupported]);

  // End AR session
  const endAR = useCallback(() => {
    if (session) {
      session.end();
    }
  }, [session]);

  return {
    isARSupported,
    session,
    checkARSupport,
    startAR,
    endAR,
  };
};