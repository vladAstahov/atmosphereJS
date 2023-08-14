import React, { useMemo } from "react";
import { DefaultProps } from "@/shared/types/helpers";
import styles from './SectionLayout.module.scss'

export type SectionLayoutProps = DefaultProps & React.PropsWithChildren & {
    id?: string
    isWide?: boolean
    containerClassname?: string
}

export const SectionLayout = React.memo<SectionLayoutProps>(({ className, children, isWide, containerClassname, id }) => {
    const classes = useMemo(() => [
        styles.container,
        ...(isWide ? [styles['is-wide']] : []),
        containerClassname,
    ].join(' '), [className, isWide])

    return <section id={id} className={className}>
        <div className={classes}>
            {children}
        </div>
    </section>
})