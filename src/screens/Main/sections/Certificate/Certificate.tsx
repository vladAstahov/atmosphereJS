import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { IconBase, SectionLayout } from "@/shared/ui"
import styles from './Certificate.module.scss'

export const Certificate = () => {
    return <SectionLayout className={styles.certificate}>
        <div className={styles.container}>
            <span className={styles.decoration}>Сертификаты</span>
            <h2 className={styles.title}>Лучший подарок - качественный отдых</h2>
            <div className={styles.wrapper}>
                <div>
                    <h3 className={styles.subtitle}>Кому можно подарить сертификат?</h3>
                    <div className={styles.card}>
                        <IconBase className={styles.icon} name="placeholder" />
                        <p className={styles.info}>Молодоженам. Это будет поистине прекрасный подарок, единение с природой,единение двух любящих сердец на лоне великолепных видов.</p>
                    </div>
                    <div className={styles.card}>
                        <IconBase className={styles.icon} name="placeholder" />
                        <p className={styles.info}>На день рождения друзьям, родственникам, коллегам по работе, учителю Вашего ребенка.</p>
                    </div>
                    <p className={styles.text}>Это только намеки, а в действительности, подарки любят все и ощутить заботу будет приятнокаждому. А получить особенный подарок, могут похвастаться только те, чьи близкие оченьвнимательны!Но мы тоже не оставим без внимания, по сертификату, Ваши близкие получат подарок и от нас.</p>
                </div>
                <LazyLoadImage className={styles.image} src="images/certificate/decoration.svg" />
            </div>
        </div>
    </SectionLayout>
}