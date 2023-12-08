describe('Тестирование видео', () => {
  it('Открывает сайт и взаимодействует с видео', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('#news').click();
    cy.wait(2000);
    cy.get('#video_api')
        .should('have.prop', 'paused', true)
        .and('have.prop', 'ended', false)
        .then(($video) => {
          $video[0].play()
        })
  });
});