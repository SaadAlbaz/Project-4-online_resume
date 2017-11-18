// Creating bio object then displaying it
var bio= {
    "name":"Saad Albaz",
    "role":"web devoloper",
    "contacts":{
        "mobile": "00966501671553",
        "email": "AlbazSaad7@gmail.com",
        "linkedIn":"https://www.linkedin.com/in/saad-albaz/",
        "github": "https://github.com/SaadAlbaz",
        "location":"Riyadh",
    },
    "welcomeMessage": "Computer Engineer graduate seeking an opportunity, where I can utilize my networking, web development, and embedded systems skills.",
    "skills": ["Team Worker"," Communication Skills", " Self-learning"," Project Leader"],
    "biopic":"images/me.jpg",
    "display": function(){}    
};

bio.display= function(){ 

    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedMobile= HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail= HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub= HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLinkedIn= HTMLlinkedIn.replace("%data%",bio.contacts.linkedIn);
    var formattedLocation= HTMLlocation.replace("%data%",bio.contacts.location);
    var formattedBioPic= HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWelcome= HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

    $("#header").prepend(formattedBioPic);
    $("#header").prepend(formattedWelcome);
    $("#header").prepend(formattedRole); 
    $("#header").prepend(formattedName);
    
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLinkedIn, formattedLocation);

    $("#header").append(HTMLskillsStart);

    for (var i=0; i<bio.skills.length ; i++){

        var formattedSkills= HTMLskills.replace("%data%",bio.skills[i]);
        $("#skills").append(formattedSkills);

    }
};

//-------- Creating education object then displaying it --------
var education= {
    "schools":[
        {
            "name":"KFUPM",
            "location":"Dhahran",
            "degree":"BS",
            "majors":["Computer Engineer"],
            "dates":"2011-2017",
        },
        {
            "name":"Alrowad",
            "location":"Riyadh",
            "degree":"HighSchool",
            "majors":["Scince"],
            "dates":"2009-2011",
        }       
    ],
    "onlineCourses":[
        {
            "title":"Angular2",
            "school":"Udemay",
            "dates":"2016",
            "url":"https://www.udemy.com/angular-2-tutorial-for-beginners/"
        },
        {
            "title":"Ethical Hacking",
            "school":"Udemay",
            "dates":"2015",
            "url":"https://www.udemy.com/penetration-testing"
        }
    ],
    "display": function(){}
};

education.display = function(){

    $("#education").append(HTMLschoolStart);

    for (var i=0; i < education.schools.length ; i++){  //loop through all jobs then append 

        var formattedSchoolName= HTMLschoolName.replace("%data%",education.schools[i].name);
        var formattedSchoolDegree= HTMLschoolDegree.replace("%data%",education.schools[i].degree);
        var formattedSchoolDates= HTMLschoolDates.replace("%data%",education.schools[i].dates);
        var formattedSchoolLocation= HTMLschoolLocation.replace("%data%",education.schools[i].location);
        var formattedSchoolTitle = formattedSchoolName + formattedSchoolDegree;

        $(".education-entry").append(formattedSchoolTitle, formattedSchoolDates, formattedSchoolLocation);

        for( var j=0 ; j < education.schools[i].majors.length ; j++){  // nested loop to loop through schools majors

            var formattedSchoolMajor= HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]);
            $(".education-entry").append( formattedSchoolMajor);

        }      

        
    }  
    
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
 
    for ( var i=0 ; i < education.onlineCourses.length ; i++){  //loop through all jobs then append 

        var formattedOnlineTitle= HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
        var formattedOnlineSchool= HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
        var formattedOnlineDates= HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
        var formattedOnlineURL= HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
        var formattdOnline = formattedOnlineTitle + formattedOnlineSchool;
     
        $(".education-entry:last").append(formattdOnline, formattedOnlineDates, formattedOnlineURL);

    }   
};

//-------- Creating work object then displaying it --------
var work={
    "jobs":[
        {
            "employer":"Saudi Electricity Company",
            "title":"Intern",
            "location":"Riyadh",
            "dates":"2016",
            "description":"Geographical Information System(GIS) database management. Smart Meter Project, where I gain experience on project management."
        },
        {
            "employer":"Tamkeen technologies",
            "title":"Network engineer",
            "location":"Riyadh",
            "dates":"2017-current",
            "description":"Adminstration and opreation of network security",
        }
    ],
    "display": function(){}
};

work.display= function(){

    $("#workExperience").append(HTMLworkStart);

    for (var i=0; i < work.jobs.length ; i++){   //loop through all jobs then append 

        var formattedWorkEmployer= HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
        var formattedWorkTittle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
        var formattedWorkTDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
        var formattedWork = formattedWorkEmployer + formattedWorkTittle;

        $(".work-entry").append(formattedWork, formattedWorkTDates, formattedWorkLocation, formattedWorkDescription);

    }
};

//-------- Creating projects object then displaying it --------
var projects={
    "projects":[
        {
            "title":"Prayer Aid for OCD",
            "dates":"2017",
            "description":"Prayer Aid for OCD helps patients to perform their behavioral therapy exercises by performing the prayers at home without the need to attend therapy sessions at hospitals where the seats are limited. ",
            "images":["images/PAFOCD.jpg"]
        },
        {
            "title":"Network engineer at startup IT College",
            "dates":"2016",
            "description":"Designed a proposal/RFP for setting up a network for the college using Enterprise network architecture. With many departments and remote offices using various technologies of communication.",
            "images":["images/network-project.png"]
        }
    ],
    "display": function(){}
};

projects.display= function(){
    
    $("#projects").append(HTMLprojectStart);

    for ( var i=0 ; i < projects.projects.length ; i++){   //loop through all projects then append 

        var formattedProjectTitle= HTMLprojectTitle.replace("%data%",projects.projects[i].title);
        var formattedProjectDates= HTMLprojectDates.replace("%data%",projects.projects[i].dates);
        var formattedProjectDescription= HTMLprojectDescription.replace("%data%",projects.projects[i].description);

        $(".project-entry").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

        for( var j=0 ; j < projects.projects[i].images.length ; j++){  // nested loop to loop through images project

            var formattedProjectImages= HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
            $(".project-entry").append(formattedProjectImages);

        }        
    }   
};

$("#mapDiv").append(googleMap);

// call display functions
bio.display();
work.display();
projects.display();
education.display();