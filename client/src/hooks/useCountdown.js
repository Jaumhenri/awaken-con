import { useState, useEffect } from 'react'

function computeTimeLeft(targetMs) {
  const diff = targetMs - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  }
}

export function useCountdown(isoDate) {
  const targetMs = new Date(isoDate).getTime()
  const [timeLeft, setTimeLeft] = useState(() => computeTimeLeft(targetMs))

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(computeTimeLeft(targetMs)), 1000)
    return () => clearInterval(id)
  }, [targetMs])

  return timeLeft
}
