import defaultSettings from '@/settins'
import i18n from '@/languages'

const title = defaultSettings.title || 'BZSH'

export default function getPageTitle(pageTitle: string) {
  if (pageTitle) {
    return `${i18n.global.t(`route.${pageTitle}`)} - ${title}`
  }
  return `${title}`
}
