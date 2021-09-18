describe('Landing page', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title', () => {
    cy.dataTestid('title').should('contain.text', 'Powerlifting Tracker');
  });

  it('should display two rows', () => {
    cy.dataTestid('set-number-0').should('be.visible');
    cy.dataTestid('set-number-1').should('be.visible');
    cy.dataTestid('set-number-2').should('not.exist');
  });

  it('should enter values', () => {
    cy.dataTestid('set-number-0').findDataTestid('weight-input').clear().type('33').should('have.value', '33');
    cy.dataTestid('set-number-0').findDataTestid('reps-input').clear().type('5').should('have.value', '5');
  });

  it('should add more rows', () => {
    cy.dataTestid('set-number-1').findDataTestid('weight-input').should('have.value', '').type('33');
    cy.dataTestid('set-number-1').findDataTestid('reps-input').should('have.value', '');

    cy.dataTestid('set-number-2').should('be.visible');
  });
});
