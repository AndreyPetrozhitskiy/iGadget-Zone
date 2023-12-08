describe('Test 7', () => {
    it('Открывает сайт, прокручивает вниз и кликает по элементу с id="button-ups"', () => {
      cy.visit('/');
      cy.scrollTo('bottom');
      cy.get('#button-ups').click();
    });
  });