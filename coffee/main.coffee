 
liHeight = 
	$(window).height()/6
for item in $('.menu ul').find('li') 
	$(item)
		.height(liHeight)
		.css('padding-top',$(window).height()/12 - 14 + 'px')
	
