console.log('hello world');

let index = true;
var toggleProjects = function(button) 
{
	if (index)
	{	
		document.getElementById("intro-page").style.display = "none";
		document.getElementById("projects-page").style.display = "block";
		index = false;
	} else {
		document.getElementById("intro-page").style.display = "block";
		document.getElementById("projects-page").style.display = "none";
		index = true;
	}
};

var toggleProject = function(project)
{
	let obj = document.getElementById(project);
	if (obj.innerHTML == '')
	{
		for (var key of Object.keys(projects)) {
    		document.getElementById(key).innerHTML = '';
		}
		obj.innerHTML = projects[project];
	} else {
		obj.innerHTML = '';
	}
};

var projects = 
{
	'magicleap': 'lorem ipsum',
	'homelab': 'lorem ipsum',
	'ngrams': 'lorem ipsum',
	'anagrams': 'lorem ipsum',
};