import React, { useEffect } from 'react';

const BottomSheet = ({
  children,
  showBottomSheet = false,
  setShowBottomSheet,
}: {
  children: React.ReactNode;
  showBottomSheet: boolean;
  setShowBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    if (showBottomSheet) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showBottomSheet]);
  return (
    <div
      className={`sm:hidden h-full w-full fixed top-0 bg-black bg-opacity-60 z-50 ${
        showBottomSheet ? 'block' : 'translate-y-full'
      }`}
      onClick={() => setShowBottomSheet(false)}
    >
      <div
        className={`flex justify-end flex-col bg-white absolute w-full divide-y rounded-t-xl bottom-0 transition-all ease-linear ${
          showBottomSheet ? 'translate-y-0' : 'translate-y-full'
        }`}
        onClick={() => setShowBottomSheet(false)}
      >
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
