import React from "react"
import { DefaultProps, IconName } from "@/shared/types/helpers"
import { IconBase } from "@/shared/ui/IconBase"
import styles from './InfoRow.module.scss'

export type InfoRowProps = DefaultProps & {
    icon: IconName,
    text: string,
    href?: string
}

export const InfoRow = React.memo<InfoRowProps>(({ icon, text, className, href }) => {
    return <Wrapper href={href} className={`${styles['info-row']} ${className}`}>
        <div className={styles.wrapper}>
            <IconBase className={styles.icon} name={icon} />
        </div>
        <p className={styles.text}>{text}</p>
    </Wrapper>
})

const Wrapper = React.memo<Pick<InfoRowProps, 'href' | 'className'> & React.PropsWithChildren>(({ href, children, className }) => {
    if (href) {
        return <a className={className} href={href}>
            {children}
        </a>
    }

    return <div className={className}>
        {children}
    </div>
})