describe('Test 8', () => {
    it('Открывает сайт, находит и кликает по нескольким товарам, затем кликает по элементу с id="basket"', () => {
      cy.visit('/');
      cy.get('#Tovar_1').click({ force: true });
      cy.get('#Tovar_2').click({ force: true });
      cy.get('#Tovar_4').click({ force: true });
      cy.get('#Tovar_5').click({ force: true });
      cy.get('#basket').click();
    });
  });
  