//your JS code here. If required.
function update(){
	return new Promise(resolve => {
		setTimeout(()=>{
			resolve("Hello, World!");
		},1000)
	})
}

let val = update().then((res) => {
	let div = document.getElementById("output");
	div.textContent= res;
})
