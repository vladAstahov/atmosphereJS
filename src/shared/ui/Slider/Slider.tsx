import React, { useCallback, useMemo } from "react";
import { useState } from "react";
import { DefaultProps } from "../../types/helpers";
import { ButtonIcon } from "@/shared/ui/ButtonIcon";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDevice } from "@/shared/lib/utils/default";
import styles from './Slider.module.scss'

const maxImageCount = {
    '1': 20,
    '2': 15,
    '3': 20
}

export type SliderProps = DefaultProps & {
    id: 1 | 2 | 3
    // data: string[]
    text?: string[]
}

export const Slider = React.memo<SliderProps>(({ text, className, id }) => {
    const intialStep = text ? 0 : 1
    const [active, setActive] = useState(intialStep)
    const [count, setCount] = useState(5)
    const { device } = useDevice()

    const images = useMemo(() => {
        let currentCount = count
        let folder: string
        switch (id) {
            case 1:
                folder = 'mars'
                break
            case 2:
                folder = 'jupiter'
                break
            case 3:
                folder = 'saturn'
                break
        }

        if (active % 2 === 0) {
            if (maxImageCount[id] > currentCount + 3) {
                setCount(prevState => prevState + 3)
                currentCount += 3
            } else {
                setCount(maxImageCount[id])
                currentCount = maxImageCount[id]
            }
        }

        return Array(currentCount).fill('').map((_, index) => `images/${folder}/${index + 1}.jpg`)
    }, [active, id])

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
        if (active !== maxImageCount[id]) {
            setActive(prevState => prevState + 1)
        } else {
            setActive(1)
        }
    }, [active, id])

    const onPrev = useCallback(() => {
        if (active !== intialStep) {
            setActive(prevState => prevState - 1)
        } else {
            setActive(maxImageCount[id])
        }
    }, [active, id])

    return <div className={`${styles.slider} ${className}`}>
        <ButtonIcon
            className={`${styles.button} ${styles['button--prev']}`}
            icon="arrow-left"
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
        {images.map((source, index) => (
            <LazyLoadImage key={index} src={source} className={getItemStyles(index)} />
        ))}
        <ButtonIcon
            className={`${styles.button} ${styles['button--next']}`}
            icon="arrow-right"
            onPress={onNext}
        />
    </div>
})