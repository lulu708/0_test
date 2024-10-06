document.getElementById('clear').addEventListener('click', function() {
  document.getElementById('todo-list').innerHTML = '';
});

document.getElementById('add').addEventListener('click', function() {
  const newItem = document.getElementById('new-item').value;
  if (newItem) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input type="checkbox"> ${newItem}`;
    document.getElementById('todo-list').appendChild(listItem);
    document.getElementById('new-item').value = '';  // 입력 필드 초기화
  }
});
