export const formatName = (boonName: string) => {
  return boonName.replace(/[^A-Z0-9]/ig, '')
}