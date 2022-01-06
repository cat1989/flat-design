import * as React from 'react'
import styles from './style.module.scss'
import { Button } from '../../controls'

type Tab = {
    title: string;
    image: JSX.Element;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

type TabBarProps = {
    tabs: Tab[];
}

export const TabBar: React.FC<TabBarProps> = ({
    tabs,
}: TabBarProps) => {
    const [current, setCurrent] = React.useState(0)
    const click = (e: React.MouseEvent<HTMLButtonElement>, index: number, onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void) => {
        setCurrent(index)
        onClick?.(e)
    }
    return (
        <nav className={styles['tab-bar']}>
            {tabs.map((tab, index) => <Button
                key={index}
                title={tab.title}
                onClick={(e) => click(e, index, tab.onClick)}
                className={[styles.button, index === current ? styles.active : ''].join(" ")}
            >{tab.image}</Button>)}
        </nav>
    )
}
