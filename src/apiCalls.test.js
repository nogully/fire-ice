import * as apiCalls from './apiCalls'

describe('apiCalls', () => {
  describe('resolveEndpoint', () => {
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          status: 200, 
          json: () => { [
            {name:"House Corbray of Heart's Home"}, 
            {name: "House Dayne of Starfall"} ] }
        })
      })
    })

    it('should call fetch with the correct params', async () => {
      const mockUrl = 'http://localhost:3001/api/v1/houses'
      const response = await apiCalls.resolveEndpoint(mockUrl)
      expect(window.fetch).toHaveBeenCalledWith(mockUrl)
    })

  
  })
})