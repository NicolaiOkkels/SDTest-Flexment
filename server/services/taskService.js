export const calculateStartIndex = (pageLimit, page) => {
    return (Number(page) - 1) * pageLimit;
}

export function convertStringToArray (string) {
  return string.split(', ')
}
