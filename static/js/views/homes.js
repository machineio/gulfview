fun.views.homes = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    // click events missing
    events: {

    },

    /**
    * Class constructor
    */
    initialize: function(options){
        fun.containers.homes = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render homes view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.homes));

        this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");
    }
});