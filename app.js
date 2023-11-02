
let list = [];
let userInput = prompt("Enter your options")
while(true){
    if(userInput=="list"){
        for(let i = 0; i<list.length;i++){
            console.log(`${i} : ${list[i]}`);
        }
        console.log("----------------");
    }
    else if(userInput=="add"){
        let listToAdd = prompt("Enter the task to add");
        list.push(listToAdd);
        alert("Task has added sucessfully");
    }
    else if(userInput=="delete"){
        let listToDelete= prompt("Enter the task index to delete");
        list.splice(listToDelete,1);
        console.log("deleted");
    }
    userInput = prompt("Enter your options")
}