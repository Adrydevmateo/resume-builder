import { FormEvent, useState } from "react"

type Achievement = {
	ID: string,
	value: string
}

type Experience = {
	ID: string,
	title: string,
	employer: string,
	start_date: Date,
	end_date: Date,
	achievements: Array<Achievement>,
	save: (e: FormEvent) => void
}

type Education = {
	ID: string,
	title: string,
	start_date: Date,
	end_date: Date,
	achievements: Array<Achievement>,
	save: (e: FormEvent) => void
}

type Certification = {
	ID: string,
	title: string,
	start_date: Date,
	end_date: Date,
	save: (e: FormEvent) => void
}

export default function Builder() {
	// Utils
	const GetFormData = (form: HTMLFormElement) => {
		type SubmitData = Record<string, FormDataEntryValue>

		const form_data = new FormData(form)
		const entries = form_data.entries()

		const data: SubmitData = {}

		for (const entry of entries) {
			data[entry[0]] = entry[1]
		}

		return data
	}

	//#region Introduction
	const SaveIntroduction = (e: FormEvent) => {
		e.preventDefault()
		const form = e.target as HTMLFormElement
		const data = GetFormData(form)
		console.log('Data: ', data)
	}
	//#endregion Introduction

	//#region Experiences
	const [experiences, setExperiences] = useState<Array<Experience>>([
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
	])

	const AddExperience = () => {
		setExperiences((current) => [...current, {
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
		}])
	}

	const AddAchievementToExperience = (experience_id: string) => {
		const newExperiences = experiences.map(e => {
			if (e.ID === experience_id) {
				e.achievements.push({
					ID: crypto.randomUUID(),
					value: 'Work'
				})
			}
			return e
		})

		setExperiences(newExperiences)
	}
	//#endregion Experiences

	//#region Education
	const [education, setEducation] = useState<Array<Education>>([
		{
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
		}
	])

	const AddEducation = () => {
		setEducation((current) => [...current, {
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
		}
		])
	}

	const AddAchievementToEducation = (education_id: string) => {
		const newEducation = education.map(e => {
			if (e.ID === education_id) {
				e.achievements.push({
					ID: crypto.randomUUID(),
					value: 'Education'
				})
			}
			return e
		})

		setEducation(newEducation)
	}
	//#endregion Education

	//#region Certifications
	const [certifications, setCertifications] = useState<Array<Certification>>([
		{
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
		}
	])

	const AddCertification = () => {
		setCertifications((current) => [...current, {
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
		}])
	}
	//#endregion Certifications

	//#region Interests
	//#endregion Interests

	return (
		<div id="builder-page">
			{/* header */}

			{/* Page Title */}
			<h1>Resume Builder</h1>

			{/* Candidate Introduction */}
			<form hidden id="introduction-form" onSubmit={SaveIntroduction}>
				<h2>Introduction</h2>

				{/* Candidate Name */}
				<div className="form-field">
					<label htmlFor='candidate-name'>Your Name</label>
					<input type="text" name="candidate-name" id='candidate-name' placeholder="Ex: Adry ..." />
				</div>

				{/* Candidate Title */}
				<div className="form-field">
					<label htmlFor='candidate-title'>Your Title</label>
					<input type="text" name="candidate-title" id='candidate-title' placeholder="Ex: Web Developer ..." />
				</div>

				{/* Candidate Introduction */}
				<div className="form-field">
					<label htmlFor='candidate-introduction'>Introduction</label>
					<input type="text" name="candidate-introduction" id='candidate-introduction' placeholder="Ex: I'm a ..." />
				</div>

				<button type="submit">Save</button>
			</form>

			{/* Candidate Experiences */}
			<div hidden id="experience-section">
				<h2>Experience</h2>

				{/* Experience Form */}
				{experiences.map(e => (
					<form className="experience-form" key={e.ID} onSubmit={e.save} >

						{/* Experience Title */}
						<div className="form-field">
							<label htmlFor='experience-title'>Experience Title</label>
							<input type="text" name="experience-title" id='experience-title' placeholder="Ex: Web Developer ..." />
						</div>

						{/* Employer */}
						<div className="form-field">
							<label htmlFor='experience-employer'>Experience Employer</label>
							<input type="text" name="experience-employer" id='experience-employer' placeholder="Ex: Google ..." />
						</div>

						{/* Start Date */}
						<div className="form-field">
							<label htmlFor='experience-start-date'>Start Date</label>
							<input type="date" name="experience-start-date" id='experience-start-date' />
						</div>

						{/* End Date */}
						<div className="form-field">
							<label htmlFor='experience-end-date'>Start Date</label>
							<input type="date" name="experience-end-date" id='experience-end-date' />
						</div>

						{/* List of Achievements */}
						<ul className="experience-achievements">
							{e.achievements.map(a => (
								<div className="form-field" key={a.ID}>
									<input type="text" name={`experience-achievement-${a.ID}`} id={`experience-achievement-${a.ID}`} placeholder="Achievement" />
								</div>
							))}
							<button type="button" onClick={() => AddAchievementToExperience(e.ID)}>+</button>
						</ul>

						<button type="submit">Save</button>
					</form>
				))}

				<button onClick={AddExperience}>+</button>
			</div>

			{/* Candidate Education */}
			<div hidden id="education-section">
				<h2>Education</h2>
				{education.map(e => (
					<form className="education-form" key={e.ID} onSubmit={e.save}>

						{/* Education Title */}
						<div className="form-field">
							<label htmlFor='education-title'>Education Title</label>
							<input type="text" name="education-title" id='education-title' placeholder="Ex: Computer Science ..." />
						</div>

						{/* Education Start Date */}
						<div className="form-field">
							<label htmlFor='education-start-date'>Start Date</label>
							<input type="date" name="education-start-date" id='education-start-date' />
						</div>

						{/* Education End Date */}
						<div className="form-field">
							<label htmlFor='education-end-date'>End Date</label>
							<input type="date" name="education-end-date" id='education-end-date' />
						</div>

						{/* Achievements */}
						<ul className="education-achievements">
							{e.achievements.map(a => (
								<div className="form-field" key={a.ID}>
									<input type="text" name={`education-achievement-${a.ID}`} id={`education-achievement-${a.ID}`} placeholder="Achievement" />
								</div>
							))}
							<button type="button" onClick={() => AddAchievementToEducation(e.ID)}>+</button>
						</ul>

						<button type="submit">Save</button>

					</form>
				))}

				<button onClick={AddEducation}>+</button>
			</div>

			{/* Candidate Certifications */}
			<div id="certifications-section">
				{certifications.map(c => (
					<form className="certification-form" key={c.ID} onSubmit={c.save}>

						{/* Certification Title */}
						<div className='form-field'>
							<label htmlFor='certification-title'>Certification</label>
							<input type='text' name='certification-title' id='certification-title' placeholder='Ex: Web Basics ...' />
						</div>

						{/* Education Start Date */}
						<div className="form-field">
							<label htmlFor='certification-start-date'>Start Date</label>
							<input type="date" name="certification-start-date" id='certification-start-date' />
						</div>

						{/* Education End Date */}
						<div className="form-field">
							<label htmlFor='certification-end-date'>End Date</label>
							<input type="date" name="certification-end-date" id='certification-end-date' />
						</div>

					</form>
				))}

				<button onClick={AddCertification}>+</button>
			</div>

		</div>
	)
}