export const removeDuplicates = array => {
  return array.filter((a, b) => array.indexOf(a) === b)
}

export const duplicateCount = array => {
  const counts = {}
  const countsArray = []

  array.map(type => {
    counts[type] = (counts[type] || 0) + 1
  })

  for (const key of Object.keys(counts)) {
    const item = {
      title: key,
      count: counts[key],
    }

    countsArray.push(item)
  }

  return countsArray
}

export const filterByKey = (arr, criteria) => {
  const criteriaList = []
  arr.map(obj => {
    criteriaList.push(obj[criteria])
  })
  return criteriaList
}

export const filterByKeyMatch = (arr, criteria, values) => {
  const criteriaList = []

  arr.map(obj => {
    for (const value of values) {
      if (obj[criteria] === value) {
        criteriaList.push(obj)
      }
    }
  })

  return criteriaList
}
