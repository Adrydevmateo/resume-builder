import { create } from 'zustand'
import { TLanguage } from './Language.type'

interface LanguageState {
 language: TLanguage,
 SetLanguage: (language: TLanguage) => void
}

const LanguageStore = create<LanguageState>((set) => ({
 language: 'en',
 SetLanguage: (language: TLanguage) => set({ language: language })
}))

export default LanguageStore