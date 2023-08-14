import React, { useState } from "react";
import { DefaultProps } from "@/shared/types/helpers";
import { Button, ButtonHamburger, Divider, InfoRow } from "@/shared/ui";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDevice } from "@/shared/lib/utils/default";
import styles from './Header.module.scss'

export const Header = React.memo<DefaultProps>(({ className }) => {
    const [isMenu, setIsMenu] = useState(false)
    const { device } = useDevice()

    return <header className={`${styles.header}`}>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Button
                    view="secondary"
                    ariaLabel="Аренда"
                    size="medium"
                    onPress={() => { }}>
                    Аренда
                </Button>
                <LazyLoadImage className={styles.image} src="images/logo.svg" alt="logo" />
                <ButtonHamburger onPress={() => setIsMenu(prevState => !prevState)} />
            </div>
            <div className={`${styles.menu} ${isMenu && styles['is-menu']}`}>
                <a className={styles.link} onClick={() => { }}>О глэмпинге</a>
                <a className={styles.link} onClick={() => { }}>Домики</a>
                <a className={styles.link} onClick={() => { }}>Подарочный сертификат</a>
                <a className={styles.link} onClick={() => { }}>Отзывы</a>
                <a className={styles.link} onClick={() => { }}>Контакты</a>
                {device.mobile && (
                    <>
                        <Divider className={styles.divider} />
                        <InfoRow className={styles.info} icon="placeholder" text="+7 (926) 010-28-82" />
                        <InfoRow className={styles.info} icon="placeholder" text="hotel-atmosphere@yandex.ru" />
                        <InfoRow className={styles.info} icon="placeholder" text="Лазурная ул., 1, д. Приозёрная" />
                        <InfoRow className={styles.info} icon="placeholder" text="Круглосуточно" />
                    </>
                )}
            </div>
        </div>
    </header>
})