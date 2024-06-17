import { TLanguage } from "./Language.type";

export function GetLanguage(): TLanguage {
 const language = sessionStorage['language']
 return language
}

export function SetLanguage(language: TLanguage): void {
 sessionStorage['language'] = language
}