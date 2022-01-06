import * as React from 'react'
import styles from './style.module.scss'

type TableProps = React.PropsWithChildren<{
    header?: string;
    footer?: string;
    inset?: boolean;
}>

export const Table: React.FC<TableProps> = ({
    header = '',
    footer = '',
    inset = false,
    children,
}: TableProps) => {
    return (
        <section className={[styles.table, inset ? styles.inset : ''].join(" ")}>
            {header !== '' && <div className={styles.header}>{header}</div>}
            {children && <ul className={styles['table-rows']}>{children}</ul>}
            {footer !== '' && <div className={styles.footer}>{footer}</div>}
        </section>
    )
}
