(function (w, $) {
    var options = {
        content: "",
        ready:$.noop
    };

    function contentHighlight(){
        // break if no content fpr highlight is set.
        if(!(w.contentHighlightDefaults && w.contentHighlightDefaults.content)){
            return;
        }

        options = $.extend(options, w.contentHighlightDefaults);

        var $highlight = $('.content-highlight'),
            $content = $(options.content, $highlight),
            $clone = $content.clone(),
            cssTransform = Modernizr.prefixed('transition'),
            cssOpacity = Modernizr.prefixed('opacity');

        if(!$content.length) return;

        var css = $.extend($content.position(), {
            position: 'absolute'
        });
        $clone.css(css);

        css = {};
        css[cssTransform] = 'all 2s';
        css[cssOpacity] = 1;
        css['filter'] = "alpha(opacity = 100)";

        w.setTimeout(function(){
            $highlight.css(css);
            w.setTimeout(function(){
                $clone.remove();
            }, 1000)
        }, 5000);

        $(document.body).append($clone);

    }

    $(contentHighlight);

})(window, jQuery);
