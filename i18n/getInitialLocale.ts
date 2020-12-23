import {defaultLocale} from './config'
import {Locale, isLocale} from './types'
import {useRouter} from 'next/router'

export function getInitialLocale(): Locale {
  const localSetting = localStorage.getItem("locale")
  if(localSetting && isLocale(localSetting)) return localSetting

  const browserSetting = useRouter().locale // May not work
  if(isLocale(browserSetting)) return browserSetting

  return defaultLocale
}