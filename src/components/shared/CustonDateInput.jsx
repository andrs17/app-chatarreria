import React from "react";
import styled from "styled-components";

export const CustomDateInput = React.forwardRef(
  ({ value, onClick, onMouseEnter, onMouseLeave, placeholder }, ref) => (
    <StyledDateInput
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

const StyledDateInput = styled.input`
  padding: 8px 8px;
  border-radius: 12px;
  border: none;
  font-size: 0.8rem;
  width: 95%;
  height: 2.5rem;
  font-weight: 700;
  text-align: end;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colores.azulGris};


  &:hover {
    box-shadow: 3px 3px 5px ${({ theme }) => theme.colores.azulGris};
    transform: scale(1.05);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    
    margin: 0;
    padding: 5px;
    font-size: 0.7rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: 4.5rem;
    margin: 0;
  }
`;
