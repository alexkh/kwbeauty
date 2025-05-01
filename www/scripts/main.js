document.addEventListener("DOMContentLoaded", function (){
	var nav_bar = document.querySelector('.nav_bar');
	var pages = {}
	for(const el of nav_bar.children) {
		const name = el.dataset.page;
		pages[name] = document.querySelector('.pages .' + name);
		console.log(name, pages[name]);
	}
	
	function on_click(e) {
		console.log(e);
		var page = e.target.dataset.page;
		if(page) {
			enter_page(page);
			return;
		}
	
	}
	
	window.addEventListener('click', on_click);
	
	function hide_all() {
		Object.entries(pages).forEach(([key, value]) => {
			value.classList.add('hidden');
		});
	}
	
	function show_page(name) {
		if(!pages[name]) {
			return;
		}
		pages[name].classList.remove('hidden');
	}
	
	function enter_page(name) {
		hide_all()
		show_page(name);
		for(const el of nav_bar.children) {
			el.classList.remove('selected');
		}
		const tgl = nav_bar.querySelector('.' + name + '_tgl');
		tgl.classList.add('selected');
	} 
}, false)


