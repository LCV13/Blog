$(document).ready(function(){

	//Slider
	if(window.location.href.indexOf('index') > -1){ 
	  	 $('.bxslider').bxSlider({
	    mode: 'fade', //el tipo de animacion
	    captions: false, //si quiero qu muestre el caption o no
	    slideWidth: 1200, //el tamaño que quiero que tengan las imagenes
	    responsive: true, 
	    pager: true
	   });
	}
	 

	  //Posts
	  if(window.location.href.indexOf('index') > -1){
		  var posts = [

		  		{
		  			title: 'Prueba de titulo 1',
		  			date:'Publicado el día'+" "+ moment().format("MMMM dddd YYYY"),
		  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae lectus malesuada, aliquet sapien nec, feugiat massa. Praesent accumsan, felis vitae placerat elementum, leo tortor posuere ante, nec molestie tellus lacus eget ex. Nulla auctor, quam non accumsan elementum, sem tellus tempus mi, quis condimentum ex justo nec ante. Sed lacinia pharetra justo, ac scelerisque dui blandit eget. Nunc volutpat elit ut dapibus volutpat. Phasellus fringilla lectus sit amet odio aliquet malesuada. Sed velit nisi, rutrum sed facilisis nec, finibus sit amet massa. Donec rhoncus eget enim sed laoreet. Vestibulum a orci quis metus aliquam ullamcorper eget eget ligula. Maecenas luctus porta erat et feugiat. Curabitur in turpis ornare, feugiat nisi sed, sagittis dui. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
		  		},

		  		{
		  			title: 'Prueba de titulo 2',
		  			date: 'Publicado el día'+" "+ moment().date()+" "+"de"+" "+moment().format("MMMM")+" "+"del"+" "+moment().format("YYYY"),
		  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae lectus malesuada, aliquet sapien nec, feugiat massa. Praesent accumsan, felis vitae placerat elementum, leo tortor posuere ante, nec molestie tellus lacus eget ex. Nulla auctor, quam non accumsan elementum, sem tellus tempus mi, quis condimentum ex justo nec ante. Sed lacinia pharetra justo, ac scelerisque dui blandit eget. Nunc volutpat elit ut dapibus volutpat. Phasellus fringilla lectus sit amet odio aliquet malesuada. Sed velit nisi, rutrum sed facilisis nec, finibus sit amet massa. Donec rhoncus eget enim sed laoreet. Vestibulum a orci quis metus aliquam ullamcorper eget eget ligula. Maecenas luctus porta erat et feugiat. Curabitur in turpis ornare, feugiat nisi sed, sagittis dui. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
		  		},
		  		{
		  			title: 'Prueba de titulo 3',
		  			date: new Date(),
		  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae lectus malesuada, aliquet sapien nec, feugiat massa. Praesent accumsan, felis vitae placerat elementum, leo tortor posuere ante, nec molestie tellus lacus eget ex. Nulla auctor, quam non accumsan elementum, sem tellus tempus mi, quis condimentum ex justo nec ante. Sed lacinia pharetra justo, ac scelerisque dui blandit eget. Nunc volutpat elit ut dapibus volutpat. Phasellus fringilla lectus sit amet odio aliquet malesuada. Sed velit nisi, rutrum sed facilisis nec, finibus sit amet massa. Donec rhoncus eget enim sed laoreet. Vestibulum a orci quis metus aliquam ullamcorper eget eget ligula. Maecenas luctus porta erat et feugiat. Curabitur in turpis ornare, feugiat nisi sed, sagittis dui. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
		  		},
		  		{
		  			title: 'Prueba de titulo 4',
		  			date: new Date(),
		  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae lectus malesuada, aliquet sapien nec, feugiat massa. Praesent accumsan, felis vitae placerat elementum, leo tortor posuere ante, nec molestie tellus lacus eget ex. Nulla auctor, quam non accumsan elementum, sem tellus tempus mi, quis condimentum ex justo nec ante. Sed lacinia pharetra justo, ac scelerisque dui blandit eget. Nunc volutpat elit ut dapibus volutpat. Phasellus fringilla lectus sit amet odio aliquet malesuada. Sed velit nisi, rutrum sed facilisis nec, finibus sit amet massa. Donec rhoncus eget enim sed laoreet. Vestibulum a orci quis metus aliquam ullamcorper eget eget ligula. Maecenas luctus porta erat et feugiat. Curabitur in turpis ornare, feugiat nisi sed, sagittis dui. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
		  		},
		  		{
		  			title: 'Prueba de titulo 5',
		  			date: new Date(),
		  			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae lectus malesuada, aliquet sapien nec, feugiat massa. Praesent accumsan, felis vitae placerat elementum, leo tortor posuere ante, nec molestie tellus lacus eget ex. Nulla auctor, quam non accumsan elementum, sem tellus tempus mi, quis condimentum ex justo nec ante. Sed lacinia pharetra justo, ac scelerisque dui blandit eget. Nunc volutpat elit ut dapibus volutpat. Phasellus fringilla lectus sit amet odio aliquet malesuada. Sed velit nisi, rutrum sed facilisis nec, finibus sit amet massa. Donec rhoncus eget enim sed laoreet. Vestibulum a orci quis metus aliquam ullamcorper eget eget ligula. Maecenas luctus porta erat et feugiat. Curabitur in turpis ornare, feugiat nisi sed, sagittis dui. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
		  		},


		  ]


			posts.forEach((item, index) =>{
			
			var post = `
					<article class="post">
						<h2>${item.title}</h2>
						<span class="date">${item.date}</span>
						<p>
							${item.content}
						</p>
						<a href="#" class="button-more">Leer más</a>
					</article>
			`;
			$("#posts").append(post);
		});
	}
		//Selector de tema
		var theme = $("#theme");
	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});

	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});

	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});

	//Scroll arriiba en la web

	$('.subir').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});

	//Login falso
	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);//guardando el valor en el local storage
	});

	var form_name =localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");
	about_parrafo.html("<br><hr><strong>Bienvenido,"+ form_name+"</strong>");
	about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");
	$("#login").hide();
		

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	}
		//Acordeon
	if(window.location.href.indexOf('about') > -1){
			$("#acordeon").accordion();
		}


		//Reloj

	if(window.location.href.indexOf('reloj') > -1){//Comprobar si existe 'reloj' en la rute (url)
		
		setInterval(function(){
			var reloj = moment().format("hh:mm:ss");
				$("#reloj").html(reloj);
		}, 1000);
	
	}	

	//Validacion
if(window.location.href.indexOf('contact') > -1){//la validacion solo se va a ejecutar cuando estemos en Contact
		
	$("form input[name='date']").datepicker({
		dateFormat:'dd-mm-yy' //esto es para cambiar el formato como queremos. NO es obligatorio
	});
		  $.validate({
		    lang: 'es',
		    errorMesaggePosition:'top',//que el mensaje vaya arriba
		    scrollToTopOnError: true //va a llevar todos los errores arriba
	 	 });
	}	  
});