const fs = require("fs").promises;
const { error } = require("console");
const path = require('path');

// Раскомментируй и запиши значение
const contactsPath = path.join("db", "contacts.json");

const file = fs.readFile(contactsPath, "utf-8");
// TODO: задокументировать каждую функцию
function listContacts() {
  file.then(data => data)
    .catch(error => console.log(error));
    // ...твой код
  }
  
  function getContactById(contactId) {
    file.then(data => console.table(JSON.parse(data)));
    //(data => data)
    //console.log(data);
    
    // ...твой код .includes(contactId)
  }
  
  function removeContact(contactId) {
    // ...твой код node contacts.js
  }
  
  function addContact(name, email, phone) {
    // ...твой код
  }

  listContacts();
  getContactById();