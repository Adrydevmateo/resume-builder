import { create } from 'zustand'
import { Certification, Education, Experience, Interest, Skill } from './Builder.type'
import { FormEvent } from 'react'
import { GetFormData } from './Builder'

interface BuilderState {
	//#region Experiences
	experiences: Array<Experience>,
	AddExperience: () => void,
	AddAchievementToExperience: (experience_id: string, experiences: Array<Experience>) => void,
	//#endregion Experiences

	//#region Education
	education: Array<Education>,
	AddEducation: () => void,
	AddAchievementToEducation: (education_id: string, education: Array<Education>) => void,
	//#endregion Education

	//#region Certifications
	certifications: Array<Certification>,
	AddCertification: () => void,
	//#endregion Certifications

	//#region Interests
	interests: Array<Interest>,
	AddInterest: () => void,
	//#endregion Interests

	//#region Skills
	skills: Array<Skill>,
	AddSkill: () => void,
	SaveSkills: (e: FormEvent) => void
	//#endregion Skills

}

const BuilderStore = create<BuilderState>((set) => ({
	//#region Experiences
	experiences: [],
	AddExperience: () => set((state) => ({
		experiences: [...state.experiences,
		{
			ID: crypto.randomUUID(),
			title: 'Web Developer',
			employer: 'Google',
			start_date: new Date(),
			end_date: new Date(),
			achievements: [
				{
					ID: crypto.randomUUID(),
					value: 'Work'
				}
			],
			save(e: FormEvent) {
				e.preventDefault()
				const form = e.target as HTMLFormElement
				const data = GetFormData(form)
				console.log('Data: ', data)
			},
		}
		]
	})),
	AddAchievementToExperience: (experience_id, experiences) => {
		const new_experiences = experiences.map(e => {
			if (e.ID === experience_id) {
				e.achievements.push({
					ID: crypto.randomUUID(),
					value: 'Work'
				})
			}
			return e
		})

		set(() => ({ experiences: new_experiences }))
	},
	//#endregion Experiences

	//#region Education
	education: [],
	AddEducation: () => set((state) => ({
		education: [...state.education, {
			ID: crypto.randomUUID(),
			title: 'New Education',
			start_date: new Date(),
			end_date: new Date(),
			achievements: [],
			save(e: FormEvent) {
				e.preventDefault()
				const form = e.target as HTMLFormElement
				const data = GetFormData(form)
				console.log('Data: ', data)
			},
		}]
	})),
	AddAchievementToEducation(education_id, education) {
		const new_education = education.map(e => {
			if (e.ID === education_id) {
				e.achievements.push({
					ID: crypto.randomUUID(),
					value: 'Education'
				})
			}
			return e
		})

		set(() => ({ education: new_education }))
	},
	//#endregion Education

	//#region Certifications
	certifications: [],
	AddCertification: () => set((state) => ({
		certifications: [...state.certifications, {
			ID: crypto.randomUUID(),
			title: 'New Certification',
			start_date: new Date(),
			end_date: new Date(),
			save(e: FormEvent) {
				e.preventDefault()
				const form = e.target as HTMLFormElement
				const data = GetFormData(form)
				console.log('Data: ', data)
			},
		}]
	})),
	//#endregion Certifications

	//#region Interests
	interests: [],
	AddInterest: () => set((state) => ({
		interests: [...state.interests, {
			ID: crypto.randomUUID(),
			value: 'New Interest',
			save(e: FormEvent) {
				e.preventDefault()
				const form = e.target as HTMLFormElement
				const data = GetFormData(form)
				console.log('Data: ', data)
			},
		}]
	})),
	//#endregion Interests

	//#region Skills,
	skills: [],
	AddSkill: () => set((state) => ({
		skills: [...state.skills, {
			ID: crypto.randomUUID(),
			value: 'New Skill',
			edited: false
		}]
	})),
	SaveSkills(e) {
		e.preventDefault()
		const form = e.target as HTMLFormElement
		const data = GetFormData(form)
		console.log('Data: ', data)
	},
	//#endregion Skills

}))

export default BuilderStore