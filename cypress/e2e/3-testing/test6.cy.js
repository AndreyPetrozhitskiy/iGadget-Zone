describe('Test 6', () => {
    it('Открывает сайт, находит и кликает по элементу с id="news"', () => {
      cy.visit('/');
      cy.get('#news').click();
    });
  });