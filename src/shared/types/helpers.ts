import { ReactNode } from "react";

export type SizePropsType = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
export type ViewPropsType =
    | 'brand'
    | 'secondary'
    | 'base'
    | 'outline'
    | 'surface'
    | 'flat'
    | 'flat-brand'
    | 'critical'
export type DisabledPropsType = boolean | ''
export type TagPropsType = 'div' | 'a' | 'button' | 'label' | 'strong'
export type DirectionPropsType = 'row' | 'column'

export type Maybe<T> = null | undefined | T
export type IconName =
    | 'family'
    | 'maried'
    | 'benefit-15'
    | 'benefit-14'
    | 'benefit-13'
    | 'benefit-12'
    | 'benefit-11'
    | 'benefit-10'
    | 'benefit-9'
    | 'benefit-8'
    | 'benefit-7'
    | 'benefit-6'
    | 'benefit-5'
    | 'benefit-4'
    | 'benefit-3'
    | 'benefit-2'
    | 'benefit-1'
    | 'time'
    | 'geo'
    | 'mail'
    | 'phone'
    | 'arrow-right'
    | 'arrow-left'
    | 'close'

export type DefaultProps = {
    className?: string
    children?: ReactNode
}