console.log('hello world');

const back_button = document.getElementById('back');
const forward_button = document.getElementById('forward');
const directory_button = document.getElementById('path');
const intro_page = document.getElementById('intro-page');
const projects_page = document.getElementById('projects-page');
const projects_container = document.getElementById('projects-container');

const projects = 
{
	'magicleap': 
		'a modeling app made for the magic leap headset built in C#',
	'homelab': 
		'my all-in-one solution to NAS, and a remote development environment.',
	'anagrams':
		'easy solution to your difficult anagram!<br>\
		<a href="https://github.com/schevenin/anagrams-solver/" target="_blank">github</a>',
	//'ngrams': 
	//	'a natural language processing tool that counts the frequency of n-grams in a text file',
	//'add more': 
	//	'projects to the page as simple as adding another entry!',
};

var current_page = 'home'
var last_page = []
var next_page = []

var togglePages = function(button) 
{
	// target page
	new_page = button.id;

	// attempting to visit the current page
	if (new_page == current_page) return;
	
	// using back or forward buttons
	if (new_page == 'back')
	{
		next_page.push(current_page);
		new_page = last_page.pop()
	} else if (new_page == 'forward')
	{
		last_page.push(current_page);
		new_page = next_page.pop();
	} else {
		last_page.push(current_page);
		next_page = [];
	}

	// update the current page
	current_page = new_page;

	// toggle target page
	switch (current_page) {
		case 'home':
			intro_page.style.display = 'block';
			projects_page.style.display = 'none';
			directory_button.innerHTML = '<a id="home" onclick="togglePages(this)" href="#">~</a>/';
			break;
		case 'projects':
			intro_page.style.display = 'none';
			projects_page.style.display = 'block';
			directory_button.innerHTML = '<a id="home" onclick="togglePages(this)" href="#">~</a>/<a id="projects" onclick="togglePages(this)" href="#">projects</a>/';
			listProjects();
			break;
		default:
			openProject(document.getElementById(new_page));
			break;
	}
	
	updateNavButtons();
};

var listProjects = function() {
	// each project in dictionary
	for (let projectID of Object.keys(projects)) {
				
		// project hasn't been added to container yet
		if (!document.getElementById(projectID)) {
			projects_container.innerHTML += '<div id="' + projectID + '" onclick="togglePages(this)"><h1><a href="#">' + projectID + '</a></h1><div></div></div>'
		}

		let project = document.getElementById(projectID);
		// restore project visibility
		project.style.display = 'block'; 
		// show project title
		//project.firstChild.firstChild.innerHTML = projectID;
		// hide project details
		project.lastChild.innerHTML = '';
	}
};

var openProject = function(project) {
	// hide all other projects
	for (let projectID of Object.keys(projects)) {
		if (projectID != project.id) document.getElementById(projectID).style.display = 'none';
			
	}
	
	// hide project title
	//project.firstChild.firstChild.innerHTML = '';
	// show project details
	project.lastChild.innerHTML = projects[project.id];
	// append button to path
	directory_button.innerHTML += '<a id="' + project.id + '" onclick="togglePages(this)" href="#">' + project.id + '</a>/';
};

var updateNavButtons = function() {
	// activate forward button?
	if (next_page.length == 0) {
		forward_button.style.color = 'grey';
		forward_button.style.pointerEvents = 'none';
	} else {
		forward_button.style.color = '#20B2AA';
		forward_button.style.pointerEvents = 'auto';
	}

	// activate back button?
	if (last_page.length == 0) {
		back_button.style.color = 'grey';
		back_button.style.pointerEvents = 'none';
	} else {
		back_button.style.color = '#20B2AA';
		back_button.style.pointerEvents = 'auto';
	}
};