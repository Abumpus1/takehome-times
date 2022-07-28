describe('Dashboard', () => {

  beforeEach(() => {
    cy.intercept("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=1AHD46o6jvZ6wNyvAXx0No8Wks7AnASz", { fixture: "homeData.json" })
    cy.visit('http://localhost:3000')
  })

  it("Should display the dashboard", () => {
    cy.get("h1").contains("The Takehome Times")
    cy.get("label").contains("Search Top Stories:")
    cy.get("input").should("exist")

    cy.get(".item-card").should("have.length", 3)
    cy.get(".thumbnail").eq(0).should("exist")
    cy.get(".item-card").eq(0).contains("What Fed Rate Increases Mean for Mortgages, Credit Cards and More")
  })

  it("Should allow user to search", () => {
    cy.get("input").type("inflation")
    cy.get(".item-card").should("have.length", 1)
    cy.get(".item-card").contains("What companies are saying about inflation and recession risks.")
  })

  it("Should have error handling if no results are found", () => {
    cy.get("input").type("potato")
    cy.get("h2").contains("No results found! Please adjust your search.")
  })

  it("Should allow user to navigate between article details and home page", () => {
    cy.get(".item-card").eq(2).click()
    cy.url().should("eq", "http://localhost:3000/details/3PVsecD")
    
    cy.get("h1").click()
    cy.url().should("eq", "http://localhost:3000/")
  })
})