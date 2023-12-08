describe('Test 4', () => {
    it('Открывает сайт, находит и кликает по элементу с id="delivery"', () => {
      cy.visit('/');
      cy.get('#delivery').click();
    });
  });