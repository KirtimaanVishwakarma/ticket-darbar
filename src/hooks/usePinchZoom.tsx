import { useState, useEffect } from 'react';

const usePinchZoom = (divId: string) => {
  const [scale, setScale] = useState<number>(1);
  const [prevDistance, setPrevDistance] = useState<number | null>(null);

  useEffect(() => {
    const zoomElement = document.getElementById(divId);
    
    if (!zoomElement) return;

    const scales = [0.5, 0.75, 1];

    const getNextScale = (currentScale: number, zoomIn: boolean) => {
      const index = scales.indexOf(currentScale);
      if (zoomIn) {
        return index > 0 ? scales[index - 1] : currentScale;
      } else {
        return index < scales.length - 1 ? scales[index + 1] : currentScale;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];

        // Calculate the distance between two touch points
        const distance = Math.sqrt(
          Math.pow(touch2.pageX - touch1.pageX, 2) + Math.pow(touch2.pageY - touch1.pageY, 2)
        );

        // Determine if zooming in or out
        const zoomIn = prevDistance !== null && distance < prevDistance;
        const zoomOut = prevDistance !== null && distance > prevDistance;

        if (zoomIn || zoomOut) {
          const newScale = getNextScale(scale, zoomIn);
          setScale(newScale);
        }

        setPrevDistance(distance); // Update previous distance
      }
    };

    const handleTouchEnd = () => {
      setPrevDistance(null); // Reset previous distance when touch ends
    };

    // Add event listeners
    zoomElement.addEventListener('touchmove', handleTouchMove);
    zoomElement.addEventListener('touchend', handleTouchEnd);
    zoomElement.addEventListener('touchcancel', handleTouchEnd);

    // Cleanup event listeners on component unmount
    return () => {
      zoomElement.removeEventListener('touchmove', handleTouchMove);
      zoomElement.removeEventListener('touchend', handleTouchEnd);
      zoomElement.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [divId, scale, prevDistance]);

  return scale;
};

export default usePinchZoom;
