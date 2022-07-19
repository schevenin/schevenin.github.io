console.log('hello world');

const directory_button = document.getElementById('dir');
const intro_page = document.getElementById('intro-page');
const projects_page = document.getElementById('projects-page');
const projects_container = document.getElementById('projects-container');
const website_title = document.querySelector('title');

const projects = 
{
	'wip': 'this is a work in progress!',
	'magicleap': 'a modeling app made for the magic leap headset built in C#',
	'homelab': '<img id="diagram" src="homelab.svg"><br><p>My all-in-one solution to NAS, and a remote development environment.</p>',
	'anagrams': 'easy solution to your difficult anagram!',
	//'ngrams': 'a natural language processing tool that counts the frequency of n-grams in a text file',
	//'add more': 'projects to the page as simple as adding another entry!',
};

var togglePages = function(button) 
{
	switch (button.id)
	{
		case 'home':
			intro_page.style.display = 'block';
			projects_page.style.display = 'none';
			directory_button.innerHTML = '<a id="home" onclick="togglePages(this)" href="#">~</a>/';
			website_title.innerHTML = '~/'
			break;
		case 'making':
		case 'projects':
			intro_page.style.display = 'none';
			projects_page.style.display = 'block';
			directory_button.innerHTML = '<a id="home" onclick="togglePages(this)" href="#">~</a>/<a id="projects" onclick="togglePages(this)" href="#">projects</a>/';
			website_title.innerHTML = '../projects/'
			break;
		default:
			// if project clicked on, do nothing
			return;
	}

	// list projects, hide their details
	for (let projectID of Object.keys(projects))
	{
		// if project hasn't been added to container yet, add it
		if (!document.getElementById(projectID))
		{
			projects_container.innerHTML += '<div id="' + projectID + '" onclick="openProject(this)"><h1><a href="#">' + projectID + '</a></h1><p></p></div'
		}

		// display name, hide details
		let project = document.getElementById(projectID);
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
		for (let projectID of Object.keys(projects))
		{
			if (projectID != project.id) document.getElementById(projectID).style.display = 'none';
		}

		// show project details
		project.querySelector('p').innerHTML = projects[project.id];

		// append to dir button
		document.getElementById('dir').innerHTML += '<a onclick="togglePages(this)" href="#">' + project.id + '</a>/';
		website_title.innerHTML = '../' + project.id + '/';
	}
};