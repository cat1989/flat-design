import * as React from 'react'
import styles from './style.module.scss'

type SwitchProps = {
    value: boolean;
    onChange: (value: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({
    value,
    onChange,
}: SwitchProps) => {
    return (
        <div className={[styles.switch, value ? styles.on : ''].join(" ")}>
            <div className={styles.handler}></div>
            <input
                type="checkbox"
                checked={value}
                onChange={(e) => onChange(e.target.checked)}
                className={styles.input}
            />
        </div>
    )
}
