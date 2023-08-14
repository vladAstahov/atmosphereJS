import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDevice } from "@/shared/lib/utils/default";
import { SectionLayout } from "@/shared/ui";
import styles from './Main.module.scss'

export const Main = () => {
    const { device } = useDevice()

    return <SectionLayout className={styles.main} isWide={device.mobile}>
        <h1 className={styles.title}>
            <span>Место, где</span> сердце и душа находят <span>свое</span> спокойствие
        </h1>
        <div className={styles.wrapper}>
            <LazyLoadImage className={styles.image} src="/atmosphereJS/images/main/image.png" />
        </div>
    </SectionLayout>
}