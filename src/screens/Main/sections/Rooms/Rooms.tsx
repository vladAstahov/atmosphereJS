import React, { useCallback, useMemo, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { RoomModal } from '@/entities/room';
import { useDevice } from '@/shared/lib/utils/default';
import { SectionLayout, Slider } from "@/shared/ui"
import styles from './Rooms.module.scss'

const mocks = [
    'images/main/image.png',
    'images/ideas/1.png',
    'images/ideas/2.png'
]
const textMocks = [
    'Cоздавая глэмпинг Атмосфера, мы хотели сделать отдых максимально теплым, мягким, нежным, добрым. Много было эскизов, дизайн-проектов, споров, переживаний, выездов на место… И стоя в одном, как выяснилось позже, удивительном месте, в рощице из нескольких берез, пришло понимание и концепция.',
    'Мы не станем здесь описывать это место, интересно получить ответ от вас, наших добрых гостей и почти друзей, где оно находится. Почему почти, потому что Вы только читаете и еще не приехали к нам, а тут то мы точно подружимся!'
]

const data: Record<string, {
    images: string[],
    text: string[]
}> = {
    '0': {
        images: [],
        text: []
    },
    '1': {
        images: Array(73).fill().map((_, index) => `images/mars/${index + 1}.jpg`),
        text: textMocks
    },
    '2': {
        images: Array(70).fill().map((_, index) => `images/jupiter/${index + 1}.jpg`),
        text: textMocks
    },
    '3': {
        images: Array(57).fill().map((_, index) => `images/saturn/${index + 1}.jpg`),
        text: textMocks
    }
}

const titles: Record<string, string> = {
    '0': '',
    '1': "Марс",
    '2': "Сатурн",
    '3': "Юпитер",
}

export default function Rooms () {
    const [active, setActive] = useState(0)
    const hasActive = useMemo(() => active !== 0, [active])
    const [isVisible, setIsVisible] = useState(false)
    const { device } = useDevice()

    console.log(styles)

    const getItemClasses = useCallback((id: number) => {
        const classes = [
            styles.item,
        ]

        if (id === active) {
            classes.push(styles['is-active'])
        }
        if (id !== active && hasActive) {
            classes.push(styles['un-active'])
        }

        return classes.join(' ')
    }, [active, hasActive])

    const getSliderClasses = useCallback((id: number) => {
        const classes = [
            styles.slider
        ]

        if (id === active) {
            classes.push(styles['slider-is-active'])
        }

        return classes.join(' ')
    }, [active])

    const onPress = useCallback((id: number) => {
        setActive(id)
        if (device.mobile) {
            setIsVisible(true)
        }
    }, [device.mobile])

    return <SectionLayout id='rooms' className={styles.rooms} isWide={device.mobile}>
        <span className={styles.decoration}>Номера</span>
        <h2 className={styles.title}>Выберете свой лучший отдых</h2>
        {device.mobile && (
            <p className={styles.description}>Нажмите на карточку, <br /> чтобы посмотреть больше фото</p>
        )}
        <div className={styles.wrapper}>
            <div className={getItemClasses(1)} onClick={() => onPress(1)}>
                <LazyLoadImage src={mocks[0]} className={styles.preview} />
                {device.desktop && (
                    <Slider className={getSliderClasses(1)} data={data['1'].images} text={data['1'].text} />
                )}
                <h4 className={styles.name}>Марс</h4>
                <div className={styles.overlay} />
            </div>
            <div className={getItemClasses(2)} onClick={() => onPress(2)}>
                <LazyLoadImage src={mocks[0]} className={styles.preview} />
                {device.desktop && (
                    <Slider className={getSliderClasses(2)} data={data['2'].images} text={data['2'].text} />
                )}
                <h4 className={styles.name}>Сатурн</h4>
                <div className={styles.overlay} />
            </div>
            <div className={getItemClasses(3)} onClick={() => onPress(3)}>
                <LazyLoadImage src={mocks[0]} className={styles.preview} />
                {device.desktop && (
                    <Slider className={getSliderClasses(3)} data={data['3'].images} text={data['3'].text} />
                )}
                <h4 className={styles.name}>Юпитер</h4>
                <div className={styles.overlay} />
            </div>
        </div>
        <RoomModal
            images={data[active].images ?? []}
            text={data[active].text ?? []}
            title={titles[active]}
            isVisible={isVisible}
            onClose={() => setIsVisible(false)}
        />
    </SectionLayout>
}