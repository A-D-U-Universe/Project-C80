var guest_list_array = [];
function submit(){
var GuestName = document.getElementById("Name_input").value;
guest_list_array.push(GuestName);
console.log(GuestName);
console.log(guest_list_array)
var length = guest_list_array.length;
console.log(length)
}

function sort(){
    guest_list_array.sort();
    var i = guest_list_array.join("<br>");
    console.log(guest_list_array);
    document.getElementById("sorted_list").innerHTML = i;
}

function search(){
    var S = document.getElementById("search_input").value;
    var found = 0;
    var j ;
    for(j = 0; j < guest_list_array.length; j++){
        if(S == guest_list_array[j]){
            found = found + 1;
        }
    }
    document.getElementById("name_found").innerHTML = "name found " + found + " times";
    console.log("name found " + found + " times");
}

function show(){
    document.getElementById("display_names").innerHTML = guest_list_array;
}


