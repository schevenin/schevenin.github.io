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
	}
};

var toggleProject = function(project)
{
	// open project
	if (project.querySelector('p').innerHTML == '')
	{
		// hide other projects
		for (var projectID of Object.keys(projects))
		{
			if (projectID != project.id) document.getElementById(projectID).style.display = 'none';
		}

		// show project details
		project.querySelector('p').innerHTML = projects[project.id];
	}
	// close project
	else
	{
		// hide project details
		project.querySelector('p').innerHTML = '';
		
		// show other projects
		for (var projectID of Object.keys(projects))
		{
			document.getElementById(projectID).style.display = 'block';
		}
	}
};

var projects = 
{
	'magicleap': 'an exciting modeling app made for the magic leap headset built in C#',
	'homelab': 'an ubuntu machine set up as a zfs storage server. Also hosts web servers and software tools like jupyter notebook using docker',
	'ngrams': 'a natural language processing tool that counts the frequency of n-grams in a text file',
	'anagrams': 'easy solution to your anagram!',
};