import React from 'react'
import { useId } from 'react'

function Input({
    labelClass,
    classname,
    type = "text",
    label = "",
    placeholder,
    ...props
}, ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {
                label && <label className={labelClass} id={id}>{label}</label>
            }
            <input type={type} placeholder={placeholder} className={`${classname} px-3 py-2 rounded-lg bg-white 
            text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`} ref={ref} {...props} id={id} />
        </div >
    )
}

export default React.forwardRef(Input)