import * as React from 'react'
import styles from './style.module.scss'

type ButtonProps = React.PropsWithChildren<{
    title?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    style?: React.CSSProperties;
    className?: string;
}>

export const Button: React.FC<ButtonProps> = ({
    title,
    onClick,
    style,
    className,
    children,
}: ButtonProps) => {
    return (
        <button
            type="button"
            style={style}
            className={[styles.button, className].join(" ")}
            onClick={onClick}
        >
            {children}
            {title}
        </button>
    )
}
