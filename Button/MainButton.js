import React from 'react'

const MainButton = ({ noHover, children, className, textColor, color = 'primary', variant = 'filled', onClick = () => null, addShadow, type = '' }) => {
  return (
    <>
      {variant === 'filled' ? (
        <button onClick={onClick}
          type={type}
          className={`
        ${color === 'primary' ? 'bg-gradient-to-l to-primary from-[#ffa45e] text-white' : ''}
        ${color === 'white' ? 'bg-white text-primary ' : ''}
        ${addShadow ? 'shadow-button-primary hover:shadow-button-primary-hover' : ''}
        ${!noHover ? 'hover:scale-[1.03] active:scale-[0.97]' : ''}
        text-primary px-3 py-2 text-base rounded-md  ${className}`}>
          {children}

        </button>
      ): ''}
      {variant === 'outlined' ? (
        <button onClick={onClick}
          type={type}
          className={`
        ${color === 'primary' ? 'border-black text-black' : 'text-white border-white'}
        ${!noHover ? 'hover:scale-[1.03] active:scale-[0.97]' : ''}
        border px-3 py-2 text-base rounded-md  ${className}`}>
          {children}
        </button>
      ) : ''}
    </>
  )
}

export default MainButton
