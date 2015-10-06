fun.views.community = Backbone.View.extend({

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
        fun.containers.community = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render community view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.community));

        this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");
    }
});