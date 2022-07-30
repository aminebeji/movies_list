describe("filter", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("choose category", () => {
    cy.wait(1100);
    cy.get("#category-filter").select("Comedy");
    cy.wait(100);
    cy.get("#movie-list")
      .children()
      .children(".bottom-movie-container")
      .children(".movie-category")
      .contains("Comedy");
  }),
    it("choose category with search", () => {
        let searchInput = "Oceans";
        cy.wait(1100);
        cy.get("#category-filter").select("Comedy");
        cy.wait(100);
        cy.get("#search-input").type(searchInput).type("{enter}");
        cy.url().should("include", `/search/${searchInput}`);
        cy.get("#movie-list")
          .children()
          .eq(0)
          .children(".bottom-movie-container")
          .children(".title-container")
          .children(".movie-title")
          .contains(searchInput);
        cy.get("#movie-list")
          .children()
          .children(".bottom-movie-container")
          .children(".movie-category")
          .contains("Comedy");
    });
});
