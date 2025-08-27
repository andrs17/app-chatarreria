import React from "react";

export const CustomDateInput = React.forwardRef(
  ({ value, onClick, onMouseEnter, onMouseLeave, placeholder }, ref) => (
    <input
      ref={ref}
      value={value}
      onClick={onClick}
      readOnly
      className="custom-date-input"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      placeholder={placeholder}
    />
  )
);

