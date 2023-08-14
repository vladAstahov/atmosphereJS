import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useDevice } from "@/shared/lib/utils/default"
import { SectionLayout } from "@/shared/ui"
import styles from './Reviews.module.scss'

export const Reviews = () => {
    const { device } = useDevice()

    return <SectionLayout className={styles.reviews} isWide={device.mobile}>
        <div className={styles.container}>
            <h2 className={styles.title}>Отзывы</h2>
            <LazyLoadImage className={styles.image} src="images/reviews/decoration.png" />
            <div className={styles.api}>
                <iframe className={styles.iframe} src="https://yandex.ru/maps-reviews-widget/115034443271?comments"></iframe>
                <a href="https://yandex.ru/maps/org/atmosfera/115034443271/" target="_blank" className={styles.link}>Атмосфера на карте Удмуртской Республики — Яндекс Карты</a>
            </div>
        </div>
    </SectionLayout>
}