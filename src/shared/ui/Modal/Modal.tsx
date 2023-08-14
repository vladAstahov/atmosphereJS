"use client";

import React, { useState, useEffect } from "react"
import { useScrollDisable } from "@/shared/lib/utils/default/useScollDisable"
import { DefaultProps } from "@/shared/types/helpers"
import { ButtonIcon } from "@/shared/ui/ButtonIcon"
import styles from './Modal.module.scss'

export type ModalProps = React.PropsWithChildren & DefaultProps & {
    title: string
    isVisible: boolean,
    onClose: () => void,
    onOpened?: () => void
}

// @ts-ignore
let timeout

export const Modal = React.memo<ModalProps>(({ title, isVisible, onClose, children, className, onOpened }) => {
    const [isAnimation, setIsAnimation] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const { blockScroll, allowScroll } = useScrollDisable()
    useEffect(() => {
        if (isVisible) {
            setIsShow(true)
            onOpened?.()
            blockScroll()
            timeout = setTimeout(() => {
                setIsAnimation(true)
            }, 100)
        } else {
            setIsAnimation(false)
            allowScroll()
            timeout = setTimeout(() => {
                setIsShow(false)
            }, 300)
        }

        return () => {
            // @ts-ignore
            clearTimeout(timeout)
        }
    }, [isVisible])

    useEffect(() => {
        if (isShow) {
            onOpened?.()
        }
    }, [isShow])

    return <div>
        {isShow && (
            <div
                className={`${styles.modal} ${isAnimation && styles['is-active']} ${className}`}>
                <div
                    className={`${styles.wrapper} ${isAnimation && styles['is-active-wrapper']}`}>
                    <p className={styles.title}>{title}</p>
                    <ButtonIcon className={styles.button} icon="close" onPress={onClose} />
                    <div className={styles.children}>
                        {children}
                    </div>
                </div>
            </div>
        )}
    </div>
})