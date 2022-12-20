export const uppercaseFirst = (string) => {
    if(typeof string === 'string') {
      return string.slice(0, 1).toUpperCase() + string.slice(1, string.length)
    }
    return undefined
  }