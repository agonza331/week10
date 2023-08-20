let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1); /*this starts at 1, table header is 0*/
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-show').value;   //set the first value in the row//
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth()}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('new-season').value;
    row.insertCell(3).innerHTML = document.getElementById('new-episodes').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteBUtton(id++));
    document.getElementById('new-show').value = '';
    document.getElementById('new-season').value = '';
    document.getElementById('new-episodes').value = '';
});


/*creates a button, binds a method/function to that buttons on click/
then returns that button to append child to our actions to our 4th row "actions"*/
function createDeleteBUtton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Completed';
    btn.onclick = () => { /*capsulate, tie id to that row for button*/
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`) /*from console id*/
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn; 
}



