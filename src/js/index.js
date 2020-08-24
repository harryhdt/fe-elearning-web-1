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

let togglePassBtnAll = document.querySelectorAll("label > div svg")
let togglePass = [];
for(let i = 0; i < togglePassBtnAll.length; i++){
	togglePass.push(false)
}
togglePassBtnAll.forEach(togglePassBtn => {
	togglePassBtn.addEventListener("click", (e, i) => {
		if(!togglePass[i]){
			e.target.parentNode.querySelector("ellipse").style.fill = "#6577FF"
			e.target.parentNode.parentNode.parentNode.querySelector("input").setAttribute("type", "text")
			setTimeout(()=>{
				e.target.parentNode.parentNode.parentNode.querySelector("input").selectionStart = e.target.parentNode.parentNode.parentNode.querySelector("input").selectionEnd
			}, 1)
			togglePass[i] = true
		} else {
			e.target.parentNode.querySelector("ellipse").style.fill = "#C4C4C4"
			e.target.parentNode.parentNode.parentNode.querySelector("input").setAttribute("type", "password")
			setTimeout(()=>{
				e.target.parentNode.parentNode.parentNode.querySelector("input").selectionStart = e.target.parentNode.parentNode.parentNode.querySelector("input").selectionEnd
			}, 1)
			togglePass[i] = false
		}
	})
})