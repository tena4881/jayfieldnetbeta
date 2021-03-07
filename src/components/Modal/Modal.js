import React from 'react'

export default function Modal({open, children, onConfirm}) {
    if(!open) return null;
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <div >
                {children}
                
            </div>
            <button style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} onClick={onConfirm}>Confirm</button>
        </div>
    )
}
