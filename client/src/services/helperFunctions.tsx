export const formatName = (boonName: string) => boonName.replace(/[^A-Z0-9]/gi, '');

export const godNameFromUrl = (url: string) => {
  const regex = /[^/].+?(?=boons)/;
  const regexMatch: RegExpMatchArray | null = url.match(regex);
  if (regexMatch) {
    return regexMatch[0];
  }
  return 'godnotfound';
};
