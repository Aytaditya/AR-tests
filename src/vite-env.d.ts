/// <reference types="vite/client" />

interface Navigator {
  xr?: {
    isSessionSupported(mode: string): Promise<boolean>;
    requestSession(
      mode: string,
      options?: {
        requiredFeatures?: string[];
        optionalFeatures?: string[];
        domOverlay?: { root: HTMLElement | null };
      }
    ): Promise<XRSession>;
  };
}

interface XRSession {
  end(): Promise<void>;
  addEventListener(type: string, callback: () => void): void;
  removeEventListener(type: string, callback: () => void): void;
}