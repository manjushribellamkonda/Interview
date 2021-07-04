Cypress.Commands.add("verifyPageTitle", (title) => {
  cy.get(".header > h1").should("have.text", title);
});

Cypress.Commands.add("addToDoItems", (toDoItems) => {
  toDoItems.forEach((toDoItem) => {
    cy.get(".new-todo").type(`${toDoItem}{enter}`);
  });
});

Cypress.Commands.add("verifyToDoItemsList", (toDoItems) => {
  toDoItems.forEach((toDoItem) => {
    cy.get(".todo-list > li").should("contain.text", toDoItem);
  });
});

Cypress.Commands.add("verifyToDoListIsEmpty", () => {
  cy.get(".todo-list > li").should("not.exist");
});

Cypress.Commands.add("verifyListCountStatus", (listCountStatus) => {
  cy.get(".todo-count").should("have.text", listCountStatus);
});

Cypress.Commands.add("verifyListCountStatusIsNotPresent", () => {
  cy.get(".todo-count").should("not.exist");
});

Cypress.Commands.add("removeToDoItems", (toDoItems) => {
  toDoItems.forEach((toDoItem) => {
    cy.contains(toDoItem)
      .parent()
      .find("button[class=destroy]")
      .click({ force: true });
  });
});

Cypress.Commands.add("checkActiveToDoItems", (toDoItems) => {
  toDoItems.forEach((toDoItem) => {
    cy.contains(toDoItem).parent().find("input[type=checkbox]").check();
  });
});

Cypress.Commands.add("unCheckActiveToDoItems", (toDoItems) => {
  toDoItems.forEach((toDoItem) => {
    cy.contains(toDoItem).parent().find("input[type=checkbox]").uncheck();
  });
});

Cypress.Commands.add("verifyCompletedItems", (toDoItems) => {
  toDoItems.forEach((toDoItem) => {
    cy.get(".completed").should("contain.text", toDoItem);
  });
});

Cypress.Commands.add("clickTab", (tabName) => {
  cy.contains(tabName).click();
});

Cypress.Commands.add("clickClearCompleted", () => {
  cy.contains("Clear completed").click();
});

Cypress.Commands.add("verifyClearCompletedNotExist", () => {
  cy.contains("Clear completed").should("not.exist");
});

Cypress.Commands.add(
  "verifyNumberOfCompletedToDoItems",
  (numberOfToDoItems) => {
    cy.get(".completed").should("have.length", numberOfToDoItems);
  }
);

Cypress.Commands.add("editTodoItem", (existingToDoItem, newToDoItem) => {
  cy.contains(existingToDoItem).dblclick();
  cy.get(".editing").clear().type(`${newToDoItem}{enter}`);
});
