describe('Test 2', () => {
    it('Открывает сайт, находит и кликает по элементу с id="company"', () => {
      cy.visit('/');
      cy.get('#company').click();
    });
  });