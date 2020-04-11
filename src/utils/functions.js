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

export const createListOfTypes = (arr, criterias) => {
  const criteriaLists = []

  criterias.map(({ uid, title }) => {
    const criteriaList = []
    arr.map(obj => {
      criteriaList.push(obj[uid])
    })

    criteriaLists.push({
      title,
      uid,
      checkboxes: duplicateCount(criteriaList),
    })
  })

  return criteriaLists
}

export const filterBySelected = (arr, types, values) => {
  const criteriaList = []

  types.forEach(type => {
    arr.map(obj => {
      for (const value of values) {
        if (obj[type] === value) {
          criteriaList.push(obj)
        }
      }
    })
  })

  return criteriaList.reduce((acc, current) => {
    const x = acc.find(({ id }) => id === current.id)
    if (!x) {
      return acc.concat([current])
    } else {
      return acc
    }
  }, [])
}
