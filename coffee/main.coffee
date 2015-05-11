 
menuItems =
	$('.menu ul').find('li')
liHeight = 
	$(window).height()/menuItems.length
for item in menuItems 
	$(item)
		.height(liHeight)
		.width(liHeight)
		.css('padding-top',$(window).height()/12 - 14 + 'px')
	
