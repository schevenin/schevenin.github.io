console.log('hello world');

var togglePages = function(button) 
{
	if (document.getElementById("intro-page").style.display != "none")
	{
		document.getElementById("intro-page").style.display = "none";
		document.getElementById("projects-page").style.display = "block";
	} else {
		document.getElementById("intro-page").style.display = "block";
		document.getElementById("projects-page").style.display = "none";
		collapse();
	}
};

var toggleProject = function(project)
{
	if (document.getElementById(project).innerHTML == '')
	{
		collapse();
		expand(project);
	} else {
		collapse(project);
	}
};

var collapse = function(project = null)
{
	if (project == null)
	{
		for (var key of Object.keys(projects)) {
    		document.getElementById(key).innerHTML = '';
		}
	} else {
		document.getElementById(project).innerHTML = '';
	}
};

var expand = function(project = null)
{
	if (project == null)
	{
		for (var key of Object.keys(projects)) {
    		document.getElementById(key).innerHTML = projects[key];
		}
	} else {
		document.getElementById(project).innerHTML = projects[project];
	}
};

var projects = 
{
	'magicleap': 'an exciting modeling app made for the magic leap headset built in C#',
	'homelab': 'an ubuntu machine set up as a zfs storage server. Also hosts web servers and software tools like jupyter notebook using docker',
	'ngrams': 'a natural language processing tool that counts the frequency of n-grams in a text file',
	'anagrams': 'easy solution to your anagram!',
};