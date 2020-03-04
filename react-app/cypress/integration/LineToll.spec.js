describe('Line tool test', () => {
   it('should draw single line', () => {
      cy.visit('/');
      cy.contains('LINE').click();
      cy.get('#canvas').click('left');
      cy.get('#canvas').click('center');
      cy.get('#canvas').matchImageSnapshot();
   });

   it('should attach line end to existing point', () => {
      cy.visit('/');
      cy.contains('LINE').click();
      cy.get('#canvas').click(200, 100);
      cy.get('#canvas').click(200, 200);
      cy.get('#canvas').click(100, 200);
      cy.get('#canvas').click(200, 195);
      cy.get('#canvas').matchImageSnapshot();
   })
});