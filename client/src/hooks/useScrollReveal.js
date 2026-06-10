import { useEffect } from 'react'

export function useScrollReveal(selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale') {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    const observeTree = (root) => {
      root.querySelectorAll(selector).forEach((el) => observer.observe(el))
    }

    observeTree(document)

    const mutation = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node.nodeType !== 1) continue
          if (node.matches?.(selector)) observer.observe(node)
          observeTree(node)
        }
      }
    })

    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [selector])
}
