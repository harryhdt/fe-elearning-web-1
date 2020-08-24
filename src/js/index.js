let inpAll = document.querySelectorAll("input")
inpAll.forEach(inp => {
	if(inp.value != ""){
		inp.parentNode.querySelector("span").style.cssText = "top:-12px;background:#fff;font-size:13px"
	}
	inp.addEventListener('focus', (e) => {
		e.target.parentNode.querySelector("span").style.cssText = "top:-12px;background:#fff;font-size:13px"
	})
	inp.addEventListener('blur', (e) => {
		if(e.target.value == ""){
			e.target.parentNode.querySelector("span").style.cssText = ""
		}
	})
})

let togglePassBtnAll = document.querySelectorAll("label > div")
let togglePass = [];
for(let i = 0; i < togglePassBtnAll.length; i++){
	togglePass.push(false)
}
togglePassBtnAll.forEach((togglePassBtn, i) => {
	let enableSelect = () => {
		setTimeout(()=>{
			togglePassBtn.parentNode.querySelector("input").selectionStart = togglePassBtn.parentNode.querySelector("input").selectionEnd
		}, 1)
	}
	togglePassBtn.addEventListener("click", (e) => {
		if(!togglePass[i]){
			console.log("text" + i)
			togglePassBtn.querySelector("svg ellipse").style.fill = "#6577FF"
			togglePassBtn.parentNode.querySelector("input").setAttribute("type", "text")
			enableSelect();
			togglePass[i] = true
		} else {
			console.log("password" + i)
			togglePassBtn.querySelector("svg ellipse").style.fill = "#C4C4C4"
			togglePassBtn.parentNode.querySelector("input").setAttribute("type", "password")
			enableSelect();
			togglePass[i] = false
		}
	})
})