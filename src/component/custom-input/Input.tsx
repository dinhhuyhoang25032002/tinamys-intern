import { ChangeEventHandler, CSSProperties, HTMLInputTypeAttribute } from 'react'
import './Input.scss'
type PropInput = {
    type?: HTMLInputTypeAttribute | undefined,
    className?: string | undefined | null,
    name?: string | undefined,
    value: string | number | readonly string[] | undefined
    onChange: ChangeEventHandler<HTMLInputElement> | undefined
    width?: string | number | undefined
    height?: string | number | undefined
    style?: CSSProperties | undefined
    placeholder?: string | undefined,
}
const Input = ({ type, className, width, height, name, value, onChange, style, placeholder }: PropInput) => {

    return (
        <input
            type={type}
            className={
                className ? "form-inp error" : "form-inp"
            }
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={style}
            height={height}
            width={width}
            
        />

    )
}
export default Input