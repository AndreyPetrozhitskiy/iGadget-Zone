describe('Тестирование корзины', () => {
  it('Открывает сайт и взаимодействует с корзиной', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('#Tovar_1').click({ force: true });
    cy.wait(1000);
    cy.get('#Tovar_2').click({ force: true });
    cy.wait(1000);
    cy.get('#Tovar_3').click({ force: true });
    cy.wait(1000);
    cy.get('#Tovar_4').click({ force: true });
    cy.wait(1000);
    cy.get('#basket').click();
    cy.wait(1000);
    cy.get('#Crest_1, #Crest_2, #Crest_3, #Crest_4').click({ multiple: true });
  });
});