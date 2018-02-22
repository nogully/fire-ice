export const fetchHouses = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status > 226) {
      throw new Error('could not resolve endpoint');
    } else {
      const data = await response.json();
      return cleanHouses(data);
    }

  } catch (error) {
    throw (error);
  }
};

export const resolveEndpoint = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status > 226) {
      throw new Error('could not resolve endpoint');
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw (error);
  }
};

const cleanHouses = houses => {
  if (houses) {
    const cleaned = houses.map( house => {
      const { name, founded, seats, titles, coatOfArms, 
      ancestralWeapons, words, swornMembers } = house; 
      return Object.assign({}, 
        {name}, 
        {founded}, 
        {seats: seats.join(', ')}, 
        {titles: titles.join(', ')}, 
        {coatOfArms}, 
        {ancestralWeapons}, 
        {words}, 
        {swornMembers}
      );
    });
    return cleaned;
  } else {
    return null;
  }
};

export const fetchSwornMembers = (house) => {
  const { swornMembers } = house[0];
  const unresolvedPromises = swornMembers.map( async (member) => {
    const memberData = await resolveEndpoint(member);
    return Object.assign({}, 
      {name: memberData.name}, 
      {status: memberData.died ? memberData.died : 'alive' });
  });
  return Promise.all(unresolvedPromises);
};