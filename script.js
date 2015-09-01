//this solution works and I believe it will be an O(n) operation in worse case as we are making only 1 loop
//through our array of emails. We check every element and see if it's a key in our hash. This is assuming that looking up a key in a hash is way
//faster than looping through another array with indexOf() ! 
//This solution I think would work well (under 1 second) for a data set of 100,000. I was thinking about a different 
//way to approach this problem with 1,000,000 emails or 1 Billion and have to spend more time on it. 
//I cant think of a faster way right now, but there could be one. You have to loop through the main array at least 1 
//full time and with 1 Billion, that would take longer than 1 second I imagine...

function duplicateEmails(emailArray){
	//initialize a new hash object
    var scanned = {};
    //in order not to break a loop when you are splicing, you have to start at the end of the array and decrement i
    //if you increment, as you splice, you are changing the index of everything after that element, and you are skipping
    //an element every time
    for(var i = emailArray.length-1; i >= 0 ; i--){
    	//check if the current email exists as a key in our hash
    	if(scanned[emailArray[i]]){
    		//if it does, take it out of our array. 
            emailArray.splice(i, 1);
    	}else{
    		//if it doesnt exist, insert the email into our hash
    		scanned[emailArray[i]] = 1;
    	}
    }
    
    return emailArray;
}

var emails = ['leviiscool@gmail.com', 'wife@gmail.com', 'leviiscool@gmail.com', 'leviiscool@gmail.com', 'wife@gmail.com',
'mom@ross.com', 'wife@gmail.com', 'leviiscool@gmail.com', 'dad@ross.com'];


console.log(duplicateEmails(emails));