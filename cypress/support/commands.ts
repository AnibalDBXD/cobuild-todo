import '@testing-library/cypress/add-commands';
import { loginWithEmail } from "../../firebase";

Cypress.Commands.add('login', () => {
  return loginWithEmail('usertest@test.com', '123123');
});