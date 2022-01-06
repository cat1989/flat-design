import * as React from 'react'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'

type TableRowProps = React.PropsWithChildren<{
    image?: string;
    title: string | JSX.Element;
    subtitle?: string | JSX.Element;
    to?: string;
    onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
    style?: "basic" | "right";
}>

export const TableRow: React.FC<TableRowProps> = ({
    image = '',
    title,
    subtitle,
    to = '',
    onClick,
    style = 'basic',
}: TableRowProps) => {
    const navigate = useNavigate()
    const click = (e: React.MouseEvent<HTMLLIElement>) => {
        if (to !== '') {
            navigate(to)
        }
        else {
            onClick && onClick(e)
        }
    }
    return (
        <li
            onClick={click}
            className={[styles['table-row'], styles[style], to !== '' || onClick ? styles.clickable : '', to !== '' ? styles.link : ''].join(" ")}
        >
            {image !== '' && <div
                className={styles.image}
                style={{ backgroundImage: `url(${image})` }}
            ></div>}
            <div className={styles.wrapper}>
                <div className={styles.title}>{title}</div>
                {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
            </div>
        </li>
    )
}
