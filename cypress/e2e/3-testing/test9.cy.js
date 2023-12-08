describe('Test 9', () => {
    it('Открывает сайт, находит и кликает по элементу с id="user-auth", заполняет форму регистрации и кликает по кнопке', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.get('#user-auth').click();
      cy.wait(1000);
      cy.get('#user-registration').click();
      cy.wait(1000);
      cy.get('#user-login').type('Qwerty123@');
      cy.wait(1000);
      cy.get('#user-password').type('123345');
      cy.wait(1000);
      cy.get('#register-btn').click();
    });
  });