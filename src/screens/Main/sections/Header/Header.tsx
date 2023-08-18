import React, { useEffect, useState } from "react";
import { Button, ButtonHamburger, Divider, InfoRow } from "@/shared/ui";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDevice } from "@/shared/lib/utils/default";
import styles from './Header.module.scss'
import { useScrollDisable } from "@/shared/lib/utils/default/useScollDisable";
import { Link } from "react-scroll";

export const Header = () => {
    const [isMenu, setIsMenu] = useState(false)
    const { device } = useDevice()
    const { blockScroll, allowScroll } = useScrollDisable()

    useEffect(() => {
        if (isMenu) {
            blockScroll()
        } else {
            allowScroll()
        }
    }, [isMenu])

    return <header className={`${styles.header}`}>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Button
                    view="secondary"
                    ariaLabel="Аренда"
                    size="medium"
                    onPress={() => { }}
                    scrollTo="booking"
                >
                    Аренда
                </Button>
                <LazyLoadImage className={styles.image} src="images/logo.svg" alt="logo" />
                <ButtonHamburger onPress={() => setIsMenu(prevState => !prevState)} />
            </div>
            <div className={`${styles.menu} ${isMenu && styles['is-menu']}`}>
                <ScrollToLink
                    to="ideas"
                    className={styles.link}
                    onClick={() => setIsMenu(false)}>
                    О глэмпинге
                </ScrollToLink>
                <ScrollToLink
                    to="rooms"
                    className={styles.link}
                    onClick={() => setIsMenu(false)}>
                    Домики
                </ScrollToLink>
                <ScrollToLink
                    to="certificate"
                    className={styles.link}
                    onClick={() => setIsMenu(false)}>
                    Подарочный сертификат
                </ScrollToLink>
                <ScrollToLink
                    to="reviews"
                    className={styles.link}
                    onClick={() => setIsMenu(false)}>
                    Отзывы
                </ScrollToLink>
                <ScrollToLink
                    to="contacts"
                    className={styles.link}
                    onClick={() => setIsMenu(false)}>
                    Контакты
                </ScrollToLink>
                {device.mobile && (
                    <>
                        <Divider className={styles.divider} />
                        <InfoRow href="tel:+7 (926) 010-28-82" className={styles.info} icon="phone" text="+7 (926) 010-28-82" />
                        <InfoRow href="mailto:hotel-atmosphere@yandex.ru" className={styles.info} icon="mail" text="hotel-atmosphere@yandex.ru" />
                        <InfoRow className={styles.info} icon="geo" text="Лазурная ул., 1, д. Приозёрная" />
                        <InfoRow className={styles.info} icon="time" text="Круглосуточно" />
                    </>
                )}
            </div>
        </div>
    </header>
}

const ScrollToLink = React.memo<{
    to: string,
    className: string,
    onClick: () => void
} & React.PropsWithChildren>(({ to, className, onClick, children }) => (
    <Link
        to={to}
        smooth={true}
        offset={-50}
        duration={300}
        className={className}
        onClick={onClick}>
        {children}
    </Link>
))