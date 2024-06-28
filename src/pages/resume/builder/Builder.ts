import { GetFormData } from "../../../utils/forms.util"

export const GetIntroductionData = () => {
	const data = localStorage['resume-introduction']
	if (!data) return
	const introduction = JSON.parse(data)
	return introduction
}

export const SaveIntroductionData = (form: HTMLFormElement) => {
	const data = GetFormData(form)
	localStorage['resume-introduction'] = JSON.stringify(data)
}