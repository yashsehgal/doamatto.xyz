import React from 'react'
import {useRouter} from 'next/router'
import {useLocalStorage} from '../lib/hooks/useLocalStorage'
import {isLocale, Localizations, Locale} from './types'
import defaultStrings from './locales/en'
import locales from './locales/'

interface ContextProps {
  readonly localization: Localizations
  readonly setLocale: (localization: Localizations) => void
}

export const languageContext = React.createContext<ContextProps>({
  localization: {
    locale: "en",
    translations: defaultStrings.common,
    namespace: 'common'
  },
  setLocale: () => null
})

export const languageProvider: React.FC<{localization: Localizations}> = ({
  localization,
  children
}) => {
  const [localizationState, setLocalizationState] = React.useState({
    locale: localization?.locale,
    translations: localization?.translations,
    namespace: localization?.namespace
  })
  const [getStoredLocale,setStoredLocale] = useLocalStorage("locale")
  const {query} = useRouter()
  React.useEffect(() => {
    if(localizationState.locale !== getStoredLocale) {
      setStoredLocale(localizationState.locale)
    }
  }, [localizationState])

  React.useEffect(() => {
    if(typeof query.lang === "string" && isLocale(query.lang) && localization?.locale !== query.lang) {
      setLocalizationState({
        locale: localization?.locale,
        translations: localization?.translations,
        namespace: localization?.namespace
      })
    }
  }, [query.lang, localizationState])
  
  return (
    <languageContext.Provider value={{localization,setLocale: setLocalizationState}}>
      {children}
    </languageContext.Provider>
  )
}

export const getLocalizationProps = (ctx, namespace) => {
  const lang: Locale = (ctx.params?.lang as Locale) || "fr" || "jp"
  const locale: any = locales[lang]
  const strings: any = locales[namespace]
  const translations = {
    common: locales[lang].common,
    ...strings
  }
  return {
    locale: ctx.params?.lang || "en",
    translations,
    namespace
  }
}