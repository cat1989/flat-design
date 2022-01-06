import * as React from 'react'
import styles from './style.module.scss'

type NavigationBarProps = {
    topItem?: string | JSX.Element;
    backItem?: JSX.Element;
    rightBarItem?: JSX.Element;
    prefersLargeTitles?: boolean;
    isTranslucent?: boolean;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
    topItem,
    backItem,
    rightBarItem,
    prefersLargeTitles = false,
    isTranslucent = false,
}: NavigationBarProps) => {
    return (
        <header className={[styles['navigation-bar'], prefersLargeTitles ? styles.large : '', isTranslucent ? styles.translucent : ''].join(" ")}>
            {topItem && <h1 className={styles['top-item']}>{topItem}</h1>}
            <div className={styles['back-item']}>{backItem}</div>
            <div className={styles['right-bar-item']}>{rightBarItem}</div>
        </header>
    )
}
