
describe('To-do testing', function () {
  before(function () {
    cy.fixture('main').then(function (data) {
      this.todos = data; 
    })

    cy.visit('http://todomvc-app-for-testing.surge.sh/');
  });

  it('should add new todos and persist them in the storage', function() {
    for (let todo of this.todos) {
      cy.get('input.new-todo').type(todo).type('{enter}')

    }
    
    cy.get('div.view')
      .then(function (todoLabel) {
        cy.expect(todoLabel.length).to.equal(this.todos.length);
      });



  });

  it('should mark todos as completed and save it', function() {

    cy.get('input.toggle').click({ multiple: true });

  });

  // TODO: Write the delete test case.
  it('should delete todos and remove it ' , function() {
    cy.get('input.toggle').should('exist');
    cy.get('button.clear-completed').click();
  });


  it('should not display todos after a delete' , function() {
    cy.get('input.toggle').should('not.exist');
  });
})