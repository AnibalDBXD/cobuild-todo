describe('Login with Email and password', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login to visit /todos", () => {
    cy.findByPlaceholderText("email").type("usertest@test.com");
    cy.findByPlaceholderText("password").type("123123");
    cy.findByText("Log in").click();

    cy.url().should("contain", "/todo");

    cy.findAllByRole("button").findByText("Sign out").click();
  });

  it("Login with a non existen account", () => {
    cy.findByPlaceholderText("email").type("this.user.should.not.exist@nono.com");
    cy.findByPlaceholderText("password").type("123123");
    cy.findByText("Log in").click();

    cy.url().should("not.contain", "/todo");
    cy.findByLabelText("error");
  });
});