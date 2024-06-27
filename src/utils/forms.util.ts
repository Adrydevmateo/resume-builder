export const GetFormData = (form: HTMLFormElement) => {
	type SubmitData = Record<string, FormDataEntryValue>

	const form_data = new FormData(form)
	const entries = form_data.entries()

	const data: SubmitData = {}

	for (const entry of entries) {
		data[entry[0]] = entry[1]
	}

	return data
}