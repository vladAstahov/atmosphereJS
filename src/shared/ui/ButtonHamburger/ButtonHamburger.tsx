import React, { useCallback, useMemo, useState } from "react"
import { DefaultProps } from "@/shared/types/helpers"
import styles from './ButtonHamburger.module.scss'

export type ButtonHamburgerProps = DefaultProps & {
    onPress: () => void
}

export const ButtonHamburger = React.memo<ButtonHamburgerProps>(({ className, onPress }) => {
    const [value, setValue] = useState(false)

    const classes = useMemo(() => [
        styles['button-hamburger'],
        ...(value ? [
            styles['is-active']
        ] : []),
        className
    ].join(' '), [value, className])

    const onClick = useCallback(() => {
        setValue(prevState => !prevState)
        onPress()
    }, [setValue, onPress])

    return <button aria-label="Меню" className={classes} onClick={onClick}>
        <span />
        <span />
        <span />
    </button>
})