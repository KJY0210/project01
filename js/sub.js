$(function () {
    
   $('.tabSet').each(function(){
		var topDiv = $(this);
		var anchors = topDiv.find('ul.tabs a');
		var panelDivs = topDiv.find('div.panel');
		var lastAnchor;
		var lastPanel;

		anchors.show();
		lastAnchor = anchors.filter('.on');
		lastPanel = $(lastAnchor.attr('tab_href'));
		panelDivs.hide();
		lastPanel.show();
		
		anchors.click(function(){
			//event.preventDefault();
			var currentAnchor = $(this);
			var currentPanel = $(currentAnchor.attr('tab_href'));
			lastAnchor.removeClass('on');
			lastPanel.hide();

			currentAnchor.addClass('on');
			currentPanel.show();

			
			lastAnchor = currentAnchor;
			lastPanel = currentPanel;
		});
	});
    
    $('.D_btn').click(function () {
        $('.moretext').slideToggle();
        if ($('.D_btn').text() == "+ 더보기") {
            $(this).text("- 줄이기")
        } else {
            $(this).text("+ 더보기")
        }
    });
});
