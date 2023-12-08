describe('Test 9', () => {
    it('Открывает сайт, находит и кликает по элементу с id="user-auth", заполняет форму регистрации и кликает по кнопке', () => {
      cy.visit('/');
      cy.get('#user-auth').click();
      cy.get('#user-registration').click();
      cy.get('#user-login').type('Qwerty123@');
      cy.get('#user-password').type('123345');
      cy.get('#register-btn').click();
    });
  });