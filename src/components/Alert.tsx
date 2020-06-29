import React from "react";

interface IProps {
  text: string
}

export const Alert: React.FC<IProps> = ({text}) => {
  return (
    <div className="alert">
      <p>{text}</p>
    </div>
  )
}