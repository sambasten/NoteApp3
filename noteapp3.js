function NotesApplication(author){
	this.author = author;
	this.noteList = [];	

/** Fuction to takes note content and 
* adds to the note list object
*/
    this.create = function (note_content) {
    	if(note_content == ' ')
    		{ 
    			return'Empty strings not allowed'
    		}
	  	else{
	  		this.noteList.push(note_content);}
		
};

/** function to list out notes in noteList
*/
	this.list = function(){
	for (var note_id in this.noteList){
		console.log('Note ID: '+ note_id + '\n'
                    +this.noteList[note_id] + '\n'
                    +'By Author ' + this.author);
	}
};
/**function to get the ID of the note and 
*return the content of that index as a string
*/
	this.toGet = function(note_id){
	if(!this.noteList[note_id]){
		return  'not valid, enter an integer';
	}
	return this.noteList[note_id];
};

/**function to search text
*/
	this.search = function(search_text){
		for(var note_id in this.noteList){ //loop through noteList to search for the text
			if (this.noteList[note_id].includes(search_text)){
				console.log('Showing result for search: ' + '['+search_text+']' + '\n'
                             + 'Note ID: ' + note_id + '\n'
                             + this.noteList[note_id] + '\n'
                             +'By Author ' + this.author);
			}
			else {return 'Not Found'} //returns this if the text is not found in the noteList
		}
};

/**function to delete note id
*/
	this.toDelete = function(note_id){
		this.noteList.splice(note_id,1); 
			return this.noteList;
};

/**function to edit note content
*/
	this.edit = function(note_id, new_content){
		this.noteList[note_id] = new_content; //value of noteLists noteid is assigned to new_content
			return this.noteList; //return notelist
};
}


module.exports = NotesApplication