import { create } from 'zustand'
import { TLanguage } from './Language.type'

const LanguageStore = create((set) => ({
 language: 'en',
 SetLanguage: (language: TLanguage) => set({ language: language }),
}))

export default LanguageStore