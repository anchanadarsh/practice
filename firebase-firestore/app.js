let listWrap = document.querySelector('#cafe-list');
let form = document.querySelector('#add-cafe-form');

function displayList(doc) {
	let listItem = document.createElement('li');
	let name = document.createElement('span');
	let city = document.createElement('span');
	let cross = document.createElement('div');

	listItem.setAttribute('data-id', doc.id);
	name.textContent = doc.data().name;
	city.textContent = doc.data().city;
	cross.textContent = "x";

	listItem.appendChild(name);
	listItem.appendChild(city);
	listItem.appendChild(cross);

	listWrap.appendChild(listItem);
	
	//deleting items
	cross.addEventListener('click',(e) => {
		let id = e.target.parentElement.getAttribute('data-id');
		db.collection('cafes').doc(id).delete();
	})
}

db.collection('cafes').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		displayList(doc);
	});
})

form.addEventListener('submit', (e) => {
	e.preventDefault();
	db.collection('cafes').add({
		name: form.name.value,
		city: form.city.value
	})

	form.name.value = "";
	form.name.city = "";
})
