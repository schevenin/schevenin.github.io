console.log('hello world');

let home = true;
var toggleProjects = function(button) 
{
	if (home)
	{	
		document.getElementById("intro-page").style.display = "none";
		document.getElementById("projects-page").style.display = "block";
		home = false;
	} else {
		document.getElementById("intro-page").style.display = "block";
		document.getElementById("projects-page").style.display = "none";
		home = true;
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
	'magicleap': 'an exciting modeling app made for the magic leap headset built in C#',
	'homelab': 'an ubuntu machine set up as a zfs storage server. Also hosts web servers and software tools like jupyter notebook using docker',
	'ngrams': 'a natural language processing tool that counts the frequency of n-grams in a text file',
	'anagrams': 'easy solution to your anagram!',
};