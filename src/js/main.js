let phoneUl = document.querySelector(".nav .phone-ul");
let bur = document.querySelector(".nav .bur img");
let burParent = document.querySelector(".nav .bur")
let ex = document.querySelector(".nav .phone-ul .closebtn");
let desktopUl = document.querySelector('.nav .desktop-ul');
let secondLogo = document.querySelector('.nav .phone-ul .second-logo');
// console.log(secondLogo)



bur.addEventListener('click', openBur)
ex.addEventListener('click', closeBur)

function openBur(){
	phoneUl.style.width = "100%";
	secondLogo.style.animation = 'shake 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both'
}
function closeBur(){
	phoneUl.style.width = "0";
}


//hidden some tags after 639px

function hidd(){
	window.addEventListener('resize', ()=>{
		if(window.innerWidth > 639 && desktopUl.classList.contains("hidden")){
			burParent.classList.add("hidden")
			burParent.style.visibility = 'hidden';
		}else{
			burParent.classList.remove("hidden")
			burParent.style.visibility = 'visible';
		}
	})
	if(window.innerWidth > 639 && desktopUl.classList.contains("hidden")){
			burParent.classList.add("hidden")
			burParent.style.visibility = 'hidden';
	}else{
		burParent.classList.remove("hidden")
		burParent.style.visibility = 'visible';
	}
}

hidd()


function changeImage(){
	let parentImage = document.querySelector(".grand-Image .parent-Image ")
	let allImageSrc = [];
	// console.log(div.firstElementChild);
	//Chnage image
	let images = [];
	images[0] = "images/desktop/image-deep-earth.jpg";
	images[1] = "images/desktop/image-night-arcade.jpg";
	images[2] = "images/desktop/image-soccer-team.jpg";
	images[3] = "images/desktop/image-grid.jpg";
	images[4] = "images/desktop/image-from-above.jpg";
	images[5] = "images/desktop/image-pocket-borealis.jpg";
	images[6] = "images/desktop/image-curiosity.jpg";
	images[7] = "images/desktop/image-fisheye.jpg";
	let imagesMobile = [];
	imagesMobile[0] = "images/mobile/image-deep-earth.jpg";
	imagesMobile[1] = "images/mobile/image-night-arcade.jpg";
	imagesMobile[2] = "images/mobile/image-soccer-team.jpg";
	imagesMobile[3] = "images/mobile/image-grid.jpg";
	imagesMobile[4] = "images/mobile/image-from-above.jpg";
	imagesMobile[5] = "images/mobile/image-pocket-borealis.jpg";
	imagesMobile[6] = "images/mobile/image-curiosity.jpg";
	imagesMobile[7] = "images/mobile/image-fisheye.jpg";
	for (let i = 0; i < parentImage.childElementCount; i++) {
		  let s = parentImage.children[i].firstElementChild
			// console.log(s)
		  	allImageSrc.push((s))
		  	window.addEventListener('resize', ()=>{
		  		if (window.innerWidth > 767)
					allImageSrc[i].src = images[i];
				else
					allImageSrc[i].src = imagesMobile[i];
		  	})
		  	if (window.innerWidth > 767)
				allImageSrc[i].src = images[i];
			else
				allImageSrc[i].src = imagesMobile[i];

	}

}

changeImage()



function show(){
	let upBtn = document.querySelector(".our-creation .up-btn")
	let downBtn = document.querySelector(".our-creation .down-btn")
	window.addEventListener('resize', ()=>{
			if (window.innerWidth > 1023) {
				upBtn.classList.remove("hidden");
				upBtn.classList.remove("invisible");
				downBtn.classList.add("hidden")
				// alert("message?: DOMString");
			}else{

				upBtn.classList.add("hidden");
				upBtn.classList.add("invisible");
				downBtn.classList.remove("hidden");
			}
		});
			if (window.innerWidth > 1023) {
				upBtn.classList.remove("hidden");
				upBtn.classList.remove("invisible");
				downBtn.classList.add("hidden")
			}else{
				upBtn.classList.add("hidden");
				upBtn.classList.add("invisible");
				downBtn.classList.remove("hidden");
			}
	}
show()