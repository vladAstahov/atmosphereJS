import React from "react"
import { IconName } from "@/shared/types/helpers"
import { IconBase, SectionLayout } from "@/shared/ui"
import styles from './Benefits.module.scss'

const data: {
    title: string,
    icon: IconName
}[] = [
        {
            title: 'title',
            icon: 'placeholder'
        },
        {
            title: 'title 2',
            icon: 'placeholder'
        },
        {
            title: 'title',
            icon: 'placeholder'
        },
        {
            title: 'title 2',
            icon: 'placeholder'
        },
        {
            title: 'title',
            icon: 'placeholder'
        },
        {
            title: 'title 2',
            icon: 'placeholder'
        },
        {
            title: 'title',
            icon: 'placeholder'
        },
        {
            title: 'title 2',
            icon: 'placeholder'
        },
        {
            title: 'title',
            icon: 'placeholder'
        },
        {
            title: 'title 2',
            icon: 'placeholder'
        },
        {
            title: 'title 2',
            icon: 'placeholder'
        },
        {
            title: 'title',
            icon: 'placeholder'
        },
        {
            title: 'title 2',
            icon: 'placeholder'
        },
        {
            title: 'title',
            icon: 'placeholder'
        },
        {
            title: 'title 2',
            icon: 'placeholder'
        },
    ]

export const Benefits = () => {
    return <SectionLayout className={styles.benefits}>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {data.map((element, key) => (
                    <div className={styles.card} key={key}>
                        <IconBase className={styles.icon} name={element.icon} />
                        <p className={styles.text}>{element.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </SectionLayout>
}