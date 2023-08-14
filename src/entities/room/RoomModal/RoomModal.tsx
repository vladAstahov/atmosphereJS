import React from "react";
import { DefaultProps } from "@/shared/types/helpers";
import { Modal, ModalProps, Slider } from "@/shared/ui";
import styles from './RoomModal.module.scss'

export type RoomModalProps = DefaultProps & ModalProps & {
    images: string[]
    text: string[]
}

export const RoomModal = React.memo<RoomModalProps>(({ images, text, ...props }) => {
    return <Modal {...props}>
        <div className={styles.wrapper}>
            <Slider data={images} />
        </div>
        <div className={styles.card}>
            {text.map((element) => (
                <>
                    <p>{element}</p>
                    <br />
                </>
            ))}
        </div>
    </Modal>
})