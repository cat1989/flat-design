import * as React from 'react'
import styles from './style.module.scss'
import { createPortal } from 'react-dom'
import { Button } from '../../controls'

type Button = {
    title: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

type AlertProps = {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    title: string;
    message?: string;
    buttons?: Button[];
}

export const Alert: React.FC<AlertProps> = ({
    visible,
    setVisible,
    title,
    message = '',
    buttons = [
        {
            title: 'OK',
        },
    ],
}: AlertProps) => {
    const click = (e: React.MouseEvent<HTMLButtonElement>, onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void) => {
        setVisible(false)
        onClick && onClick(e)
    }
    return createPortal(
        <section
            className={styles.alert}
            style={visible ? {} : { display: 'none' }}
        >
            <div className={styles.wrapper}>
                <div className={styles.title}>{title}</div>
                {message !== '' && <div className={styles.message}>{message}</div>}
                <div className={styles.buttons}>
                    {buttons.map((button, index) => <Button
                        key={index}
                        onClick={(e) => click(e, button.onClick)}
                        title={button.title}
                        className={styles.button}
                    ></Button>)}
                </div>
            </div>
        </section>,
        document.body,
    )
}
