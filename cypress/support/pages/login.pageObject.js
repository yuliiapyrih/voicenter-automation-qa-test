import PageObject from '../PageObject';

class LoginPageObject extends PageObject {
  url = '/login';

  get emailField() {
    return cy.getByDataCy('email-login');
  }

  typeEmail(email) {
    this.emailField
      .type(email);
  }

  get passwordField() {
    return cy.getByDataCy('password-login');
  }

  typePassword(password) {
    this.passwordField
      .type(password);
  }

  get loginBtn() {
    return cy.getByDataCy('submit-login-btn');
  }

  clickLogin() {
    this.loginBtn
      .click();
  }

  get forgotPasswordLink() {
    return cy.getByDataCy('forgot-password-link');
  }

  clickForgotPassword() {
    this.forgotPasswordLink
      .click();
  }

  checkLoginUrl(){
    cy.url().should('include', '/login');
  }
}

export default LoginPageObject;
