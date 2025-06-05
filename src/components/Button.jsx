import React from 'react'

const Button = ({ children, onClick, ...otherProps }) => {
  return (
    <button
      className="flex-1 flex items-center justify-center font-semibold py-1.5 px-3 rounded-full aspect-square transition-colors duration-200 border-[#28282b] border-[1px] text-black hover:bg-black hover:text-white"
      onClick={onClick}
     {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button
