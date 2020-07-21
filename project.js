var data = {
	0: {
		name: "Cybase",
		description: "Cybase - Course browsing web application using PHP and MySQL",
		url: "https://github.com/yogendra221/Cybase",
		language: "HTML CSS PHP MySQL"
	},
	1: {
		name: "sorting-algorithm-visualizer",
		description: "Various Sorting Algorithm Visualization using C++ and OpenGL.",
		url: "https://github.com/yogendra221/sorting-algorithm-visualizer",
		language: "C++"
	}
};

var projects = document.getElementsByClassName("projects")[0];
var i = 0;
while(data[i]){
	var parentdiv = document.createElement('div');
	parentdiv.className = 'project';
	projects.appendChild(parentdiv);
		var div1 = document.createElement('div');
		var div2 = document.createElement('div');
		var div3 = document.createElement('div');
		var a = document.createElement('a');
		a.href = data[i].url;
		a.innerHTML = data[i].name;
		a.style.textDecoration = 'none';
		a.className = 'highlight';
		a.target = "_blank";
		div1.appendChild(a);
		div1.className = "project-name";
		div2.innerHTML = data[i].description;
		div2.className = "project-desc";
		div3.innerHTML = data[i].language;
		div3.className = "project-lang";
	  
		parentdiv.appendChild(div1);
		parentdiv.appendChild(div2);
		parentdiv.appendChild(div3);
		i++;
}