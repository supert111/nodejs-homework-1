const fs = require("fs").promises;
const path = require('path');

const file = fs.readFile("db/contacts.json", "utf-8");

file.then(data => console.log(data));

// Раскомментируй и запиши значение
  const url = 'C:\Users\Админ\Documents\GitHub\nodejs-homework-1\contacts.js';
  const contactsPath = path.win32.basename(url);

// TODO: задокументировать каждую функцию
function listContacts() {
    // ...твой код
  }
  
  function getContactById(contactId) {
    // ...твой код
  }
  
  function removeContact(contactId) {
    // ...твой код
  }
  
  function addContact(name, email, phone) {
    // ...твой код
  }
