import { FormEvent, useState } from "react"

type Achievement = {
	ID: string,
	value: string
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
	type Experience = {
		ID: string,
		title: string,
		employer: string,
		start_date: Date,
		end_date: Date,
		achievements: Array<Achievement>,
		save: (e: FormEvent) => void
	}

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
	type Education = {
		ID: string,
		title: string,
		start_date: Date,
		end_date: Date,
		achievements: Array<Achievement>,
		save: (e: FormEvent) => void
	}

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
	type Certification = {
		ID: string,
		title: string,
		start_date: Date,
		end_date: Date,
		save: (e: FormEvent) => void
	}

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
	type Interest = {
		ID: string,
		value: string,
		save: (e: FormEvent) => void
	}

	const [interests, setInterests] = useState<Array<Interest>>([
		{
			ID: crypto.randomUUID(),
			value: 'New Interest',
			save(e: FormEvent) {
				e.preventDefault()
				const form = e.target as HTMLFormElement
				const data = GetFormData(form)
				console.log('Data: ', data)
			},
		}
	])

	const AddInterest = () => {
		setInterests((current) => [...current, {
			ID: crypto.randomUUID(),
			value: 'New Interest',
			save(e: FormEvent) {
				e.preventDefault()
				const form = e.target as HTMLFormElement
				const data = GetFormData(form)
				console.log('Data: ', data)
			},
		}])
	}
	//#endregion Interests

	//#region Personal Info
	const SavePersonalInfo = (e: FormEvent) => {
		e.preventDefault()
		const form = e.target as HTMLFormElement
		const data = GetFormData(form)
		console.log('Data: ', data)
	}
	//#endregion Personal Info

	//#region Skills
	type Skill = {
		ID: string,
		value: string,
		edited: boolean
	}
	const [skills, setSkills] = useState<Array<Skill>>([])

	const AddSkill = () => {
		setSkills((current) => [...current, {
			ID: crypto.randomUUID(),
			value: 'New Skill',
			edited: false
		}])
	}

	const SaveSkills = (e: FormEvent) => {
		e.preventDefault()
		const form = e.target as HTMLFormElement
		const data = GetFormData(form)
		console.log('Data: ', data)
	}
	//#endregion Skills

	//#region Working Tools
	enum EnumLevel {
		GOOD = 50,
		VERY_GOOD = 80,
		EXCELLENT = 100
	}

	type Tool = {
		ID: string,
		name: string,
		level: EnumLevel
		save: (e: FormEvent) => void
	}
	const [tools, setTools] = useState<Array<Tool>>([])

	const AddTool = () => {
		setTools((current) => [...current, {
			ID: crypto.randomUUID(),
			name: 'New Working Tool',
			level: EnumLevel.GOOD,
			save(e: FormEvent) {
				e.preventDefault()
				const form = e.target as HTMLFormElement
				const data = GetFormData(form)
				console.log('Data: ', data)
			},
		}])
	}
	//#endregion Working Tools

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
							<label htmlFor={`experience-title-${e.ID}`}>Experience Title</label>
							<input type="text" name={`experience-title-${e.ID}`} id={`experience-title-${e.ID}`} placeholder="Ex: Web Developer ..." />
						</div>

						{/* Employer */}
						<div className="form-field">
							<label htmlFor={`experience-employer-${e.ID}`}>Experience Employer</label>
							<input type="text" name={`experience-employer-${e.ID}`} id={`experience-employer-${e.ID}`} placeholder="Ex: Google ..." />
						</div>

						{/* Start Date */}
						<div className="form-field">
							<label htmlFor={`experience-start-date-${e.ID}`}>Start Date</label>
							<input type="date" name={`experience-start-date-${e.ID}`} id={`experience-start-date-${e.ID}`} />
						</div>

						{/* End Date */}
						<div className="form-field">
							<label htmlFor={`experience-end-date-${e.ID}`}>Start Date</label>
							<input type="date" name={`experience-end-date-${e.ID}`} id={`experience-end-date-${e.ID}`} />
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
							<label htmlFor={`education-title-${e.ID}`}>Education Title</label>
							<input type="text" name={`education-title-${e.ID}`} id={`education-title-${e.ID}`} placeholder="Ex: Computer Science ..." />
						</div>

						{/* Education Start Date */}
						<div className="form-field">
							<label htmlFor={`education-start-date-${e.ID}`}>Start Date</label>
							<input type="date" name={`education-start-date-${e.ID}`} id={`education-start-date-${e.ID}`} />
						</div>

						{/* Education End Date */}
						<div className="form-field">
							<label htmlFor={`education-end-date-${e.ID}`}>End Date</label>
							<input type="date" name={`education-end-date-${e.ID}`} id={`education-end-date-${e.ID}`} />
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
			<div hidden id="certifications-section">
				<h2>Certifications</h2>

				{certifications.map(c => (
					<form className="certification-form" key={c.ID} onSubmit={c.save}>

						{/* Certification Title */}
						<div className='form-field'>
							<label htmlFor={`certification-title-${c.ID}`}>Certification</label>
							<input type='text' name={`certification-title-${c.ID}`} id={`certification-title-${c.ID}`} placeholder='Ex: Web Basics ...' />
						</div>

						{/* Education Start Date */}
						<div className="form-field">
							<label htmlFor={`certification-start-date-${c.ID}`}>Start Date</label>
							<input type="date" name={`certification-start-date-${c.ID}`} id={`certification-start-date-${c.ID}`} />
						</div>

						{/* Education End Date */}
						<div className="form-field">
							<label htmlFor={`certification-end-date-${c.ID}`}>End Date</label>
							<input type="date" name={`certification-end-date-${c.ID}`} id={`certification-end-date-${c.ID}`} />
						</div>

					</form>
				))}

				<button onClick={AddCertification}>+</button>
			</div>

			{/* Candidate Interests */}
			<div hidden id="interests-section">
				<h2>Interests</h2>

				{interests.map(i => (
					<form key={i.ID} onSubmit={i.save}>

						{/* Interest */}
						<div className="form-field">
							<input type="text" name={`interest-value-${i.ID}`} id={`interest-value-${i.ID}`} placeholder='Music ...' />
						</div>

					</form>
				))}

				<button onClick={AddInterest}>+</button>
			</div>

			{/* Candidate Personal Info */}
			<form hidden id="personal-info-form" onSubmit={SavePersonalInfo}>
				<h2>Personal Information</h2>

				{/* Address */}
				<div className="form-field">
					<label htmlFor="personal-info-address">Address</label>
					<input type="text" name="personal-info-address" id="personal-info-address" placeholder='Ex: NY City ...' />
				</div>

				{/* Phone */}
				<div className="form-field">
					<label htmlFor="personal-info-phone">Phone</label>
					<input type="text" name="personal-info-phone" id="personal-info-phone" placeholder='Ex: 1 - 347 ...' />
				</div>

				{/* E-mail */}
				<div className="form-field">
					<label htmlFor="personal-info-email">E-mail</label>
					<input type="text" name="personal-info-email" id="personal-info-email" placeholder='Ex: candidate@gmail.com' />
				</div>

				{/* LinkedIn */}
				<div className="form-field">
					<label htmlFor="personal-info-linkedin">LinkedIn</label>
					<input type="text" name="personal-info-linkedin" id="personal-info-linkedin" placeholder='Your linkedin profile link' />
				</div>

				<button type="submit">Save</button>
			</form>

			{/* Candidate Skills */}
			<form hidden id="skills-form" onSubmit={SaveSkills}>
				<h2>Skills</h2>

				{skills.map(s => (
					<div className="form-field" key={s.ID}>
						<input type="text" name={`candidate-skill-${s.ID}`} id={`candidate-skill-${s.ID}`} placeholder='Ex: team management ...' />
					</div>
				))}

				<button type="button" onClick={AddSkill}>+</button>

				<button type="submit">Save</button>

			</form>

			{/* Candidate Working Tools */}
			<div hidden id="working-tools-section">
				<h2>Working Tools</h2>

				{tools.map(t => (
					<form key={t.ID} onSubmit={t.save}>

						{/* Tool Name */}
						<div className="form-field">
							<label htmlFor={`working-tool-name-${t.ID}`}>Tool Name</label>
							<input type="text" name={`working-tool-name-${t.ID}`} id={`working-tool-name-${t.ID}`} placeholder="Google Docs ..." />
						</div>

						{/* Tool Level */}
						{/* TODO: Make this a select field */}
						<div className="form-field">
							<label htmlFor={`working-tool-level-${t.ID}`}>Level Of Use</label>
							<input type="text" name={`working-tool-level-${t.ID}`} id={`working-tool-level-${t.ID}`} />
						</div>

						<button type="submit">Save</button>

					</form>
				))}

				<button type="button" onClick={AddTool}>+</button>
			</div>

		</div>
	)
}