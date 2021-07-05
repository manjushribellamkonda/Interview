/// <reference types="cypress" />

context("Cypress API Posts Automation", () => {
  it("Verify the API response has always id=1", () => {
    cy.getCypressPostsResponseWithId(1).then((response) => {
      expect(response.status).to.be.eq(200);
      response.body.forEach((user) => {
        expect(user.id).to.be.eq(1);
        expect(user).to.have.property("userId");
        expect(user).to.have.property("title");
        expect(user).to.have.property("body");
      });
    });
  });

  it("Verify the API response has always userId=4", () => {
    cy.getCypressPostsResponseWithUserId(4).then((response) => {
      expect(response.status).to.be.eq(200);
      response.body.forEach((user) => {
        expect(user.userId).to.be.eq(4);
        expect(user).to.have.property("id");
        expect(user).to.have.property("title");
        expect(user).to.have.property("body");
      });
    });
  });

  it("Verify the API response has always title=magnam ut rerum iure", () => {
    cy.getCypressPostsResponseWithTitle("magnam ut rerum iure").then(
      (response) => {
        expect(response.status).to.be.eq(200);
        response.body.forEach((user) => {
          expect(user.title).to.be.eq("magnam ut rerum iure");
          expect(user).to.have.property("userId");
          expect(user).to.have.property("title");
          expect(user).to.have.property("body");
        });
      }
    );
  });

  it("Verify the API response has always id=6 & userId=1", () => {
    cy.getCypressPostsResponseWithIdAndUserId(6, 1).then((response) => {
      expect(response.status).to.be.eq(200);
      response.body.forEach((user) => {
        expect(user.id).to.be.eq(6);
        expect(user.userId).to.be.eq(1);
        expect(user).to.have.property("title");
        expect(user).to.have.property("body");
      });
    });
  });

  it("Verify the API response has always userId=4 & title=enim quo cumque", () => {
    cy.getCypressPostsResponseWithWithUserIdAndTitle(
      4,
      "dolorem dolore est ipsa"
    ).then((response) => {
      expect(response.status).to.be.eq(200);
      response.body.forEach((user) => {
        expect(user.id).to.be.eq(4);
        expect(user.title).to.be.eq("dolorem dolore est ipsa");
        expect(user).to.have.property("userId");
        expect(user).to.have.property("body");
      });
    });
  });

  it("Verify the API response has always id=41, userId=4 & title=enim quo cumque", () => {
    cy.getCypressPostsResponseWithIdUserIdAndTitle(
      41,
      5,
      "non est facere"
    ).then((response) => {
      expect(response.status).to.be.eq(200);
      response.body.forEach((user) => {
        expect(user.id).to.be.eq(41);
        expect(user.userId).to.be.eq(5);
        expect(user.title).to.be.eq("non est facere");
        expect(user).to.have.property("body");
      });
    });
  });
});
