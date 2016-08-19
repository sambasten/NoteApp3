var noteapp3 = require('../noteapp3');
var expect = require('chai').expect;



//Section for toGet method
describe("The toGet function ", function() {

  it("should not accept strings only integers", function() {
    var getId = new noteapp3('Samuel');
    expect(getId.toGet("any string")).to.equal("Strings are not valid Input");
  });

it("should return the content of a note array given the index ", function(){
  before(function(){
    var getId = new noteapp3("Samuel");
    getId.create("harry");
	expect(getId.toGet(0)).to.equal("harry");
  });

  });

});


//Section for create method

describe("The create content function", function() {
  it("Should not take empty content and add it to noteList ", function(){
    var getContent = new noteapp3("Samuel");
    expect(getContent.create(" ")).to.equal("Cannot accept empty inputs");
  });
});


//Section for list method

describe("The list function lists content of noteList ", function() {
  it("Should list out note_id, the content and authors ", function(){
    before(function(){
      var getList = new noteapp3("ListFxnTest");
      getList.create("JK Rowling");
      expect(getList.list(0)).to.equal(true);
      expect(getList.list(0)).to.equal("JK Rowling");
      expect(getList.list(0)).to.equal("ListFxnTest");
    });

  });

});


//Section for searching a text in noteList

describe("The search function", function() {
  it("Should not accept an empty search string", function() {
    var getSearch = new noteapp3("Venus");
    expect(getSearch.search(" ")).to.equal("Empty string is not a valid input");
  });

  it("should return all notes content with the searched text present  within it", function(){
    before(function(){
      var getSearch = new noteapp3("Wayne");
      getSearch.create(" Harry Porter is a book written by JK Rowling");
      expect(getSearch.search("book")).to.equal("Harry Porter is a book written by JK Rowling");
    });

    });
});


//Section for deleting notes from noteList given note_id 

describe("The delete function", function() {
  it("should not accept a string note_id", function() {
    var getDelete = new noteapp3("Abubakar");
    expect(getDelete.toDelete("name")).to.equal("Note id value not valid");
  });

  it("should delete noteList value given note_id from notelist ", function(){
    before(function(){
      var getDelete= new noteapp3(" Maxwell");
      getDelete.create("another new content");
      expect(getDeleteNote.toDelete(0)).to.equal(true);
    });

    });
});



//Section for editing noteList given note_id and new noteContent

describe("The editNote function", function() {
  it("should not accept a string note_id", function() {
    var getEdit = new noteapp3(" Kessy");
    expect(getEdit.edit("Jose Mourinho ", "Sabatical")).to.equal("Note Id is not in valid format");
  });

  it("Should Edit corresponding Note of note_id given a valid note_id and new note content ", function(){
    before(function(){
      var getEdit = new noteapp3("Last One");
      getEdit.create("This is my last test");
      expect(getEdit.edit(0,"I just found that its not")).to.equal(true,"I just found that its not");
    });

    });
});


