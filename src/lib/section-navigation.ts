const SECTION_CONTENT_SELECTOR = "[data-section-content='true']"
const NAVBAR_SELECTOR = "[data-navbar-root='true']"

function getViewportSafeArea() {
  const isDesktop = window.innerWidth >= 768

  return {
    topOffset: isDesktop ? 28 : 22,
    bottomOffset: isDesktop ? 48 : 32,
  }
}

export function getNavbarHeight() {
  const navbar = document.querySelector(NAVBAR_SELECTOR)

  if (!(navbar instanceof HTMLElement)) {
    return 84
  }

  return navbar.getBoundingClientRect().height
}

export function getSectionTargetElement(section: HTMLElement) {
  const content = section.querySelector(SECTION_CONTENT_SELECTOR)

  return content instanceof HTMLElement ? content : section
}

export function getSectionReferenceLine(navHeight = getNavbarHeight()) {
  const viewportHeight = window.innerHeight
  const { topOffset } = getViewportSafeArea()
  const availableViewport = Math.max(260, viewportHeight - navHeight - topOffset)

  // We track the active section from a visual reading line under the sticky navbar,
  // not from the raw top of the viewport. This keeps the highlighted nav item in
  // sync with what the user is actually looking at.
  return Math.min(
    viewportHeight - 72,
    navHeight + topOffset + availableViewport * 0.44
  )
}

export function getSectionScrollTop(section: HTMLElement) {
  const target = getSectionTargetElement(section)
  const navHeight = getNavbarHeight()
  const { topOffset, bottomOffset } = getViewportSafeArea()
  const targetRect = target.getBoundingClientRect()
  const targetAbsoluteTop = targetRect.top + window.scrollY
  const availableViewport = Math.max(
    260,
    window.innerHeight - navHeight - topOffset - bottomOffset
  )
  const centeredOffset = Math.max(
    0,
    (availableViewport - Math.min(targetRect.height, availableViewport)) / 2
  )

  // Clicking a nav item recenters the meaningful content block instead of pinning
  // the section edge under the navbar, which feels much more natural on long pages.
  return section.id === "hero"
    ? 0
    : Math.max(0, targetAbsoluteTop - navHeight - topOffset - centeredOffset)
}
