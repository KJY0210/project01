$(function () {
    
$('.caSet').each(function(){
		var topDiv = $(this);
		var anchors = topDiv.find('ul.M_category li');
		var panelDivs = topDiv.find('div.panel');
		var lastAnchor;
		var lastPanel;

		anchors.show();
		lastAnchor = anchors.filter('.on');
		lastPanel = $(lastAnchor.attr('href'));
		panelDivs.hide();
		lastPanel.show();
		
		anchors.click(function(){
			//event.preventDefault();
			var currentAnchor = $(this);
			var currentPanel = $(currentAnchor.attr('href'));
			lastAnchor.removeClass('on');
			lastPanel.hide();

			currentAnchor.addClass('on');
			currentPanel.show();

			
			lastAnchor = currentAnchor;
			lastPanel = currentPanel;
		});
	});

});
