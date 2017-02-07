/**
 * Created by zhannalibman on 06/02/2017.
 */
"use strict";

(function ($) {
    var contactList = new List();

    createUI();

    function createUI() {
        var listDiv = $("#list");
        var btnAddContact = $("#btnAddContact");
        btnAddContact.click();
        var contacts = contactList.getContacts();
        var list = $("<ul></ul>");
        for (var i = 0; i < contacts.length; i++){
            displayNewContact(contacts[i], i);
        }
        listDiv.append(list);
    }

    function getInputs(){
        var enteredName = $("#name").val();
        var enteredNumber = $("#number").val();
        if (enteredName.length > 0){
            addContactToList(enteredName, enteredNumber);
        }
    }
    function addContactToList(name, telephoneNumber){
        var newContact = contactList.addNewContact(name, telephoneNumber);
        if (newContact != null){
            displayNewContact(newContact, contactList.getContacts().length - 1);
        }
        else {
            alert("Invalid name or telephone number");
        }
    }

    function displayNewContact(contact, index) {
        var template = `<li>
                            <table>
                                <tr>
                                    <td class="nameField">name</td>
                                    <td class="numberField">number</td>
                                    <td class="btnDelete">Delete</td>
                                </tr>
                            </table>
                        </li>`;
        var listElement = $(template);
        listElement.attr("data-id", index);
        $("ul").append(listElement);

    }

    function deleteContact(index) {

    }
})(jQuery);
