export const godNameFromUrl = (url: string) => {
  let regex = /[^/].+?(?=boons)/
  let regexMatch: RegExpMatchArray | null = url.match(regex)
  if (regexMatch) {
    return regexMatch[0]
  }
}