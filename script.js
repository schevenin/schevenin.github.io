console.log('hello world');

const back_button = document.getElementById('back');
const forward_button = document.getElementById('forward');
const directory_button = document.getElementById('path');
const intro_page = document.getElementById('intro-page');
const projects_page = document.getElementById('projects-page');
const projects_container = document.getElementById('projects-container');
const website_title = document.querySelector('title');

const projects = 
{
	'wip': 'this is a work in progress!',
	'magicleap': 'a modeling app made for the magic leap headset built in C#',
	'homelab': 'my all-in-one solution to NAS, and a remote development environment.',
	'anagrams': 'easy solution to your difficult anagram!',
	//'ngrams': 'a natural language processing tool that counts the frequency of n-grams in a text file',
	//'add more': 'projects to the page as simple as adding another entry!',
};

var current_page = 'home'
var last_page = [] // stack that is appended to after clicking on new link or forward button
var next_page = [] // stack that is appended to with last page after clicking back

var togglePages = function(button) 
{
	new_page = button.id;
	console.log("New page -> " + new_page);
	
	// if using back or forward buttons
	// set new_page accordingly
	if (new_page == 'back')
	{
		next_page.push(current_page);
		new_page = last_page.pop()
	} else if (new_page == 'forward')
	{
		last_page.push(current_page);
		new_page = next_page.pop();
		last_page.push(current_page);
	} else {
		next_page = [];
		last_page.push(current_page);
	}

	
	
	// update the current page
	current_page = new_page;

	// toggle the page
	switch (current_page) {
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

			// list projects, hide their details
			for (let projectID of Object.keys(projects)) {
				// if project hasn't been added to container yet, add it
				if (!document.getElementById(projectID)) {
					projects_container.innerHTML += '<div id="' + projectID + '" onclick="togglePages(this)"><h1><a href="#">' + projectID + '</a></h1><p></p></div'
				}

				// display name, hide details
				let project = document.getElementById(projectID);
				project.style.display = 'block';
				project.style.pointerEvents = 'auto';
				project.querySelector('p').innerHTML = '';
			}

			break;
		default:
			
			// opening project
			project = document.getElementById(new_page);	

			// open project
			if (project.querySelector('p').innerHTML == '')
			{
				// hide other projects
				for (let projectID of Object.keys(projects))
				{
					if (projectID != project.id) document.getElementById(projectID).style.display = 'none';
						
				}
				
				// hide project title
				project.querySelector('h1').style.display = 'none';
				// show project details
				project.querySelector('p').innerHTML = projects[project.id];
				// disable clickability
				project.style.pointerEvents = 'none';

				// append to dir button
				directory_button.innerHTML += '<a onclick="togglePages(this)" href="#">' + project.id + '</a>/';
				website_title.innerHTML = '../' + project.id + '/';
			}
			break;
	}
	
	console.log("last_page: " + last_page);
	console.log("next_page: " + next_page);
	console.log("");

	if (next_page.length == 0){
		forward_button.style.color = 'grey';
		forward_button.style.pointerEvents = 'none';
	} else {
		forward_button.style.color = '#20B2AA';
		forward_button.style.pointerEvents = 'auto';
	}
	if (last_page.length == 0){
		back_button.style.color = 'grey';
		back_button.style.pointerEvents = 'none';
	} else {
		back_button.style.color = '#20B2AA';
		back_button.style.pointerEvents = 'auto';
	}
};