fun.views.companies = Backbone.View.extend({

    /**
    * Bind the event functions to the different HTML elements
    */
    // click events missing
    events: {
        "click #create-company-btn": "createCompany",
        "click .company-popup": "companyDetails",
    },

    /**
    * Class constructor
    */
    initialize: function(options){
        fun.containers.companies = this.$el;
    },

    /**
    * Render view
    */
    render: function(){
        console.log('render tasts view');

        var template = _.template(fun.utils.getTemplate(fun.conf.templates.companies));

        this.$el.html(template);
        this.$el.removeClass("hide").addClass("show");
    },

     /*
    * Render companies list
    */
    renderCompaniesList: function(companies){
        'use strict';
        var template,
            allCompanies;
        console.log('render companies list');
        if (companies) {
            this.companies = companies;
        }

        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.allCompanies)
        );

        allCompanies = this.$('#all-companies-tab');

        allCompanies.html(template);

        this.tbody = this.$('#companies-list > tbody');

        this.$el.removeClass("hide").addClass("show");
        
        this.renderCompanyRows();
    },

    /*
    * Render company rows
    */
    renderCompanyRows: function(){
        'use strict';
        var length,
            i = 0,
            rows,
            data,
            template;
        // companies length
        length = this.companies.length;

        console.log('companies length: ',length);

        if (length > 0){
            rows = this.tbody.html('');
            for (i; i < length; ++i) {
                data = _.extend(this.companies.at(i).toJSON(), {i:i});

                template = _.template(
                    fun.utils.getTemplate(fun.conf.templates.companyRow)
                )(data);

                rows.append(template);
            }
        } else {
            this.noCompanies();
        }
    },

    /*
    * No companies
    */
    noCompanies: function(){
        'use strict';
        var template,
            noCompanies;
        template = _.template(
            fun.utils.getTemplate(fun.conf.templates.warning)
        )({message:'noDataAvailable'});

        noCompanies = this.$('#no-companies');

        noCompanies.html(template);
    },

    /*
    * Create company
    */
    createCompany: function(event){
        'use strict';
        event.preventDefault();
        // view cache
        var view = this,
            account,
            company,
            companyName,
            companyDescription,
            companyLabel,
            companyPayload,
            profile,
            first_name,
            last_name,
            user;

        console.log('create company event');

        this.companyName = this.$('#company_name');
        this.companyDescription = this.$('#company_description');
        this.companyLabel = 'Service Requests';

        account = this.account;

        companyName = this.companyName.val();

        companyDescription = this.companyDescription.val();

        companyLabel = this.companyLabel;

        console.log(account, companyName, companyDescription);

        companyPayload = {
            title: companyName,
            description: companyDescription,
            label: companyLabel
        };

        profile = JSON.parse(localStorage.getItem("profile"));

        user = new fun.models.User(profile);

        user.fetch()

        console.log(user.get('uuid'));
        console.log(user.get('first_name'));

        if (typeof(user.get('first_name')) === 'undefined'){
            first_name = 'Mauricio'
        } else {
            first_name = user.get('first_name');
        }

        if (typeof(user.get('last_name')) === 'undefined'){
            last_name = 'Montero'
        } else {
            last_name = user.get('last_name');
        }

        companyPayload['first_name'] = first_name;
        companyPayload['last_name'] = last_name;
        companyPayload['email'] = user.get('email');

        //console.log(JSON.stringify(profile));

        if (typeof(account) === undefined){
            account = false;
            companyPayload['public'] = account;
        }

        if (account != undefined & companyName != undefined){
            companyPayload['account'] = account;
            
        }

        company = new fun.models.Company(companyPayload);
        company.save();

        // Clear the stuff from the inputs ;)
        view.$('#company_name').val('');
        view.$('#company_description').val('');
    },
    
    /*
    * Company details
    */
    companyDetails: function(event){
        'use strict';
        event.preventDefault();
        //view cache
        var view = this,
            company,
            name,
            companyUuid,
            companyTitle,
            companyAssigned,
            companyLabel,
            companySource,
            companyStatus,
            companyPriority,
            companySeverity;

        var companyUuid = this.$('#company-uuid');
        var companyTitle = this.$('#company-title');
        var companyAssigned = this.$('#company-assigned');
        var companyLabel = this.$('#company-label');
        var companySource = this.$('#company-source');
        var companyStatus = this.$('#company-status');
        var companyPriority = this.$('#company-priority');
        var companySeverity = this.$('#company-severity');

        var companyDescription = this.$('#company-description');

        // get the name of the element targeted by this event
        name = $(event.target).data('name');

        company = new fun.models.Company({'uuid':name});

        company.fetch({
            success: function(response){

                //console.log(response)

                companyUuid.html(response.get('uuid'));

                companyTitle.html(response.get('title') || "Where's the title boy?");

                companyAssigned.html(response.get('assigned'));

                companyLabel.html(response.get('label'));

                companySource.html(response.get('source'));

                companyStatus.html(response.get('status'));

                companyPriority.html(response.get('priority'));

                companySeverity.html(response.get('severity'));

                companyDescription.html(response.get('description'));

                $('#companyModal').modal({
                    'show': true
                });
            },
            error: function(error){
                console.log(error);
            }
        });

        //console.log(company.toJSON());
    }

});