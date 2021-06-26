const fs = require("fs").promises;
const { error } = require("console");
const path = require('path');
const { v4 } = require('uuid');

// Раскомментируй и запиши значение
const contactsPath = path.join(__dirname, "db/contacts.json");

// TODO: задокументировать каждую функцию 
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
      error.message = "Cannot read contacts file";
      throw error;
  }
}

async function getContactById(contactId) {
  try {
    const allContacts = await listContacts();
    const findContact = allContacts.find(item => item.id === contactId);
    if(!findContact) {
      throw new Error("Id incorrect");
    }
    return findContact;
  } catch (error) {
      throw error;
  }
}
  
async function removeContact(contactId) {
  try {
    const allContacts = await listContacts();
    const index = allContacts.findIndex(item => item.id === contactId);
    if(index === -1){
        throw new Error("contactId incorrect");
    }
    const delContact = allContacts.filter(item => item.id !== contactId);
    const str = JSON.stringify(delContact);
    await fs.writeFile(contactsPath, str);
  } catch (error) {
      throw error;     
  }
}
  
async function addContact(name, email, phone) {
  const newContact = {name, email, phone, id: v4()};
  const allContacts = await listContacts();
  try {
    const newContacts = [...allContacts, newContact];
    const str = JSON.stringify(newContacts);
    await fs.writeFile(contactsPath, str);
    return newContact;
  } catch (error) {
      throw error;      
  }

}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
  
  
  