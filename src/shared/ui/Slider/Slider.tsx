import React, { useCallback, useMemo } from "react";
import { useState } from "react";
import { DefaultProps } from "../../types/helpers";
import { ButtonIcon } from "@/shared/ui/ButtonIcon";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDevice } from "@/shared/lib/utils/default";
import styles from './Slider.module.scss'

export type SliderProps = DefaultProps & {
    data: string[]
    text?: string[]
}

export const Slider = React.memo<SliderProps>(({ data, text, className }) => {
    const intialStep = text ? 0 : 1
    const [active, setActive] = useState(intialStep)
    const { device } = useDevice()

    const getItemStyles = useCallback((index: number) => {
        const classes = [
            styles.item
        ]
        if (index + 1 === active) {
            classes.push(styles['is-active'])
        }
        if (index === 0 && active === 0 && text && device.desktop) {
            classes.push(styles['is-active'])
        }

        return classes.join(' ')
    }, [active, text, device.desktop])

    const cardStyles = useMemo(() => {
        const classes = [
            styles.card
        ]
        if (active === 0) {
            classes.push(styles['is-active'])
        }

        return classes.join(' ')
    }, [active])

    const onNext = useCallback(() => {
        if (active !== data.length) {
            setActive(prevState => prevState + 1)
        } else {
            setActive(1)
        }
    }, [active, data])

    const onPrev = useCallback(() => {
        if (active !== intialStep) {
            setActive(prevState => prevState - 1)
        } else {
            setActive(data.length)
        }
    }, [active, data])

    return <div className={`${styles.slider} ${className}`}>
        <ButtonIcon
            className={`${styles.button} ${styles['button--prev']}`}
            icon="chevron-left"
            onPress={onPrev}
        />
        {text && (
            <>
                <div className={cardStyles}>
                    {text.map((item, key) => (
                        <>
                            <p key={key}>{item}</p>
                            <br />
                        </>
                    ))}
                </div>
            </>
        )}
        <div className={styles.overlay} />
        {data.map((source, index) => (
            <LazyLoadImage key={index} src={source} className={getItemStyles(index)} />
        ))}
        <ButtonIcon
            className={`${styles.button} ${styles['button--next']}`}
            icon="chevron-right"
            onPress={onNext}
        />
    </div>
})