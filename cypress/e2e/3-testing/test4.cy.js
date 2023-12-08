describe('Тестирование увеличения счетчика и элемента', () => {
  it('Открывает сайт и взаимодействует с элементами', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('#news').click();
    cy.wait(1000);
    cy.get('#input_fake-api').type('{uparrow}'.repeat(15));
    cy.wait(1000);
    cy.get('#fake_api-users').click();
    cy.wait(1000);
  });
});