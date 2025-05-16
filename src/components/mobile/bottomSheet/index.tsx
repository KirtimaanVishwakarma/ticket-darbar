import React, { useEffect, useRef } from 'react';

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

  const handleClickBottomSheet = (e: any) => {
    if (e?.target?.id === 'bottom-sheet') {
      setShowBottomSheet(false);
    }
  };

  useEffect(() => {
    if (!showBottomSheet) return;
    const bottomSheet = document.querySelector('#bottom-sheet');
    bottomSheet?.addEventListener('click', handleClickBottomSheet, true);
    return () =>
      bottomSheet?.removeEventListener('click', handleClickBottomSheet);
  }, [showBottomSheet]);
  return (
    <div
      id={showBottomSheet ? 'bottom-sheet' : ''}
      className={`sm:hidden h-full w-full fixed top-0 bg-black bg-opacity-60 z-50 ${
        showBottomSheet ? 'block' : 'translate-y-full'
      }`}
    >
      <div
        className={`flex justify-end flex-col bg-white absolute w-full divide-y rounded-t-xl bottom-0 transition-all ease-linear ${
          showBottomSheet ? 'translate-y-0' : 'translate-y-full'
        }`}
        // onClick={() => setShowBottomSheet(false)}
      >
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
