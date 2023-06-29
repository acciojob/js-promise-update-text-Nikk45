//your JS code here. If required.
function update(){
	return new Promise(resolve => {
		setTimeout(()=>{
			resolve("Hello, world!");
		},1000)
	})
}

let val = update().then((res) => {
	let div = document.getElementById("output");
	div.textContent= res;
})
