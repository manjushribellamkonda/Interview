/// <reference types="cypress" />

import {
  TODOS,
  BUY_GROCERIES,
  PAY_RENT,
  WATER_THE_PLANTS,
  BUY_FRUITS,
  ALL,
  ACTIVE,
  COMPLETED,
  TWO_ITEMS_LEFT,
  THREE_ITEMS_LEFT,
} from "../../fixtures/todo-mvc-app";

context("To-Do Mvc Automation", () => {
  describe("Sanity Automation", () => {
    beforeEach("Navigate to to-do mvc app", () => {
      cy.visit("");
    });

    it("Verify the title of the page", () => {
      cy.verifyPageTitle(TODOS);
    });

    it("Add to-do items", () => {
      cy.addToDoItems([BUY_GROCERIES, PAY_RENT, WATER_THE_PLANTS]);
      cy.verifyToDoItemsList([BUY_GROCERIES, PAY_RENT, WATER_THE_PLANTS]);
      cy.verifyListCountStatus(THREE_ITEMS_LEFT);
    });
  });

  describe("Regression Automation", () => {
    beforeEach("Add to-do items", () => {
      cy.visit("");
      cy.addToDoItems([BUY_GROCERIES, PAY_RENT, WATER_THE_PLANTS]);
      cy.verifyToDoItemsList([BUY_GROCERIES, PAY_RENT, WATER_THE_PLANTS]);
      cy.verifyListCountStatus(THREE_ITEMS_LEFT);
    });

    it("Remove to-do items", () => {
      cy.removeToDoItems([BUY_GROCERIES]);
      cy.verifyToDoItemsList([PAY_RENT, WATER_THE_PLANTS]);
      cy.verifyListCountStatus(TWO_ITEMS_LEFT);
      cy.removeToDoItems([WATER_THE_PLANTS, PAY_RENT]);
      cy.verifyToDoListIsEmpty();
      cy.verifyListCountStatusIsNotPresent();
    });

    it("Filter Complete to-do items", () => {
      cy.checkActiveToDoItems([BUY_GROCERIES]);
      cy.verifyCompletedItems([BUY_GROCERIES]);
      cy.verifyListCountStatus(TWO_ITEMS_LEFT);
      cy.clickTab(COMPLETED);
      cy.verifyToDoItemsList([BUY_GROCERIES]);
      cy.clickTab(ALL);
      cy.verifyToDoItemsList([BUY_GROCERIES, PAY_RENT, WATER_THE_PLANTS]);
      cy.clickClearCompleted();
      cy.verifyToDoItemsList([PAY_RENT, WATER_THE_PLANTS]);
      cy.verifyClearCompletedNotExist();
    });

    it("Filter Active to-do items", () => {
      cy.checkActiveToDoItems([PAY_RENT]);
      cy.verifyListCountStatus(TWO_ITEMS_LEFT);
      cy.clickTab(ACTIVE);
      cy.verifyToDoItemsList([BUY_GROCERIES, WATER_THE_PLANTS]);
      cy.clickTab(ALL);
      cy.verifyToDoItemsList([BUY_GROCERIES, PAY_RENT, WATER_THE_PLANTS]);
      cy.clickClearCompleted();
      cy.verifyToDoItemsList([BUY_GROCERIES, WATER_THE_PLANTS]);
      cy.verifyClearCompletedNotExist();
    });

    it("Uncheck Active to-do item", () => {
      cy.checkActiveToDoItems([BUY_GROCERIES]);
      cy.verifyCompletedItems([BUY_GROCERIES]);
      cy.verifyNumberOfCompletedToDoItems(1);
      cy.unCheckActiveToDoItems([BUY_GROCERIES]);
      cy.verifyNumberOfCompletedToDoItems(0);
    });

    it("Edit to-do item", () => {
      cy.editTodoItem(BUY_GROCERIES, BUY_FRUITS);
      cy.verifyToDoItemsList([BUY_FRUITS, PAY_RENT, WATER_THE_PLANTS]);
    });
  });
});
