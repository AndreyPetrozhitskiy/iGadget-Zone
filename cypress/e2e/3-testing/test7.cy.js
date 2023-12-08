describe('Test 7', () => {
    it('Открывает сайт, прокручивает вниз и кликает по элементу с id="button-ups"', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.scrollTo('bottom');
      cy.wait(1000);
      cy.get('#button-ups').click();
    });
  });