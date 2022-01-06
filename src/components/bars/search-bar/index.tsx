import * as React from 'react'
import styles from './style.module.scss'
import { TextField, Button } from '../../controls'
import { Icon } from '../../icon'

type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    maxlength?: number;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    clearable?: boolean;
    cancelable?: boolean;
    onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChange,
    placeholder = "Search",
    maxlength = 32,
    onFocus,
    onBlur,
    clearable = false,
    cancelable = false,
    onCancel,
}: SearchBarProps) => {
    return (
        <section className={styles['search-bar']}>
            <TextField
                value={value}
                onChange={onChange}
                maxlength={maxlength}
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
                clearable={clearable}
                className={styles['text-field']}
                icon={<Icon
                    name="search"
                    className={styles.icon}
                ></Icon>}
            ></TextField>
            {cancelable && <Button
                className={styles['cancel-button']}
                title="Cancel"
                onClick={onCancel}
            ></Button>}
        </section>
    )
}
