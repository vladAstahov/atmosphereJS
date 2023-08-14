import React from "react";
import { IconBase, SectionLayout } from "@/shared/ui";
import { useDevice } from "@/shared/lib/utils/default";
import styles from './Contacts.module.scss'

export const Contacts = () => {
    const { device } = useDevice()

    return <SectionLayout id="contacts" className={styles.contacts} isWide={device.desktop}>
        {device.desktop ? (
            <span className={styles.decoration}>Контакты</span>
        ) : (
            <h2 className={styles.title}>Приезжайте <br /> к нам отдыхать</h2>
        )}
        <div className={styles.container}>
            {device.desktop && (
                <div className={styles.circle} />
            )}
            <div className={`${styles.circle} ${styles['circle--map']}`}>
                <div className={styles.map}>
                    <a
                        href="https://yandex.ru/maps/org/atmosfera/82704129935/?utm_medium=mapframe&utm_source=maps"
                        className={`${styles.link} ${styles['link--name']}`}>Атмосфера</a>
                    <a
                        href="https://yandex.ru/maps/10904/novgorod-oblast/category/resort/184106400/?utm_medium=mapframe&utm_source=maps"
                        className={`${styles.link} ${styles['link--description']}`}>База, дом отдыха в Новгородской
                        области</a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/org/atmosfera/82704129935/?ll=33.011308%2C57.520928&z=17"
                        width="560" height="400" frameBorder="1"
                        className={styles.iframe} />
                </div>
            </div>
            <div className={styles.circle}>
                <div>
                    {device.desktop && (
                        <h2 className={styles.title}>Приезжайте <br /> к нам отдыхать</h2>
                    )}
                    <a href='tel:+7 (926) 010-28-82' className={styles.card}>
                        <div className={styles['icon-wrapper']}>
                            <IconBase className={styles.icon} name={'phone'} />
                        </div>
                        <span>+7 (926) 010-28-82</span>
                    </a>
                    <a href='mailto:hotel-atmosphere@yandex.ru' className={styles.card}>
                        <div className={styles['icon-wrapper']}>
                            <IconBase className={styles.icon} name={'mail'} />
                        </div>
                        <span>hotel-atmosphere@yandex.ru</span>
                    </a>
                    <div className={styles.card}>
                        <div className={styles['icon-wrapper']}>
                            <IconBase className={styles.icon} name={'geo'} />
                        </div>
                        <span>Лазурная ул., 1, д. Приозёрная</span>
                    </div>
                    <div className={styles.card}>
                        <div className={styles['icon-wrapper']}>
                            <IconBase className={styles.icon} name={'time'} />
                        </div>
                        <span>Круглосуточно</span>
                    </div>
                </div>
            </div>
            {device.desktop && (
                <div className={styles.circle} />
            )}
        </div>
    </SectionLayout>
}