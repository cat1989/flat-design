import * as React from 'react'
import styles from './style.module.scss'

type WebViewProps = {
    src: string;
}

export const WebView: React.FC<WebViewProps> = ({
    src,
}: WebViewProps) => {
    return (
        <iframe
            className={styles['web-view']}
            src={src}
        ></iframe>
    )
}
