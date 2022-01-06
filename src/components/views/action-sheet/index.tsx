import * as React from 'react'
import styles from './style.module.scss'
import { createPortal } from 'react-dom'
import { Button } from '../../controls'

type Button = {
    title: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

type ActionSheetProps = {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    buttons: Button[];
}

export const ActionSheet: React.FC<ActionSheetProps> = ({
    visible,
    setVisible,
    buttons,
}: ActionSheetProps) => {
    const click = (e: React.MouseEvent<HTMLButtonElement>, onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void) => {
        setVisible(false)
        onClick && onClick(e)
    }
    return createPortal(
        <section
            className={styles['action-sheet']}
            style={visible ? {} : { display: 'none' }}
        >
            <div className={styles.wrapper}>
                {buttons.map((button, index) => <Button
                    key={index}
                    onClick={(e) => click(e, button.onClick)}
                    title={button.title}
                    className={styles.button}
                ></Button>)}
                <Button
                    onClick={click}
                    title="Cancel"
                    className={[styles.button, styles['cancel-button']].join(" ")}
                ></Button>
            </div>
        </section>,
        document.body,
    )
}
