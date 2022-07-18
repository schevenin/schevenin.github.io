console.log('hello world');

var togglePages = function(button) 
{
	switch (button.id)
	{
		case "making":
			document.getElementById("intro-page").style.display = "none";
			document.getElementById("projects-page").style.display = "block";
			document.getElementById("dir").innerHTML += '<a id="projects" onclick="togglePages(this)" href="#">projects</a>/';
			break;
		case 'home':
			document.getElementById("intro-page").style.display = "block";
			document.getElementById("projects-page").style.display = "none";
			document.getElementById("dir").innerHTML = '<a id="home" onclick="togglePages(this)" href="#">~</a>/';
			break;
		case 'projects':
			
			document.getElementById("intro-page").style.display = "none";
			document.getElementById("projects-page").style.display = "block";
			document.getElementById("dir").innerHTML = '<a id="home" onclick="togglePages(this)" href="#">~</a>/<a id="projects" onclick="togglePages(this)" href="#">projects</a>/';
			break;
		default:
			// if project clicked on, do nothing
			return;
	}

	// show all projects, hide their details
	for (var projectID of Object.keys(projects))
	{
		project = document.getElementById(projectID);
		project.style.display = 'block';
		project.querySelector('p').innerHTML = '';
	}
};

var openProject = function(project)
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

		// append to dir button
		document.getElementById("dir").innerHTML += '<a onclick="togglePages(this)" href="#">' + project.id + '</a>/';
	}
};

var projects = 
{
	'magicleap': 'an exciting modeling app made for the magic leap headset built in C#',
	'homelab': 'an ubuntu machine set up as a zfs storage server. Also hosts web servers and software tools like jupyter notebook using docker',
	'ngrams': 'a natural language processing tool that counts the frequency of n-grams in a text file',
	'anagrams': 'easy solution to your anagram!',
};