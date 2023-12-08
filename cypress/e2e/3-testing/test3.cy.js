describe('Test 3', () => {
    it('Открывает сайт, находит и кликает по элементу с id="contacts"', () => {
      cy.visit('/');
      cy.get('#contacts').click();
    });
  });