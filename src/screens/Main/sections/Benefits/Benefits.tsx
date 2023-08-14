import React from "react"
import { IconName } from "@/shared/types/helpers"
import { IconBase, SectionLayout } from "@/shared/ui"
import styles from './Benefits.module.scss'

const data: {
    title: string,
    icon: IconName
}[] = [
        {
            title: 'Панорамный вид на озеро',
            icon: 'benefit-1'
        },
        {
            title: 'Cвоя терраса с шезлонгами',
            icon: 'benefit-2'
        },
        {
            title: 'Туалет в номере',
            icon: 'benefit-3'
        },
        {
            title: 'Душевая кабина в номере',
            icon: 'benefit-4'
        },
        {
            title: 'Умывальник в номере',
            icon: 'benefit-5'
        },
        {
            title: 'Средства личной гигиены',
            icon: 'benefit-6'
        },
        {
            title: 'Полотенца и фен',
            icon: 'benefit-7'
        },
        {
            title: 'Полноценная кухня',
            icon: 'benefit-8'
        },
        {
            title: 'Теплый пол',
            icon: 'benefit-9'
        },
        {
            title: 'Кондиционер',
            icon: 'benefit-10'
        },
        {
            title: 'Кухонные принадлежности',
            icon: 'benefit-11'
        },
        {
            title: '5,5 Га лесного пространства',
            icon: 'benefit-12'
        },
        {
            title: 'Свой мангал у сферы + шампуры',
            icon: 'benefit-13'
        },
        {
            title: 'Подготовленные дрова для мангала',
            icon: 'benefit-14'
        },
        {
            title: 'Парковка на территории',
            icon: 'benefit-15'
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