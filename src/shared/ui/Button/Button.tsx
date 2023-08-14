import React, { useMemo } from "react";
import { DefaultProps } from "../../types/helpers";
import styles from './Button.module.scss'

export type ButtonProps = DefaultProps & React.PropsWithChildren & {
    view?: 'primary' | 'secondary'
    size?: 'large' | 'medium'
    disabled?: boolean
    ariaLabel: string
    onPress: () => void
}

export const Button = React.memo<ButtonProps>(({ view = 'primary', size = 'medium', disabled = false, children, onPress, className }) => {
    const classes = useMemo(() => [
        styles.button,
        styles[`button--view-${view}`],
        styles[`button--size-${size}`],
        ...(disabled ? [
            styles['is-disabled']
        ] : []),
        className
    ].join(' '), [view, size, disabled])

    return <button className={classes} disabled={disabled} onClick={onPress}>
        <span className="button__content">{children}</span>
    </button>
})