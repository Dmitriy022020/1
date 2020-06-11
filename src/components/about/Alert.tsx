import React from "react";

interface AlertProps {
  text: string
}

export const Alert: React.FC<AlertProps> = ({text}) => {
  return (
    <div className="alert">
      {text}
    </div>
  )
}