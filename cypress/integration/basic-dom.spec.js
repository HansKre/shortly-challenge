describe('Basic DOM Tests', () => {
  context('Desktop', () => {
    beforeEach(() => {
      cy.viewport(1440, 810);
    });
    describe('When user visits home', () => {
      beforeEach(() => {
        cy.visit('/');
      });

      it('should render header correctly', () => {
        cy.get('header > [class^=Logo]')
          .contains('Shortly')
          .should('have.css', 'font-family', `"Source Sans Pro", sans-serif`)
          .should('have.css', 'font-size', '32px');
      });

      it('should render main correctly', () => {
        cy.get('[class^=H1]').contains('More than just shorter links');
        cy.get('[class^=H3]').contains(
          'Build your brand`s recognition and get detailed insights on how your links are performing.'
        );
      });

      it('should render two buttons', () => {
        cy.get('[class^=Section] > [class^=Button]')
          .should('exist')
          .should('have.length', 2)
          .each(($button, index) => {
            cy.wrap($button)
              .should('be.enabled')
              .should('have.text', 'Get Started');
          });
      });
    });
  });
});
