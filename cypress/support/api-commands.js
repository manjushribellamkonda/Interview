Cypress.Commands.add("getCypressPostsResponseWithId", (id) => {
  cy.request({
    method: "GET",
    url: `${Cypress.env("cypress_posts_api")}?id=${id}`,
  });
});

Cypress.Commands.add("getCypressPostsResponseWithUserId", (userId) => {
  cy.request({
    method: "GET",
    url: `${Cypress.env("cypress_posts_api")}?userId=${userId}`,
  });
});

Cypress.Commands.add("getCypressPostsResponseWithTitle", (title) => {
  cy.request({
    method: "GET",
    url: `${Cypress.env("cypress_posts_api")}?title=${title}`,
  });
});

Cypress.Commands.add("getCypressPostsResponseWithIdAndUserId", (id, userId) => {
  cy.request({
    method: "GET",
    url: `${Cypress.env("cypress_posts_api")}?id=${id}&userId=${userId}`,
  });
});

Cypress.Commands.add(
  "getCypressPostsResponseWithWithUserIdAndTitle",
  (userId, title) => {
    cy.request({
      method: "GET",
      url: `${Cypress.env(
        "cypress_posts_api"
      )}?userId=${userId}&title=${title}`,
    });
  }
);

Cypress.Commands.add(
  "getCypressPostsResponseWithIdUserIdAndTitle",
  (id, userId, title) => {
    cy.request({
      method: "GET",
      url: `${Cypress.env(
        "cypress_posts_api"
      )}?id=${id}&userId=${userId}&title=${title}`,
    });
  }
);
