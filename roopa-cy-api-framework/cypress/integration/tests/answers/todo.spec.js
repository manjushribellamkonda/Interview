import { TodoPage } from "../../../page-objects";


const todoPage = new TodoPage();

describe('To-do testing', function () {
  before(function () {
    cy.fixture('main').then(function (data) {
      this.todos = data; 
    })

    cy.visit('http://todomvc-app-for-testing.surge.sh/');
  });

  it('should add new todos and persist them in the storage', function() {
    for (let todo of this.todos) {
      cy.get(todoPage.newTodo).type(todo).type('{enter}')

    }
    
    cy.get(todoPage.createdTodos)
      .then(function (todoLabel) {
        cy.expect(todoLabel.length).to.equal(this.todos.length);
      });



  });

  it('should mark todos as completed and save it', function() {

    cy.get(todoPage.completeTodos).click({ multiple: true });

  });

  // TODO: Write the delete test case.
  it('should delete todos and remove it ' , function() {
    cy.get(todoPage.completeTodos).should('exist');
    cy.get(todoPage.buttonclearCompleted).click();
  });


  it('should not display todos after a delete' , function() {
    cy.get(todoPage.completeTodos).should('not.exist');
  });
})