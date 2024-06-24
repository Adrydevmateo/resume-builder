import { FormEvent } from "react"

export type Achievement = {
	ID: string,
	value: string
}

export type Experience = {
	ID: string,
	title: string,
	employer: string,
	start_date: Date,
	end_date: Date,
	achievements: Array<Achievement>,
	save: (e: FormEvent) => void
}

export type Education = {
	ID: string,
	title: string,
	start_date: Date,
	end_date: Date,
	achievements: Array<Achievement>,
	save: (e: FormEvent) => void
}

export type Certification = {
	ID: string,
	title: string,
	start_date: Date,
	end_date: Date,
	save: (e: FormEvent) => void
}

export type Interest = {
	ID: string,
	value: string,
	save: (e: FormEvent) => void
}

export type Skill = {
	ID: string,
	value: string,
	edited: boolean
}

export type Tool = {
	ID: string,
	name: string,
	level: EnumLevel
	save: (e: FormEvent) => void
}

export enum EnumLevel {
	GOOD = 50,
	VERY_GOOD = 80,
	EXCELLENT = 100
}