// use zen_class;

// Building the Database

db.users.insertMany([{email:'vipul@ymail.com',paswd:'12345678',fname:'Vipul',lname:'Deorani'},
{email:'charu@gmail.com',paswd:'11223344',fname:'Shreya',lname:'Deorani'},
{email:'lavi@gmail.com',paswd:'10120230',fname:'Rakshita',lname:'kainthola'}]);

db.code_kata.insertMany([{concept:'Basics',maxc:1570,total:41,solved:[{email:'vipul@ymail.com',coins:360,num:12},{email:'charu@gmail.com',coins:400,num:20},{email:'lavi@gmail.com',coins:200,num:10}]},
{concept:'Array',maxc:16310,total:308,solved:[{email:'vipul@ymail.com',coins:0,num:0},{email:'charu@gmail.com',coins:600,num:30},{email:'lavi@gmail.com',coins:400,num:20}]},
{concept:'Strings',maxc:10040,total:196,solved:[{email:'vipul@ymail.com',coins:0,num:0},{email:'charu@gmail.com',coins:800,num:40},{email:'lavi@gmail.com',coins:600,num:30}]}]);

db.attendance.insertMany([{class:'HTML and CSS',student:'vipul@ymail.com',present:1},
{class:'HTML and CSS',student:'charu@gmail.com',present:0},
{class:'HTML and CSS',student:'lavi@gmail.com',present:1},
{class:'Javascript',student:'vipul@ymail.com',present:0},
{class:'Javascript',student:'charu@gmail.com',present:1},
{class:'Javascript',student:'lavi@gmail.com',present:0}]);

db.topics.insertMany([{num:1,heading:"Introduction to Browser & web",contents:"Introduction to web Browser Wars DOM tree CSSOM tree,\nBrowser internals - HTML parser,\nCSS parser,  JavaScript V8 engine,\ninternals IP – MAC address – Ports & Evolution of HTTP,\nHTTP Methods\nHow the Server looks at the URL\nRequest & Response cycle",pre_read:"No preread available",classes:[{name:'Javascript',class_date:'2024-01-03',beg_time:'10:00',end_time:'12:30'}]},
{num:10,heading:'HTML & CSS',contents:"Intro to pseudo-classes (link, visited,hover, active)\nbox model: padding, margin, border \nGrid\nFlex - display, direction, wrap, flex-flow, justify-content, align-content\nposition property: fixed, static, relative, absolute, sticky\nparent inherit\ngradient",pre_read:"https://rvsp.github.io/CSS/\nhttps://web.dev/learn/css/\nhttps://css-tricks.com/\nhttps://github.com/rvsp/html-CSS/",classes:[{name:'HTML and CSS',class_date:'2024-02-06',beg_time:'10:00',end_time:'13:00'}]},
{num:20,heading:"Async programming",contents:"Recap of callback, Promise Topics",pre_read:"No preread available"}]);

db.tasks.insertMany([{topic:1,stmt:'https://www.google.com',submit:[{email:'vipul@ymail.com',link:'https://dc.fandom.com'}]},
{topic:20,stmt:'https://www.wikipedia.org',submits:[{email:'charu@gmail.com',link:'https://marvel.fandom.com'}]}]);

db.company_drives.insertMany([{company:'Google',vacancies:10,hires:[{email:'vipul@ymail.com'}]},
{company:'Microsoft',vacancies:15,hires:[{email:'charu@gmail.com'},{email:'lavi@gmail.com'}]},
{company:'Infosys',vacancies:20,hires:[]},
{company:'Yahoo',vacancies:25,hires:[]},
{company:'Wipro',vacancies:30,hires:[]},
{company:'T.C.S.',vacancies:35,hires:[]}]);

db.mentors.insertMany([{email:'poonam@gmail.com',paswd:'87654321',fname:'Poonam',lname:'Chauhan',teaches:[{email:'vipul@ymail.com'}]},
{email:'mukul@gmail.com',paswd:'44332211',fname:'Mukul',lname:'Negi',teaches:[{email:'charu@gmail.com'},{email:'lavi@gmail.com'}]}]);
