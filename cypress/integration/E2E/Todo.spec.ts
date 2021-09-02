describe('Todo', () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login();
  });
  it("Should be in /todo", () => {
    cy.url().should("contain", "/todo");
  });
  it("Create task and read it", () => {
    cy.findByPlaceholderText("Create a task").type("Task by tests");
    cy.findByLabelText("Create task").click();

    cy.findByText("Task by tests");
  });
  it("Create task and delete it", () => {
    const taskToDelete = "ThisTaskShouldNotBeHere";
    cy.findByPlaceholderText("Create a task").type(taskToDelete);
    cy.findByLabelText("Create task").click();
    cy.findByTestId(taskToDelete).findByLabelText("Delete").click();

    cy.findByText(taskToDelete).should("not.exist");
  });

  it("Create task and edit it", () => {
    const taskToEdit = "ThisTaskWouldBeEdited";
    const editedTask = "Edited task";
    cy.findByPlaceholderText("Create a task").type(taskToEdit);
    cy.findByLabelText("Create task").click();

    cy.findByTestId(taskToEdit).findByLabelText("Edit").click();
    cy.findByTestId(taskToEdit)
      .findByPlaceholderText("new Task text")
      .type(editedTask);
    cy.findByTestId(taskToEdit).findByLabelText("Submit").click();

    cy.findByText(editedTask);
    cy.findByTestId(editedTask).findByLabelText("Delete").click();
  });

  it("Create task and check it", () => {
    const taskToCheck = "ThisTaskWouldBeCheked";
    cy.findByPlaceholderText("Create a task").type(taskToCheck);
    cy.findByLabelText("Create task").click();

    cy.findByTestId(taskToCheck).findByRole("checkbox").click({ force: true });
    cy.findByTestId(taskToCheck).findByRole("checkbox").should("be.checked");

    cy.findByTestId(taskToCheck).findByRole("checkbox").click({ force: true });
    cy.findByTestId(taskToCheck).findByRole("checkbox").should("not.be.checked");
    cy.findByTestId(taskToCheck).findByLabelText("Delete").click();
  });
});