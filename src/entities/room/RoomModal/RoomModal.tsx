import React from "react";
import { DefaultProps } from "@/shared/types/helpers";
import { Modal, ModalProps, Slider } from "@/shared/ui";
import styles from './RoomModal.module.scss'

export type RoomModalProps = DefaultProps & ModalProps & {
    id: 1 | 2 | 3
    text: string[]
}

export const RoomModal = React.memo<RoomModalProps>(({ id, text, ...props }) => {
    return <Modal {...props}>
        <div className={styles.wrapper}>
            <Slider id={id} />
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