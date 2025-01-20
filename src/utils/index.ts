import {
  debounce as debounceLodash,
  throttle as throttleLodash
} from 'lodash-es'

/**
 * 复制方法
 * @param text 复制的文字内容
 * @param msg 复制成功的提示内容
 * @returns
 */
export function copy(text: string, msg?: string) {
  return new Promise((resolve, reject) => {
    navigator.clipboard
      .writeText(text)
      .then((res) => {
        getAlert(msg ? msg : '复制成功')
        resolve('')
      })
      .catch((e) => {
        getAlert(`复制失败-${e}`, 'error')
        reject()
      })
  })
}

// 提示
export function getAlert(text = '', type: AlertType = 'success') {
  ElMessage({
    message: text ? text : type,
    type
  })
}

export function debounce<T extends (...args: any) => any>(
  func: T,
  wait: number | undefined
) {
  return debounceLodash(func, wait)
}

export function throttle<T extends (...args: any) => any>(
  func: T,
  wait: number | undefined
) {
  return throttleLodash(func, wait)
}
