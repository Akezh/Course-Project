import React, {useState, useCallback} from 'react'
interface Props {
    items: string[],
    onDropClick: (service: string) => void,
    name: string
}
const CustomDropdown = ({items, onDropClick, name}: Props) => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            
            <button onClick = {() => setOpen(!open)} className = "tw-w-64 tw-border-solid tw-border-2 tw-rounded-2xl tw-inline-block" style = {{backgroundColor: "#F7F7F7"}}>
                {name}
            </button>
            <div className = "tw-absolute">
            {open && 
            <div className = "tw-border-solid tw-rounded-xl tw-w-64 tw-text-center tw-border-2" style = {{backgroundColor: "#F7F7F7"}}>

                {items.map((item, i) => (
                    <div key = {i} style = {{backgroundColor: "#F7F7F7"}}  className = "tw-rounded-xl tw-border-solid pt-1" onClick={() => onDropClick(item?? "")}>{item} <hr/></div>
                    
                ))}

               

            </div>
            
            }
            </div>
        </div>
    )
}

export default CustomDropdown
