import PageObject from '../PageObject';

class HomePageObject extends PageObject {

  get username() {
    return cy.getByDataCy('username');
  }

  checkUsername(username) {
    this.username
      .should('contain', username);
  }

}

export default HomePageObject;
