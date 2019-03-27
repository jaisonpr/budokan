
function getPage(url, tag) {	
	$.ajax({
		type : "GET",
		url : url += ".html",
		success : function(result) {
			$(tag).html(result);
		},
		dataType : "html"
	});
}

function loadLivro(el) {	
		
	document.getElementById('titulo').innerHTML = el.alt;
	document.getElementById('isbn').innerHTML = "(ISBN: "+ el.id +")";
	document.getElementById('img_capa').src = "images/livros/" + el.id + ".jpg";
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("txt_livro").innerHTML = this.responseText;
		} else {
			document.getElementById("txt_livro").innerHTML = "Em desenvolvimento...";
		}
	};
	xhttp.open("GET", "txt/livros/" + el.id + ".txt", true);
	xhttp.send();
	
}

function loadMain(page) {
	return getPage("pages/" + page, "#conteudo");
}

function show(el) {
	document.getElementById(el).style.display = (document.getElementById(el).style.display == "none" ? 'block' : 'none');
}