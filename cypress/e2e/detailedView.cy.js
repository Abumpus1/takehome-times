describe('Detailed View and Error Page', () => {

  beforeEach(() => {
    cy.intercept("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=1AHD46o6jvZ6wNyvAXx0No8Wks7AnASz", { fixture: "homeData.json" })
    cy.visit('http://localhost:3000')
  })

  it("Should display details for the article", () => {
    cy.get(".item-card").eq(2).click()
    cy.url().should("eq", "http://localhost:3000/details/3PVsecD")

    cy.get("h1").contains("The Takehome Times")
    cy.get("h2").contains("Germany Counts on Chilled Gas to Keep Warm Over Winter")
    cy.get(".byline").contains("By Melissa Eddy, Stanley Reed and Patrick Junker")
    cy.get(".date").contains("2022/07/27")
    cy.get(".img-large").should("exist")
    cy.contains("As Russia squeezes the flow of natural gas, German officials are urgently turning toward an option they had earlier disregarded: liquefied natural gas.")
    cy.get(".nyt-link").contains("Read more at The New York Times")
    cy.get("a").eq(1).should('have.attr', "href").should("eq", "https://nyti.ms/3PVsecD")
  })

  it("Should give a 404 error on a bad url", () => {
    cy.visit("http://localhost:3000/abc123")
    cy.contains("Error 404, Not found")

    cy.visit("http://localhost:3000/details/123")
    cy.contains("Error 404, Not found")
  })

})