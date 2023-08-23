! function ($) {
    "use strict";

    class Treelink {
        constructor() { }
        //PreLoader
        initPreLoader() {
            $('#status').fadeOut();
            $('#preloader').delay(350).fadeOut('slow');
            $('body').delay(350).css({
                'overflow': 'visible'
            });
        }

        init() {
            this.initPreLoader();
        }

    }
    //init
    $.Treelink = new Treelink, $.Treelink.Constructor = Treelink
}(window.jQuery),

    //initializing
    function ($) {
        "use strict";
        $.Treelink.init();
    }(window.jQuery);