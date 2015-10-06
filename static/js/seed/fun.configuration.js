/*
 Configuration seed
*/
fun.conf = {
    // username account
    account: 'account',
    // dashboard context "organization"
    context: 'context',
    // html templates
    html: '/static/html',
    // internet domain
    domain: 'iofun.io',
    // seed url root
    urlRoot: '/api/',

    // system uuid's
    uuidRecord: 'record_uuid',
    uuidBilling: 'billing_uuid',
    uuidCarrier: 'carrier_uuid',        // *** grey will be the color, if I have a heart.
    uuidCampaign: 'campaign_uuid',      
    uuidAlert: 'alert_uuid',
    uuidContact: 'contact_uuid',
    uuidNode: 'node_uuid',
    uuidCluster: 'cluster_uuid',
    uuidCohort: 'cohort_uuid',
    uuidCube: 'cube_uuid',
    uuidTask: 'task_uuid',
    uuidCompany: 'company_uuid',
    uuidDirectory: 'directory_uuid',
    uuidSound: 'sound_uuid',
    uuidGateway: 'gateway_uuid',
    uuidNumber: 'number_uuid',
    uuidAccount: 'account_uuid',
    uuidResource: 'resource_uuid',
    uuidMessage: 'message_uuid',

    lapse: 'lapse',

    startTime: 'start_time',
    endTime: 'end_time',

    first: 'first',
    last: 'last',

    next: 'next',
    previous: 'previous',

    pageNumber: 'page_number',
    pageSize: 'page_size',
    pageSmall: 8,
    pageMedium: 13,
    pageBig: 21
};

/*
 Configuration daemons
*/
fun.conf.daemons = {
    ws_server: 'ws://' + fun.conf.domain,
    ws_port: '10080',
    stun_port: '19302',
    turn_port: '3478',
    stun_server: 'stun.' + fun.conf.domain,
    turn_server: 'turn.' + fun.conf.domain,
    coturn_server: 'coturn.' + fun.conf.domain,
    sip_server: 'sip.' + fun.conf.domain
};

/*
 Common timeouts
*/
fun.conf.timeouts = {
    big: 60000,
    medium: 15000,
    small: 5000
};

/*
 Current SIP client configuration
*/
fun.conf.sip = {
    registrar_server: fun.conf.daemons.sip_server,
    ws_servers: fun.utils.format('%s%s', fun.conf.daemons.ws_server, fun.conf.daemons.ws_port),

    stun_servers: fun.utils.format('%s:%s', fun.conf.daemons.stun_server, fun.conf.daemons.stun_port),
    turn_servers: fun.utils.format('%s:%s', fun.conf.daemons.turn_server, fun.conf.daemons.turn_port),

    register: true,
    register_expires: '600',

    connection_recovery_min_interval: '3',
    connection_recovery_max_interval: '30',

    uri: fun.utils.format('sip:%s@%s', fun.conf.account, fun.conf.domain),
    password: '',

    display_name: 'Juan Monk',
    authorization_user: '',

    no_answer_timeout: '60',
    trace_sip: false,

    use_preloaded_route: false,

    hack_via_tcp: true,
    hacK_ip_in_contact: false
};

