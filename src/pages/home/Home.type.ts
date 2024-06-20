import { TLanguage } from "../../language/Language.type";

type Translation = Record<TLanguage, string>

export interface Hero {
 title: Translation,
 description: Translation,
 link: Translation
}

export interface HowToUse {
 title: Translation,
 description: Translation
}