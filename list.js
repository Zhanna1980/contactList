/**
 * Created by zhannalibman on 06/02/2017.
 */

function List(contacts) {
    this._contacts = contacts || [];
}

List.prototype.getContacts = function () {
    return this._contacts;
};

List.prototype.addNewContact = function (name, telephoneNumber) {
    try {
        var newContact = new Contact(name, telephoneNumber);
        this._contacts.push(newContact);
        return newContact;
    } catch(err) {
        console.error(err.message);
        return null;
    }
};

List.prototype.deleteContactByIndex = function (index) {
    if (index >= 0 && index < this._contacts.length){
        delete this._contacts[index];
    }
};


