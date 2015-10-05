/*
* In a client-server architecture routes are resource address capability service nouns.
*/
fun.Router = Backbone.Router.extend({

    /*
     Seed server routes
    */
    routes: {
        "": "home",
        "home": "home",
        "landing": "landing",

        "development": "development",
        "homes": "homes",
        "amenities": "amenities",
        "gallery": "gallery",
        "privacy": "privacy",
        "contact": "contact",
    },

    initialize: function(){
        'use strict';

        // navigation bar
        fun.instances.navbar = new fun.views.navbar({
            el:"#fun-navbar"
        });

        // sub header
        fun.instances.subheader = new fun.views.subheader({
            el:"#fun-subheader"
        });

        // landing
        fun.instances.landing = new fun.views.landing({
            el:"#fun-landing"
        });

        // development
        fun.instances.development = new fun.views.development({
            el:"#fun-development"
        });

        // homes
        fun.instances.homes = new fun.views.homes({
            el:"#fun-homes"
        });

        // amenities
        fun.instances.amenities = new fun.views.amenities({
            el:"#fun-amenities"
        });

        // gallery
        fun.instances.gallery = new fun.views.gallery({
            el:"#fun-gallery"
        });

        // contact
        fun.instances.contact = new fun.views.contact({
            el:"#fun-contact"
        });

        // footer
        fun.instances.footer = new fun.views.footer({
            el:"#fun-footer"
        });
    },

    home: function(){
        'use strict';
        console.log('getting account and context');

        // get account and context
        this.account = localStorage.getItem("username");
        this.context = sessionStorage.getItem("context");

        console.log(this.account, this.context);

        if (this.account === this.context){
            console.log('account same as context');
        } else {
            console.log('missing or different context');
        }

        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.dashboard);
        } else {
            fun.utils.redirect(fun.conf.hash.landing);
        }
    },

    landing: function(){
        'use strict';
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.landing.render();
        //fun.instances.extra.render();
        fun.instances.footer.render();
    },

    homes: function(){
        'use strict';
        var homes = translate('homes');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        //fun.instances.subheader.render(development);
        fun.instances.homes.render();
        fun.instances.footer.render();
    },

    amenities: function(){
        'use strict';
        var amenities = translate('amenities');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        //fun.instances.subheader.render(amenities);
        fun.instances.amenities.render();
        fun.instances.footer.render();
    },

    development: function(){
        'use strict';
        var development = translate('development');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        //fun.instances.subheader.render(development);
        fun.instances.development.render();
        fun.instances.footer.render();
    },

    gallery: function(){
        'use strict';
        var gallery = translate('gallery');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        //fun.instances.subheader.render(gallery);
        fun.instances.gallery.render();
        fun.instances.footer.render();
    },

    contact: function(){
        'use strict';
        var contact = translate('contact');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        //fun.instances.subheader.render(contact);
        fun.instances.contact.render();
        fun.instances.footer.render();
    },

    enterprise: function(){
        'use strict';
        var enterprise = translate('enterprise');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        //fun.instances.subheader.render(enterprise);
        fun.instances.enterprise.render();
        fun.instances.footer.render();
    }
});

// init the shit out of this
$(function(){
    fun.instances.router = new fun.Router();
    Backbone.history.start();
});
