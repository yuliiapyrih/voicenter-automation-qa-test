/// <reference types="cypress" />
/// <reference types="../support" />

import LoginPageObject from '../support/pages/login.pageObject';
import HomePageObject from '../support/pages/home.pageObject';
import ForgotPasswordPageObject from '../support/pages/forgotPassword.pageObject';

const loginPage = new LoginPageObject();
const homePage = new HomePageObject();
const forgotPasswordPage = new ForgotPasswordPageObject();

describe('Login', () => {
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
    loginPage.visit();
  });

  it('should provide an ability to log in with existing credentials', () => {
    loginPage.typeEmail(user.email);
    loginPage.typePassword(user.password);
    loginPage.clickLogin();

    homePage.checkUsername(user.username);
  });

  it('should not provide an ability to log in with empty "Email" field', () => {
    loginPage.typePassword(user.password);
    loginPage.clickLogin();

    loginPage.checkLoginUrl();
  });

  it('should not provide an ability to log in with empty "Password" field', () => {
    loginPage.typeEmail(user.email);
    loginPage.clickLogin();

    loginPage.checkLoginUrl();
  });

  it('should not provide an ability to log in with wrong credentials', () => {
    loginPage.typeEmail(wrongUser.email);
    loginPage.typePassword(wrongUser.password);
    loginPage.clickLogin();

    loginPage.checkLoginUrl();
  });

  it('should not provide an ability to log in with wrong password', () => {
    loginPage.typeEmail(user.email);
    loginPage.typePassword(wrongUser.password);
    loginPage.clickLogin();

    loginPage.checkLoginUrl();
  });

  it('should provide to validation message by filling non-valid email', () => {
    loginPage.typeEmail(wrongUser.wrongEmail);
    loginPage.typePassword(user.password);
    loginPage.clickLogin();

    loginPage.checkValidationMessage(messages.wrongEmail);
  });

  it('should provide to validation message by filling non-register email', () => {
    loginPage.typeEmail(wrongUser.email);
    loginPage.typePassword(user.password);
    loginPage.clickLogin();

    loginPage.checkValidationMessage(messages.nonRegisterEmail)
  });

  it('should provide to validation message by filling non-register password', () => {
    loginPage.typeEmail(user.email);
    loginPage.typePassword(wrongUser.password);
    loginPage.clickLogin();

    loginPage.checkValidationMessage(messages.wrongPassword);
  });

  it('should provide an ability to redirect to the "Forgot password" page', () => {
    loginPage.clickForgotPassword();

    forgotPasswordPage.checkForgotPasswordUrl();
  });
})
