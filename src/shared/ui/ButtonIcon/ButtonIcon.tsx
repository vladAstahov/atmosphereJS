import React, { useMemo } from "react"
import { DefaultProps, IconName } from "../../types/helpers"
import { IconBase } from "../IconBase/IconBase"
import styles from './ButtonIcon.module.scss'

export type ButtonIconProps = {
    icon: IconName
    onPress: () => void
} & DefaultProps

export const ButtonIcon = React.memo<ButtonIconProps>(({ icon, onPress, className }) => {
    const classes = useMemo(() => [
        styles['button-icon'],
        className
    ].join(' '), [className])

    return <button className={classes} onClick={onPress} >
        <IconBase className={styles.icon} name={icon} />
    </button>
})