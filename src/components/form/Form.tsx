import { FormEvent, ReactElement } from "react"
import { TLanguage } from "../../language/Language.type"
import LanguageStore from "../../language/Language.store"

type TField = {
 label: string,
 placeholder?: string,
 icon: ReactElement,
 visible: boolean,
 required?: boolean
}

type TLink = {
 label: string,
 to: string,
}

interface Props {
 fields: {
  username?: TField,
  email?: TField,
  password?: TField,
  confirm_password?: TField
 },
 submit: {
  label: string,
  func: (name: string) => string
 },
 links?: Array<TLink>
}

const translations: Record<string, Record<TLanguage, string>> = {
 required_field_msg: {
  en: 'This field is required',
  es: 'Este campo es requerido'
 }
}

export default function Form({ fields, submit, links }: Props) {

 const { language } = LanguageStore()

 const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const form = e.target as HTMLFormElement

  const formData = new FormData(form)
  const email = formData.get('email')

  console.log('Form Data: ', email);

  submit.func('Dante')
 }

 return (
  <form className="form-comp" onSubmit={HandleSubmit}>
   {
    fields.username?.visible &&
    <div className={`form-field ${fields.username?.required && 'required'}`}>
     <label htmlFor="username-field">
      {fields.username?.icon}
      <span>{fields.username?.label}</span>
     </label>
     <input type="text" name="username" id="username-field" autoComplete="name" placeholder={fields.username?.placeholder} />
     <p className="invalid-field-msg">{translations.required_field_msg[language]}</p>
    </div>
   }

   {
    fields.email?.visible &&
    <div className={`form-field ${fields.email?.required && 'required'}`}>
     <label htmlFor="email-field">
      {fields.email?.icon}
      <span>{fields.email?.label}</span>
     </label>
     <input type="email" name="email" id="email-field" autoComplete="email" placeholder={fields.email?.placeholder} />
     <p className="invalid-field-msg">{translations.required_field_msg[language]}</p>
    </div>
   }

   {
    fields.password?.visible &&
    <div className={`form-field ${fields.password?.required && 'required'}`}>
     <label htmlFor="password-field">
      {fields.password?.icon}
      <span>{fields.password?.label}</span>
     </label>
     <input type="password" name="password" id="password-field" autoComplete="new-password" placeholder={fields.password?.placeholder} />
     <p className="invalid-field-msg">{translations.required_field_msg[language]}</p>
    </div>
   }

   {
    fields.confirm_password?.visible &&
    <div className={`form-field ${fields.confirm_password?.required && 'required'}`}>
     <label htmlFor="confirm_password-field">
      {fields.confirm_password?.icon}
      <span>{fields.confirm_password?.label}</span>
     </label>
     <input type="password" name="confirm_password" id="confirm_password-field" autoComplete="current-password" placeholder={fields.confirm_password?.placeholder} />
     <p className="invalid-field-msg">{translations.required_field_msg[language]}</p>
    </div>
   }

   <div className="links">
    {
     links &&
     links.length > 0 &&
     links?.map((link, index) => (
      <a href={link.to} key={index}>{link.label}</a>
     ))
    }
   </div>

   <button type="submit">{submit.label}</button>
  </form>
 )
}