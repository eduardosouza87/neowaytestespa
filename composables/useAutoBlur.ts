interface UseAutoBlurReturn {
  inputValue: Ref<string>
  startTracking: () => void
  resetTimer: () => void
  clearTimer: () => void
}

export function useAutoBlur(): UseAutoBlurReturn {
  const inputValue = ref<string>('')
  let timer: ReturnType<typeof setTimeout> | null = null

  const startTracking = (): void => {
    resetTimer()
  }

  const resetTimer = (): void => {
    clearTimer()
    timer = setTimeout(() => {
      (document.activeElement as HTMLElement)?.blur()
    }, 3000)
  }

  const clearTimer = (): void => {
    if (timer !== null) {
      clearTimeout(timer)
      timer = null
    }
  }

  onUnmounted(() => {
    clearTimer()
  })

  return {
    inputValue,
    startTracking,
    resetTimer,
    clearTimer
  }
}
