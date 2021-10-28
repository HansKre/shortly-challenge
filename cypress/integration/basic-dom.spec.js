describe('Basic DOM Tests', () => {
  context('Desktop', () => {
    beforeEach(() => {
      cy.viewport(1440, 810);
    });
    describe('When user visits home', () => {
      beforeEach(() => {
        cy.visit('/');
      });

      it('should render header', () => {
        shortly('header', 'rgb(53, 50, 62)');
      });

      it('should render main', () => {
        cy.get('[class^=H1]').contains('More than just shorter links');
        cy.get('[class^=H3]').contains(
          'Build your brand`s recognition and get detailed insights on how your links are performing.'
        );
        cy.get('[class^=PositionedImage]').should(
          'have.css',
          'height',
          '428px'
        );
        cy.get('[class^=PositionedImage]').should('have.css', 'width', '651px');
      });

      it('should render two buttons in sections', () => {
        cy.get('[class^=Section] > [class^=Button]')
          .should('exist')
          .should('have.length', 2)
          .each(($button, index) => {
            cy.wrap($button)
              .should('be.enabled')
              .should('have.text', 'Get Started');
          });
      });

      it('should render statistics', () => {
        cy.get('#statistics [class^=H2]').contains('Advanced Statistics');
        cy.get('#statistics [class^=P]').contains(
          'Track how your links are performing across the web with our advanced statistics dashboard.'
        );
      });

      it('should render call to action', () => {
        cy.get('#calltoaction [class^=H2]').contains('Boost your links today');
      });

      it('should render footer', () => {
        shortly('footer', 'rgb(255, 255, 255)');
      });

      it('should render Shortener', () => {
        cy.get('#shortener').should('exist');
        cy.get('[class^=Input]')
          .invoke('attr', 'placeholder')
          .should('eq', 'Shorten a link here...');
        cy.get('#shortener [class^=Button]')
          .should('be.enabled')
          .should('have.text', 'Shorten It!');
      });
    });
  });
});

function shortly(headerFooter, color) {
  cy.get(`${headerFooter} > [class^=Logo]`)
    .contains('Shortly')
    .should('have.css', 'font-family', `"Source Sans Pro", sans-serif`)
    .should('have.css', 'font-size', '32px')
    .should('have.css', 'color', color);
}
