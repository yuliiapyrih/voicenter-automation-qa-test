class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  checkValidationMessage(message) {
    cy.get('.text-sm')
      .should('exist')
      .and('contain', message);
  }
}

export default PageObject;
