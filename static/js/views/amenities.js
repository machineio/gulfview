fun.views.amenities = Backbone.View.extend({

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
        fun.containers.amenities = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render amenities view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.amenities));

        this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");
    }
});