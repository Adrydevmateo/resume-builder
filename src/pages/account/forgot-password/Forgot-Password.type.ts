import { TLanguage } from "../../../language/Language.type";

type UserAttribute = {
 label: Record<TLanguage, string>,
 placeholder: Record<TLanguage, string>,
 error_msg: Record<TLanguage, string>
}

export interface ForgotPasswordForm {
 title: Record<TLanguage, string>
 email: UserAttribute,
 submit: Record<TLanguage, string>,
 links: {
  sign_in: Record<TLanguage, string>,
  sign_up: Record<TLanguage, string>
 }
}