/*
 System urls
*/
fun.conf.urls = {
    upload: '/upload/',
    login: '/login/',
    logout: '/logout/',

    user: fun.utils.format('/users/%s', fun.conf.account),
    users: '/users/',

    userRegister: fun.utils.format('/users/%s/register/', fun.conf.account),

    org: fun.utils.format('/orgs/%s', fun.conf.account),
    orgs: '/orgs/',

    record: fun.utils.format('/records/%s', fun.conf.uuidRecord),
    records: '/records/',

    billing: fun.utils.format('/billings/%s', fun.conf.uuidBilling),
    billings: '/billings/',
    
    summary: '/records/summary/',
    summaries: '/records/summaries/',

    summaryStart: fun.utils.format('/records/summary/start/%s', fun.conf.startTime),
    summaryStartEnd: fun.utils.format('/records/summary/start/%s/end/%s', fun.conf.startTime, fun.conf.endTime),

    summariesStart: fun.utils.format('/records/summaries/start/%s', fun.conf.startTime),
    summariesStartEnd: fun.utils.format('/records/summaries/start/%s/end/%s', fun.conf.startTime, fun.conf.endTime),

    lapseSummary: fun.utils.format('/records/summary/%s', fun.conf.lapse),
    lapseSummaries: fun.utils.format('/records/summaries/%s', fun.conf.lapse),

    lapseSummaryStart: fun.utils.format('/records/summary/%s/start/%s', fun.conf.lapse, fun.conf.startTime),
    lapseSummaryStartEnd: fun.utils.format('/records/summary/%s/start/%s/end/%s', fun.conf.lapse, fun.conf.startTime, fun.conf.endTime),

    lapseSummariesStart: fun.utils.format('/records/summaries/%s/start/%s', fun.conf.lapse, fun.conf.startTime),
    lapseSummariesStartEnd: fun.utils.format('/records/summaries/%s/start/%s/end/%s', fun.conf.lapse, fun.conf.startTime, fun.conf.endTime),

    recordsStart: fun.utils.format('/records/start/%s', fun.conf.startTime),
    recordsStartEnd: fun.utils.format('/records/start/%s/end/%s', fun.conf.startTime, fun.conf.endTime),

    billingsRecord: fun.utils.format('/billings/records/%s', fun.conf.uuidRecord),
    billingsRecords: '/billings/records/',
    
    billingsStart: fun.utils.format('/billings/start/%s', fun.conf.startTime),
    billingsStartEnd: fun.utils.format('/billings/start/%s/end/%s', fun.conf.startTime, fun.conf.endTime),

    billingsRecordsStart: fun.utils.format('/billings/records/start/%s', fun.conf.startTime),
    billingsRecordsStartEnd: fun.utils.format('/billings/records/start/%s/end/%s', fun.conf.startTime, fun.conf.endTime),

    carrier: fun.utils.format('/carriers/%s', fun.conf.uuidCarrier),
    carriers: '/carriers/',

    contact: fun.utils.format('/contacts/%s', fun.conf.uuidContact),
    contacts: '/contacts/',
    
    cube: fun.utils.format('/cubes/%s', fun.conf.uuidCube),
    cubes: '/cubes/',

    task: fun.utils.format('/tasks/%s', fun.conf.uuidTask),
    tasks: '/tasks/',

    resource: fun.utils.format('/resources/%s', fun.conf.uuidResource),
    resources: '/resources/',

    message: fun.utils.format('/messages/%s', fun.conf.uuidMessage),
    messages: '/messages/',

    company: fun.utils.format('/companies/%s', fun.conf.uuidCompany),
    companies: '/companies/',

    directory: fun.utils.format('/directories/%s', fun.conf.uuidDirectory),
    directories: '/directories/',

    campaign: fun.utils.format('/campaigns/%s', fun.conf.uuidCampaign),
    campaigns: '/campaigns/',

    alert: fun.utils.format('/alerts/%s', fun.conf.uuidAlert),
    alerts: '/alerts/',

    gateway: fun.utils.format('/gateways/%s', fun.conf.uuidGateway),
    gateways: '/gateways/',

    message: fun.utils.format('/messages/%s', fun.conf.uuidMessage),
    messages: '/messages/',

    number: fun.utils.format('/numbers/%s', fun.conf.uuidNumber),
    numbers: '/numbers/',

    phoneNumber: fun.utils.format('/phonenumbers/%s', fun.conf.uuidPhoneNumber),
    phoneNumbers: '/phonenumbers/',

    /*sounds, recordings*/

    sounds: fun.utils.format('/sounds/'),

    recording: fun.utils.format('/recordings/%s', fun.conf.uuidRecording),
    recordings: '/recordings/',
};

/*
 HTML templates
*/
fun.conf.templates = {
    navbar: fun.utils.format('%s/navbar.html', fun.conf.html),
    
    navLanding: fun.utils.format('%s/navLanding.html', fun.conf.html),
    navDashboard: fun.utils.format('%s/navDashboard.html', fun.conf.html),
    
    subheader: fun.utils.format('%s/subheader.html', fun.conf.html),
    headNav: fun.utils.format('%s/headNav.html', fun.conf.html),
    headNavCampaigns: fun.utils.format('%s/headNavCampaigns.html', fun.conf.html),
    headNavReports: fun.utils.format('%s/headNavReports.html', fun.conf.html),
    
    landing: fun.utils.format('%s/landing.html', fun.conf.html),
    
    development: fun.utils.format('%s/development.html', fun.conf.html),
    homes: fun.utils.format('%s/homes.html', fun.conf.html),
    amenities: fun.utils.format('%s/amenities.html', fun.conf.html),
    gallery: fun.utils.format('%s/gallery.html', fun.conf.html),
    contact: fun.utils.format('%s/contact.html', fun.conf.html),

    footer: fun.utils.format('%s/footer.html', fun.conf.html)
};

/*
 Hash tags for backbone.js router
*/
fun.conf.hash = {
    home: '#home',
    landing: '#landing',
    howto: '#howto',
    features: '#features',
    enterprise: '#enterprise',
    terms: '#terms',
    privacy: '#privacy',
    security: '#security',
    blog: '#blog',
    status: '#status',
    developers: '#developers',
    help: '#help',
    support: '#support',
    signup: '#signup',
    login: '#login',
    gateways: '#gateways',
    accounts: '#accounts',
    messages: '#messages',
    resources: '#resources',

    dashboard : '#dashboard',
    dashboardWithAccount: '#dashboard/a{account}',

    profile: '#profile',
    profileWithAccount: '#profile/a{account}',

    activity: '#activity',
    orgs: '#orgs',
    campaigns: '#campaigns',
    cohorts: '#cohorts',
    nodes: '#nodes',
    clusters: '#clusters',
    members: '#members',
    numbers: '#numbers',
    teams: '#teams',
    phone: '#phone',
    reports: '#reports',
    reportsWithPage: '#reports/p{page}',
    carriers: '#carriers',
    contacts: '#contacts',
    cubes: '#cubes',
    contactsWithPage: '#contacts/p{page}',
    tasks: '#tasks',
    companies: '#companies',
    sounds: '#sounds',
    recordings: '#recordings',
    settings: '#settings',
    development: '#development'
};
