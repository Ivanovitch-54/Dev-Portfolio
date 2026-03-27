const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function getAssetPath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) {
    return path
  }

  return `${basePath}${path}`
}
