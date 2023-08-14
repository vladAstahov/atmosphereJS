import React from "react";
import { DefaultProps } from "@/shared/types/helpers";
import styles from './Divider.module.scss'

export const Divider = React.memo<DefaultProps>(
    ({ className }) => <div className={`${styles.divider} ${className}`} />
)