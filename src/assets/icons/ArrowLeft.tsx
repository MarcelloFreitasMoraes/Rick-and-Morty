import React from "react"

interface ArrowLeftProps {
    width?: number
    height?: number
}

export const ArrowLeft = ({ width, height }: ArrowLeftProps) => {
    return (
        <svg width={width ? width : 7} height={height ? height : 12} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1L1 5L5 9" stroke="#1D1D1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}