import { ReactElement } from "react"

export type TField = {
 label: string,
 placeholder?: string,
 icon: ReactElement,
 visible: boolean,
 required?: boolean
}

export interface IFields<T> {
 username?: T,
 email?: T,
 password?: T,
 confirm_password?: T
}

export type TLink = {
 label: string,
 to: string,
}