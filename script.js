console.log('hello world');

function switchPages()
{
	first = document.getElementById('first-page');
	second = document.getElementById('second-page');
	button = document.getElementById('button');

	if (button.textContent == 'back')
	{
		button.textContent = "projects"
		document.getElementById('first-page').style.display='block';
	    document.getElementById('second-page').style.display='none';
	}
	else
	{
		button.textContent = "back"
		document.getElementById('first-page').style.display='none';
	    document.getElementById('second-page').style.display='block';
	}
}