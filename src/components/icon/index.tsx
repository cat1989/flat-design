import * as React from 'react'
import styles from './style.module.scss'

type IconProps = {
    name: string;
    style?: React.CSSProperties;
    className?: string;
}

export const Icon: React.FC<IconProps> = ({
    name,
    style,
    className,
}: IconProps) => {
    return (
        <svg
            style={style}
            className={[styles.icon, className].join(" ")}
        >
            <use xlinkHref={`#${name}`}></use>
        </svg>
    )
}
