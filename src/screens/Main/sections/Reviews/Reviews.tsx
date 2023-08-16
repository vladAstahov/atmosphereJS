import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useDevice } from "@/shared/lib/utils/default"
import { SectionLayout } from "@/shared/ui"
import styles from './Reviews.module.scss'

export const Reviews = () => {
    const { device } = useDevice()

    return <SectionLayout id="reviews" className={styles.reviews} isWide={device.mobile}>
        <div className={styles.container}>
            <h2 className={styles.title}>Отзывы</h2>
            <LazyLoadImage className={styles.image} src="images/reviews/decoration.png" />
            <div className={styles.api}>
                <iframe className={styles.iframe} src="https://yandex.ru/maps-reviews-widget/82704129935?comments"></iframe>
                <a href="https://yandex.ru/maps/org/atmosfera/82704129935/" target="_blank" className={styles.link}>Атмосфера на карте Новгородской области — Яндекс Карты</a>
            </div>
        </div>
    </SectionLayout>
}