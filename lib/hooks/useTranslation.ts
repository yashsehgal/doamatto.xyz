import {useContext} from 'react'
import {languageContext} from '../../i18n/languageContext'

export default function useTranslation() {
  const {localization} = useContext(languageContext)
  function t(key:string) {
    if(!localization.translations[key]) {
      console.warn(
        `Translation '${key}' for locale '${localization.locale}' not found.`
      )
    }
  }
  return {
    t, locale: localization.locale
  }
}