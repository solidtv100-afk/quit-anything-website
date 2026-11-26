import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const pages: Record<string, { title: string; description: string }> = {
  '/': { title: 'Quit Anything – Habit Tracker & Personal Progress', description: 'Discover Quit Anything, a habit-tracking app designed to help you monitor progress, track milestones and build healthier daily routines.' },
  '/features': { title: 'Features | Quit Anything', description: 'Explore habit tracking, personal milestones, progress history and other tools designed to support your journey.' },
  '/about': { title: 'About Us | Quit Anything', description: 'Learn about Quit Anything and our mission to make personal improvement more accessible.' },
  '/contact': { title: 'Contact Support | Quit Anything', description: 'Get in touch with the Quit Anything support team for help, feedback or privacy questions.' },
  '/privacy-policy': { title: 'Privacy Policy | Quit Anything', description: 'Read the Quit Anything privacy policy and learn how app information may be handled.' },
  '/terms': { title: 'Terms of Service | Quit Anything', description: 'Review the terms for using Quit Anything and important health and financial disclaimers.' },
  '/data-deletion': { title: 'Data Deletion | Quit Anything', description: 'Learn how to request or manage deletion of information associated with Quit Anything.' },
}

export function Seo() {
  const { pathname } = useLocation()
  useEffect(() => {
    const page = pages[pathname] ?? pages['/']
    document.title = page.title
    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute('content', page.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', page.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', page.description)
    const canonical = document.querySelector('link[rel="canonical"]') ?? document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', `${window.location.origin}${pathname}`)
    if (!canonical.parentNode) document.head.appendChild(canonical)
  }, [pathname])
  return null
}
