// Defining the first test suite
describe("Address Book", function() {
    let addressBook,
          thisContact;

    beforeEach(function() {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });
    
    it ("should be able to add a contact", function() {
            addressBook.addContact(thisContact);

            expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it ("should be able to delete a contact", function() {
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    })
})

// Defining the second test suite (Simulated Asynchronous Test)
describe("Async Address Book", function() {
    const addressBook = new AddressBook();

    beforeEach(function(done) {
        addressBook.getInitialContacts(function() {
            done(); // Signal function that asynchronous task is done and it is possible to proceed with testing
        });
    });

    it("should grab initial contacts", function(done) { 
        expect(addressBook.initialComplete).toBe(true);
        done();
    })
})