describe("search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("correct search", () => {
    let searchInput = "Oceans";
    cy.get("#search-input").type(searchInput).type("{enter}");
    cy.url().should("include", `/search/${searchInput}`);
    cy.get("#movie-list")
      .children()
      .eq(0)
      .children(".bottom-movie-container")
      .children(".title-container")
      .children(".movie-title")
      .contains(searchInput);
  }),
    it("invalid search", () => {
      let fakeInput = "fake-input";
      cy.get("#search-input").type(fakeInput).type("{enter}");
      cy.url().should("include", `/search/${fakeInput}`);
      cy.get("#empty-search").contains("Empty Search");
    });
});
