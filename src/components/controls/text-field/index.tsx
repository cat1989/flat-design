import * as React from 'react'
import styles from './style.module.scss'
import { Button } from '../button'

type TextFieldProps = {
    value: string;
    onChange: (value: string) => void;
    maxlength?: number;
    secure?: boolean;
    placeholder?: string;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
    className?: string;
    clearable?: boolean;
    align?: "left" | "center" | "right";
    icon?: JSX.Element; 
}

export const TextField: React.FC<TextFieldProps> = ({
    value,
    onChange,
    maxlength = 32,
    secure = false,
    placeholder,
    onFocus,
    onBlur,
    style,
    className,
    clearable = false,
    align = "left",
    icon,
}: TextFieldProps) => {
    const clear = () => {
        onChange('')
    }
    return (
        <div
            style={style}
            className={[styles['text-field'], styles[align], className].join(" ")}
        >
            {icon}
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                type={secure ? 'password' : 'text'}
                placeholder={placeholder}
                maxLength={maxlength}
                onFocus={onFocus}
                onBlur={onBlur}
                className={styles.input}
            />
            {clearable && value !== '' && <Button
                className={styles.clearable}
                onClick={clear}
            ></Button>}
        </div>
    )
}
