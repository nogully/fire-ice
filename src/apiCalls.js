export const resolveEndpoint = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status > 226) {
      throw new Error('could not resolve endpoint')
    } else {
      const data = await response.json()
      return data;
    }

  } catch(error) {
    throw(error);
  }
}