import React, { useMemo } from "react";
import { DefaultProps } from "../../types/helpers";
import styles from './Button.module.scss'
import { Link } from "react-scroll";

export type ButtonProps = DefaultProps & React.PropsWithChildren & {
    view?: 'primary' | 'secondary'
    size?: 'large' | 'medium'
    disabled?: boolean
    ariaLabel: string
    scrollTo?: string
    onPress: () => void
}

export const Button = React.memo<ButtonProps>(({ view = 'primary', size = 'medium', disabled = false, children, onPress, className, scrollTo }) => {
    const classes = useMemo(() => [
        styles.button,
        styles[`button--view-${view}`],
        styles[`button--size-${size}`],
        ...(disabled ? [
            styles['is-disabled']
        ] : []),
        className
    ].join(' '), [view, size, disabled])

    if (scrollTo) {
        return <Link smooth={true} duration={300} offset={-50} to={scrollTo} className={classes} disabled={disabled} onClick={onPress}>
            <span className="button__content">{children}</span>
        </Link>
    }

    return <button className={classes} disabled={disabled} onClick={onPress}>
        <span className="button__content">{children}</span>
    </button>
})