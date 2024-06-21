import Form from "../../../components/form/Form";
import { IFields } from "../../../components/form/Form.type";
import LanguageStore from "../../../language/Language.store";
import { ForgotPasswordTranslations } from "./Forgot-Password.translation";

export default function ForgotPassword() {

 const { language } = LanguageStore()

 return (
  <div id="sign-in-page">
   <h1>{ForgotPasswordTranslations.title[language]}</h1>
   <Form
    fields={{
     email: {
      label: ForgotPasswordTranslations.email.label[language],
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"></path></svg>,
      visible: true
     },
    }}
    submit={{
     label: ForgotPasswordTranslations.submit[language],
     func(data: IFields<string>) {
      console.log(data);
     }
    }}
    links={[
     { label: ForgotPasswordTranslations.links.sign_in[language], to: '/sign-in' },
     { label: ForgotPasswordTranslations.links.sign_up[language], to: '/sign-up' }
    ]}
   />
  </div>
 )
}