fun.views.contact = Backbone.View.extend({

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
        fun.containers.contact = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render contact view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.contact));

        this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");
    }
});