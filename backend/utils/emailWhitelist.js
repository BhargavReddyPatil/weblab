const whitelistedEmails = new Set();

const whitelistEmail = (email) => {
  whitelistedEmails.add(email);
};

const bulkWhitelistEmails = (emails) => {
  emails.forEach((email) => whitelistedEmails.add(email));
};

const isEmailWhitelisted = (email) => {
  return whitelistedEmails.has(email);
};

module.exports = { whitelistEmail, bulkWhitelistEmails, isEmailWhitelisted };