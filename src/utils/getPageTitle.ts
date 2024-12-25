import defaultSettings from '@/settins'

const title = defaultSettings.title || 'BZSH'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
