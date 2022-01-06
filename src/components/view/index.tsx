import * as React from 'react'
import styles from './style.module.scss'

type ViewProps = React.PropsWithChildren<{

}>

export const View: React.FC<ViewProps> = ({
    children,
}: ViewProps) => {
    return (
        <article className={styles.view}>{children}</article>
    )
}
