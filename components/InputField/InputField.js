import React from 'react'

const InputField = ({ className, ...restProps }) => {
    return (
        <input
          {...restProps}
          name={restProps?.name}
          className={` py-3 px-4 rounded-md w-full outline-none ${className}`}
        />
      );
}

export default InputField
