describe('Test 2', () => {
    it('Открывает сайт, находит и кликает по элементу с id="company"', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.get('#company').click();
      cy.wait(1000);
      cy.get('#contacts').click();
      cy.wait(1000);
      cy.get('#delivery').click();
      cy.wait(1000);
      cy.get('#payment').click();
      cy.wait(1000);
      cy.get('#news').click();
    });
  });