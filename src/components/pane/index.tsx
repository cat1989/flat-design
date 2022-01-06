import * as React from 'react'
import styles from './style.module.scss'

type PaneProps = React.PropsWithChildren<{
    onScroll?: (e: React.UIEvent<HTMLElement>) => void;
}>

export const Pane: React.FC<PaneProps> = ({
    onScroll,
    children,
}: PaneProps) => {
    return (
        <main
            className={styles.pane}
            onScroll={onScroll}
        >{children}</main>
    )
}
