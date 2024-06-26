import { TLanguage } from "../../../language/Language.type";

type UserAttribute = {
 label: Record<TLanguage, string>,
 placeholder: Record<TLanguage, string>,
 error_msg: Record<TLanguage, string>
}

export interface SignInForm {
 title: Record<TLanguage, string>
 username: UserAttribute,
 password: UserAttribute,
 submit: Record<TLanguage, string>,
 links: {
  sign_up: Record<TLanguage, string>,
  forgot_password: Record<TLanguage, string>,
 }
}