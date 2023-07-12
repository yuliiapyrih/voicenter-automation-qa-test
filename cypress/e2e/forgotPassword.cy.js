/// <reference types="cypress" />
/// <reference types="../support" />

import LoginPageObject from '../support/pages/login.pageObject';
import ForgotPasswordPageObject from '../support/pages/forgotPassword.pageObject';

const loginPage = new LoginPageObject();
const forgotPasswordPage = new ForgotPasswordPageObject();

describe('Forgot Password', () => {
  let user;
  let wrongUser;
  let messages;

  before(() => {
    cy.task('registeredUser').then(registeredUser => {
      user = registeredUser;
    });
    cy.task('nonRegisteredUser').then(nonRegisteredUser => {
      wrongUser = nonRegisteredUser;
    });
    cy.task('validationMessages').then(validationMessages => {
      messages = validationMessages;
    });
  });

  beforeEach(() => {
    forgotPasswordPage.visit();
  });

  it('should provide an ability to get password with register email', () => {
    forgotPasswordPage.typeEmail(user.email);
    forgotPasswordPage.clickGetPassword();

    forgotPasswordPage.checkPassword(user.password);
  });

  it('should not provide an ability to get password with empty "Email" field', () => {;
    forgotPasswordPage.clickGetPassword();

    forgotPasswordPage.checkForgotPasswordUrl();
  });

  it('should not provide an ability to get password with wrong email', () => {
    forgotPasswordPage.typeEmail(wrongUser.email);
    forgotPasswordPage.clickGetPassword();

    forgotPasswordPage.checkForgotPasswordUrl();
  });

  it('should provide to validation message by filling non-valid email', () => {
    forgotPasswordPage.typeEmail(wrongUser.wrongEmail);
    forgotPasswordPage.clickGetPassword();

    forgotPasswordPage.checkValidationMessage(messages.wrongEmail);
  });

  it('should provide to validation message by filling non-register email', () => {
    forgotPasswordPage.typeEmail(wrongUser.email);
    forgotPasswordPage.clickGetPassword();

    forgotPasswordPage.checkValidationMessage(messages.nonRegisterEmail)
  });

  it('should provide an ability to redirect to the "Login" page', () => {
    forgotPasswordPage.clickReturnToLogin();

    loginPage.checkLoginUrl();
  });
})