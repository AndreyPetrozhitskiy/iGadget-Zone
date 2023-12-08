describe('Test 1', () => {
    it('Открывает сайт, находит и кликает по логотипу', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.get('#logo-header').click();
      
    });
  });