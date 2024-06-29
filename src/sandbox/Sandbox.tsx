import { FormEvent, useState } from 'react'
import './Sandbox.style.css'

enum ExperienceFromData {
	ID = 'experience_id',
	NAME = 'experience_name',
	EMPLOYER = 'experience_employer'
}

enum Storage {
	EXPERIENCES = 'resume-experiences'
}

type Experience = {
	experience_id: string,
	experience_name: string,
	experience_employer: string,
}

export default function Sandbox() {

	const [experiences, setExperiences] = useState<Array<Experience>>([{
		experience_id: crypto.randomUUID(),
		experience_name: '',
		experience_employer: ''
	}])

	const UpdateExperience = (property: ExperienceFromData, experience_id: string, new_value: string) => {
		const new_experiences = experiences.map((e) => {
			if (e.experience_id === experience_id) {
				e[property] = new_value
			}
			return e
		})

		setExperiences(new_experiences)
	}

	const GetExperiencesFromData = (form: HTMLFormElement) => {
		const form_data = new FormData(form)

		const experience_id = String(form_data.get(ExperienceFromData.ID))
		const experience_name = String(form_data.get(ExperienceFromData.NAME))
		const experience_employer = String(form_data.get(ExperienceFromData.EMPLOYER))

		return {
			experience_id,
			experience_name,
			experience_employer
		}
	}

	const GetExperiencesFromStorage = () => {
		let experiences: Array<Experience> = localStorage[Storage.EXPERIENCES] ?? []
		if (typeof experiences !== 'object') experiences = JSON.parse(experiences)
		return experiences
	}

	const SaveExperience = (experience: Experience) => {
		if (!experience.experience_id) return
		const experiences = GetExperiencesFromStorage()

		const experience_found = experiences.find((f) => f.experience_id === experience.experience_id)
		if (!experience_found) {
			experiences.push(experience)
		} else {
			const index_of_experience = experiences.indexOf(experience_found)
			experiences.splice(index_of_experience, 1, experience)
		}

		localStorage[Storage.EXPERIENCES] = JSON.stringify(experiences)
	}

	const HandleSubmit = (e: FormEvent) => {
		e.preventDefault()
		const form = e.target as HTMLFormElement

		const data = GetExperiencesFromData(form)
		console.log('Data: ', data)

		SaveExperience(data)

	}

	return (
		<div id="sandbox-page">
			<h1>Sandbox</h1>

			{
				experiences.map((e) => (
					<form onSubmit={HandleSubmit} key={e.experience_id}>
						<input type="hidden" name={ExperienceFromData.ID} value={e.experience_id} />

						<input type="text" name={ExperienceFromData.NAME} id="experience_name" value={e.experience_name} onChange={({ target }) => UpdateExperience(ExperienceFromData.NAME, e.experience_id, target.value)} />

						<input type="text" name={ExperienceFromData.EMPLOYER} id="experience_employer" value={e.experience_employer} onChange={({ target }) => UpdateExperience(ExperienceFromData.EMPLOYER, e.experience_id, target.value)} />

						<button type="submit">Save</button>
					</form>
				))
			}
		</div>
	)
}