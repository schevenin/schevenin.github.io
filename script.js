console.log('hello world');

var toggleProjects = function(button) 
{
	switch(button.innerHTML)
	{
		case "projects":
			button.innerHTML = "back";
			document.getElementById("intro").style.display = "none";
			document.getElementById("projects").style.display = "block";
			break;
		case "back":
			button.innerHTML = "projects";
			document.getElementById("intro").style.display = "block";
			document.getElementById("projects").style.display = "none";
			break;
		default:
			break;
	}
};

var toggleProject = function(project)
{
	document.getElementById(project).innerHTML = projects[project];
}

var projects = 
{
	'magicleap': 'lorem ipsum',
	'homelab': 'lorem ipsum',
	'ngrams': 'lorem ipsum',
	'anagrams': 'lorem ipsum',
};