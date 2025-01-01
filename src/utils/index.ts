import Clipboard from 'clipboard'

export function copy(text: string, event: { target: any }) {
  const el = event.target
  //   console.log(el, tet)
  const clipboard = new Clipboard(el, {
    text: () => text,
  })
  clipboard.on('success', () => {
    getAlert('复制成功')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    getAlert('复制失败', 'error')
    clipboard.destroy()
  })
}

type AlertType = 'success' | 'info' | 'warning' | 'error'
export function getAlert(text = '', type: AlertType = 'success') {
  ElMessage({
    message: text ? text : type,
    type: type,
  })
}
// <svg-icon :icon-class="WIFI" /><svg-icon :icon-class="WIFI" />
