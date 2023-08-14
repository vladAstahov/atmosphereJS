import React, { useMemo } from "react";
import { DefaultProps, IconName } from "../../types/helpers";
import styles from './IconBase.module.scss'

export type IconBaseProps = {
    name: IconName
} & DefaultProps

export const IconBase = React.memo<IconBaseProps>(({ name, className }) => {
    const classes = useMemo(() => [
        styles['icon-base'],
        styles[`icon-base--${name}`],
        className
    ].join(' '), [name, className])

    return <i className={classes}></i>
})