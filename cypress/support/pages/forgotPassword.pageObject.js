import PageObject from '../PageObject';

class ForgotPasswordPageObject extends PageObject {
  url = '/forgot_password';

  get emailField() {
    return cy.getByDataCy('email-forgot-password');
  }

  typeEmail(email) {
    this.emailField
      .type(email);
  }

  get getPasswordBtn() {
    return cy.getByDataCy('submit-forgot-password');
  }

  clickGetPassword() {
    this.getPasswordBtn
      .click();
  }

  get returnToLoginLink() {
    return cy.getByDataCy('return-to-login-link');
  }

  clickReturnToLogin() {
    this.returnToLoginLink
      .click();
  }

  checkForgotPasswordUrl(){
    cy.url().should('include', '/forgot_password');
  }

  get password() {
    return cy.getByDataCy('password-forgot-password');
  }

  checkPassword(password) {
    this.password
      .should('contain', password);
  }
}

export default ForgotPasswordPageObject;
