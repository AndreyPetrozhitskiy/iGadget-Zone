describe('Тестирование аудио', () => {
  it('Открывает сайт и взаимодействует с аудио', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('#news').click();
    cy.wait(1000);
    cy.wait(1000);
    // Проверяем, что аудио начало воспроизведение
    cy.get('#audio_api')
    .should('have.prop', 'paused', true)
    .and('have.prop', 'ended', false)
    .then(($audio) => {
      $audio[0].play()
    })
  });
});