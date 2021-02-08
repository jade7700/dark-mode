/*localStorage.removeItem('tema')*/

const boton = document.querySelector('#boton');
const configUser = window.matchMedia('(prefers-color-scheme: dark)');
const localConfig = localStorage.getItem('tema');

console.log(configUser.matches);
console.log(localConfig);





if(localConfig == null){
	if(configUser.matches == true){
		document.body.classList.add('dark-mode');
		document.body.classList.remove('light-theme');
	}else{
		document.body.classList.remove('dark-mode');
		document.body.classList.add('light-theme');
	}
}else{
	if (localConfig == 'dark') {
		document.body.classList.add('dark-mode');
		document.body.classList.remove('light-theme');
	} else if (localConfig == 'light') {
		document.body.classList.remove('dark-mode');
		document.body.classList.add('light-theme');
	}
}

boton.addEventListener('click', () => {
    let colorTema;
        // Entramos con modo oscuro
		
		if(document.body.classList.contains('light-theme')){
			colorTema = 'dark';
			document.body.classList.remove('light-theme');
			document.body.classList.add('dark-mode');
		}else{
			colorTema = 'light';
			document.body.classList.remove('dark-mode');
			document.body.classList.add('light-theme');
		}
		
    localStorage.setItem('tema', colorTema);
	console.log(colorTema);	
    /*location.reload();*/

	
})


