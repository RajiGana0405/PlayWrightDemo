const common = `
  --require tests/features/stepdefinition/login.js
  `;

module.exports = {
  default: `${common} tests/features/*.feature`
};

