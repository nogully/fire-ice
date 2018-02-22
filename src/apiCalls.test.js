import * as apiCalls from './apiCalls'

describe('apiCalls', () => {
  describe('resolveEndpoint', () => {
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          status: 200, 
          json: () => Promise.resolve( [
                    { name: "House Corbray of Heart's Home"}, 
                    { name: "House Dayne of Starfall"} 
                  ] )
        })
      })
    })

    it('should call fetch with the correct params', async () => {
      const mockUrl = 'http://localhost:3001/api/v1/houses'
      const response = await apiCalls.resolveEndpoint(mockUrl)
      expect(window.fetch).toHaveBeenCalledWith(mockUrl)
    })

    it('should return an array of house objects if the status code is OK', async () => {
      const mockUrl = 'http://localhost:3001/api/v1/houses'
      const expected = [
            {name:"House Corbray of Heart's Home"}, 
            {name: "House Dayne of Starfall"} ]
      const response = await apiCalls.resolveEndpoint(mockUrl)
      expect(response).toEqual(expected)
    })

    it('should throw an error if the status code is not OK', () => {
      

    })

  })
})