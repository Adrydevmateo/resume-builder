import { FormEvent } from "react"
import { TLanguage } from "../../language/Language.type"
import LanguageStore from "../../language/Language.store"
import { IFields, TField, TLink } from "./Form.type"
import { Link } from "react-router-dom"

const translations: Record<string, Record<TLanguage, string>> = {
 required_field_msg: {
  en: 'This field is required',
  es: 'Este campo es requerido'
 }
}

interface Props {
 fields: IFields<TField>,
 submit: {
  label: string,
  func: (data: any) => void
 },
 links?: Array<TLink>
}

export default function Form({ fields, submit, links }: Props) {

 const { language } = LanguageStore()

 const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const form = e.target as HTMLFormElement

  const formData = new FormData(form)
  const fields = formData.entries()

  const data: Record<string, string> = {}

  for (const field of fields) {
   data[field[0]] = field[1].toString()
  }

  submit.func(data)
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
      <Link key={index} to={link.to}>{link.label}</Link>
     ))
    }
   </div>

   <button type="submit">{submit.label}</button>
  </form>
 )
}