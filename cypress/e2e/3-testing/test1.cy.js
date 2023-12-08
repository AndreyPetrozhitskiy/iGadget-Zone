describe('Test 1', () => {
    it('Открывает сайт, находит и кликает по логотипу', () => {
      cy.visit('/');
      cy.get('#logo-header').click();
    });
  });