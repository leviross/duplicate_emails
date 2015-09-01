function duplicateEmails(emailArray){
    var scanned = {};
    
    emailArray.forEach(function(currentEmail, index){
    	if(scanned[currentEmail]){
            emailArray.splice(index, 1);
        }else{
         	scanned[currentEmail] = 1;
        }
    });
    return emailArray;
}

var emails = ['levross@gmail.com', 'sefiraross@gmail.com', 'levross@gmail.com'];


console.log(duplicateEmails(emails));