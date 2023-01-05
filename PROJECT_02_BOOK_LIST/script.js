/*  
1.SELECT DOM
2.Take Value from the input field
3.Form validation
4.Add book to the list
*/

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year =  document.querySelector('#year');
const btn = document.querySelector('#btn');
const tableBody = document.querySelector('#book-list');

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const titleValue = title.value;
    const authorValue = author.value;
    const yearValue = year.value;
    if(titleValue === '' || authorValue === '' || yearValue === ''){
        alert("PLEASE PROVIDE THE MENTIONED INFO !")
    }else{
        const tr = document.createElement('tr');
        
        const newTitle = document.createElement('th');
        newTitle.innerHTML = titleValue;
        tr.appendChild(newTitle);

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = authorValue;
        tr.appendChild(newAuthor);

        const newYear = document.createElement('th');
        newYear.innerHTML = yearValue;
        tr.appendChild(newYear);

        tableBody.appendChild(tr);

    }
})