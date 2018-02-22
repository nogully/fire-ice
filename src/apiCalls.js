export const resolveEndpoint = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status > 226) {
      throw new Error('could not resolve endpoint')
    } else {
      const data = await response.json()
      return cleanHouses(data);
    }

  } catch(error) {
    throw(error);
  }
}

const cleanHouses = houses => {
  const cleaned = houses.map( house => {
    const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words, swornMembers } = house; 
    return Object.assign({}, 
      {name}, 
      {founded}, 
      {seats}, 
      {titles}, 
      {coatOfArms}, 
      {ancestralWeapons}, 
      {words}, 
      {swornMembers: []}
    )
  })
  return cleaned;
}