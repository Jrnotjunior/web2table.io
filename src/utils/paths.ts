const githubPagesHost = 'jrnotjunior.github.io'
const githubPagesBasePath = '/web2table.io'

/** Base path used by React Router for the repository-hosted preview. */
export function getAppBasePath(hostname = window.location.hostname): string {
  return hostname === githubPagesHost ? githubPagesBasePath : '/'
}

/** Absolute homepage path used by header links from non-home routes. */
export function getHomePath(hostname = window.location.hostname): string {
  const basePath = getAppBasePath(hostname)
  return basePath === '/' ? '/' : `${basePath}/`
}
