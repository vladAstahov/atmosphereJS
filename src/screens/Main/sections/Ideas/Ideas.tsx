import React from "react"
import { SectionLayout } from "@/shared/ui"
import styles from './Ideas.module.scss'

export const Ideas = () => {
    return <SectionLayout id="ideas" className={styles.ideas}>
        <span className={styles.decoration}>Идея</span>
        <h2 className={styles.title}>Идея глэмпинг-отеля Атмосфера родилась из трех важных для нас вещей:</h2>
        <div className={styles.circles}>
            <div className={styles.circle}>
                <p>Потребность <br /> быть ближе <br /> к первозданной <br /> природе</p>
            </div>
            <div className={styles.circle}>
                <p>Желание <br /> создать красивое <br /> и уютное любование <br /> прекрасными видами <br /> на озеро</p>
            </div>
            <div className={styles.circle}>
                <p>Необходимость быть <br /> чаще в месте силы <br /> для своего развития, <br /> а так же поделиться <br /> с единомышленниками</p>
            </div>
        </div>
    </SectionLayout>
}