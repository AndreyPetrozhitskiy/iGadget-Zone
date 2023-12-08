describe('Test 5', () => {
    it('Открывает сайт, находит и кликает по элементу с id="payment"', () => {
      cy.visit('/');
      cy.get('#payment').click();
    });
  });