describe('Dashboard', () => {
  const apiKey = `${process.env.REACT_APP_API_KEY}`


  beforeEach(() => {
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`, { fixture: "homeData.json" })
  })

  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})