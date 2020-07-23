import React from "react";
import "./Input.css";

export interface Props {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    autofocus?: boolean;
    value?: string | number;
    defaultValue?: string| number;
    className?: string;
    variant?: string;
};

const Input = ({onChange, onBlur, type = "text", placeholder, autofocus = false, value, defaultValue, className, variant}: Props) => (
    <input 
    className={`${className} ${variant} input`}
    type={type}
    onChange={onChange}
    onBlur={onBlur}
    placeholder={placeholder}
    autoFocus={autofocus}
    value={value}
    defaultValue={defaultValue} />
);


export default Input;