describe('Test 8', () => {
    it('Открывает сайт, находит и кликает по нескольким товарам, затем кликает по элементу с id="basket"', () => {
      cy.visit('/');
      cy.wait(1000);
      cy.get('#Tovar_1').click({ force: true });
      cy.wait(1000);
      cy.get('#Tovar_2').click({ force: true });
      cy.wait(1000);
      cy.get('#Tovar_4').click({ force: true });
      cy.wait(1000);
      cy.get('#Tovar_5').click({ force: true });
      cy.wait(1000);
      cy.get('#basket').click();
    });
  });
  