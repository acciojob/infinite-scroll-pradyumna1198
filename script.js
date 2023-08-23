//your code here!

document.addEventListener(function() {
	const infi = document.getElementById("infi-list");

	for(let i=1;i<=10;i++){
		const listItem =   document.createElement("li");
		listItem.textContent = `Item ${i}`;
		infi.appendChild(listItem);
	}

	function addItem(){
		for(let i=1;i<=2;i++){
			const listItem = document.createElement("li");
			listItem.textContent = `Item ${i}`;
			infi.appendChild(listItem);
		}
	}

	infi.addEventListener(function(){
		const scrolltop = infi.scrollTop;
		const scrollHeight= infi.scrollHeight;
		const clientHeight = infi.clientHeight;


		if(scrolltop + clientHeight >= scrollHeight){
			addMoreItems();
		}
	});
});

