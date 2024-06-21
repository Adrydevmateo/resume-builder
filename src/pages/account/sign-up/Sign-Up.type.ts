import { TLanguage } from "../../../language/Language.type";

type UserAttribute = {
 label: Record<TLanguage, string>,
 placeholder: Record<TLanguage, string>,
 error_msg: Record<TLanguage, string>
}

export interface SignUpForm {
 title: Record<TLanguage, string>
 username: UserAttribute,
 password: UserAttribute,
 email: UserAttribute,
 confirm_password: UserAttribute,
 submit: Record<TLanguage, string>,
 links: {
  sign_in: Record<TLanguage, string>,
  forgot_password: Record<TLanguage, string>,
 }
}