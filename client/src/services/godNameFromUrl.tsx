const godNameFromUrl = (url: string) => {
  const regex = /[^/].+?(?=boons)/;
  const regexMatch: RegExpMatchArray | null = url.match(regex);
  if (regexMatch) {
    return regexMatch[0];
  }
  return 'godnotfound';
};

export { godNameFromUrl as default };
