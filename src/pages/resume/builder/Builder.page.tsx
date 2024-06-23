import { FormEvent, useState } from "react";

type SubmitData = Record<string, FormDataEntryValue>

type Experience = {
	ID: string,
	title: string,
	employer: string,
	start_date: Date,
	end_date: Date,
	achievements: Array<{
		ID: string,
		value: string
	}>,
	save: () => void
}

export default function Builder() {
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
			save() {
				console.log('Experience Data: ');
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
			save() {
				console.log('Experience Data: ');
			},
		}])
	}

	const AddAchievementToExperience = (experience_id: string) => {
		const experience = experiences.find(f => f.ID === experience_id)
		experience?.achievements.push({
			ID: crypto.randomUUID(),
			value: 'Work'
		})
	}

	const HandleSubmit = (e: FormEvent) => {
		e.preventDefault()
		const form = e.target as HTMLFormElement
		const form_data = new FormData(form)
		const entries = form_data.entries()

		const data: SubmitData = {}

		for (const entry of entries) {
			data[entry[0]] = entry[1]
		}

		console.log('Data: ', data);
	}

	return (
		<div id="builder-page">
			{/* header */}

			{/* Page Title */}
			<h1>Resume Builder</h1>

			{/* Introduction Form */}
			<form id="introduction-form" onSubmit={HandleSubmit}>

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

			{/* List of Experiences */}
			<div id="experience-section" onSubmit={HandleSubmit}>

				{/* Experience Form */}
				{experiences.map(e => (
					<form className="experience-form" id={`experience-${e.ID}`} key={e.ID} onSubmit={e.save} >

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
								<div className="form-field" id={a.ID} key={a.ID}>
									<label htmlFor={`experience-${a.ID}`}>Experience Employer</label>
									<input type="text" name={`experience-${a.ID}`} id={`experience-${a.ID}`} placeholder="Ex: Google ..." />
								</div>
							))}
							<button type="button" onClick={() => AddAchievementToExperience(e.ID)}>+</button>
						</ul>

						<button type="submit">Save</button>
					</form>
				))}

				<button onClick={AddExperience}>+</button>
			</div>

		</div>
	)
}