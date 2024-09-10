import React from 'react';
interface Button {
  btnName: string;
  onClick?: () => void;
  className?: string;
  btnClass?: string; 
}
const Button = ({ btnName, onClick, className, btnClass }: Button) => {
  return (
    <div className={className}>
      <button onClick={onClick} className={`bg-yellow-y1 px-3 py-1 rounded text-white ${btnClass}`}>{btnName}</button>
    </div>
  );
};

export default Button;
