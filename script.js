
let listItems = ["HTML", "CSS", "javaScript","Node.js","DataBase","React.js"];
let listBtn = document.querySelector('.btn');
let listBox = document.getElementById('listBox');


listBtn.addEventListener('click', () =>{

  let underList = document.createElement('ul');
  listItems.forEach(item => {
    let list = document.createElement('li');
    list.innerHTML = item;
    underList.append(list);
  });
  listBox.appendChild(underList);
});