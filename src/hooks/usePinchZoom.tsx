import { useState, useEffect } from 'react';

const usePinchZoom = (divId: string) => {
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const zoomElement = document.getElementById(divId);
    
    if (!zoomElement) return;

    let initialDistance = 0;
    let currentScale = 1;

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];

        // Calculate the distance between two touch points
        const distance = Math.sqrt(
          Math.pow(touch2.pageX - touch1.pageX, 2) + Math.pow(touch2.pageY - touch1.pageY, 2)
        );

        // If initialDistance is 0, this is the first pinch event
        if (initialDistance === 0) {
          initialDistance = distance;
        } else {
          // Compare current distance to initial distance to determine zoom direction
          const scaleChange = distance / initialDistance;

          currentScale = Math.min(Math.max(currentScale * scaleChange, 0.5), 1.5); // Clamp scale between 0.5 and 1.5
          setScale(currentScale);
        }
      }
    };

    const handleTouchEnd = () => {
      initialDistance = 0; // Reset the initial distance when touch ends
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
  }, [divId]);

  return scale;
};

export default usePinchZoom;
