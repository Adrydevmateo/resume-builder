import { FormEvent, useEffect } from "react"
import BuilderStore from "./Builder.store"
import { GetIntroductionData, SaveIntroductionData } from "./Builder"

export default function Builder() {

	const { candidate_name, candidate_title, candidate_introduction, SetCandidateName, SetCandidateTitle, SetCandidateIntroduction, experiences, AddExperience, AddAchievementToExperience, education, AddEducation, AddAchievementToEducation, certifications, AddCertification, interests, AddInterest, SavePersonalInfo, skills, AddSkill, SaveSkills, tools, AddTool } = BuilderStore()

	useEffect(() => {
		const introduction = GetIntroductionData()
		return () => {
			//#region Introduction
			SetCandidateName(introduction.candidate_name)
			SetCandidateTitle(introduction.candidate_title)
			SetCandidateIntroduction(introduction.candidate_introduction)
			//#endregion Introduction
		}
	}, [])

	const HandleSaveIntroduction = (e: FormEvent) => {
		e.preventDefault()
		SaveIntroductionData(e.target as HTMLFormElement)
	}

	return (
		<div id="builder-page">
			{/* header */}

			{/* Page Title */}
			<h1>Resume Builder</h1>

			{/* Candidate Introduction */}
			<form id="introduction-form" onSubmit={HandleSaveIntroduction}>
				<h2>Introduction</h2>
				<h3>Name: {candidate_name}</h3>
				<h3>Title: {candidate_title}</h3>
				<h3>Introduction: {candidate_introduction}</h3>

				{/* Candidate Name */}
				<div className="form-field">
					<label htmlFor='candidate_name'>Your Name</label>
					<input type="text" name="candidate_name" id='candidate_name' placeholder="Ex: Adry ..." value={candidate_name} onChange={({ target }) => SetCandidateName(target.value)} />
				</div>

				{/* Candidate Title */}
				<div className="form-field">
					<label htmlFor='candidate_title'>Your Title</label>
					<input type="text" name="candidate_title" id='candidate_title' placeholder="Ex: Web Developer ..." value={candidate_title} onChange={({ target }) => SetCandidateTitle(target.value)} />
				</div>

				{/* Candidate Introduction */}
				<div className="form-field">
					<label htmlFor='candidate_introduction'>Introduction</label>
					<input type="text" name="candidate_introduction" id='candidate_introduction' placeholder="Ex: I'm a ..." value={candidate_introduction} onChange={({ target }) => SetCandidateIntroduction(target.value)} />
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

							<button type="button" onClick={() => AddAchievementToExperience(e.ID, experiences)}>+</button>
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
							<button type="button" onClick={() => AddAchievementToEducation(e.ID, education)}>+</button>
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

						<button type="submit">Save</button>

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

						<button type="submit">Save</button>
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