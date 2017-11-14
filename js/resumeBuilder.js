var DATA = "%data%";

var bio = {
    "name": "Java Scriptz",
    "role": "Web Developer",
    "contacts": {
        "mobile": "(555) 735-5894",
        "email": "j.scriptz@jmail.com",
        "twitter": "codebyjs",
        "github": "codebyjs",
        "blog": "blog.codebyjs.com",
        "location": "New York, NY"
    },
    "welcomeMessage": "Hello, and welcome to my site.",
    "skills": ["HTML", "CSS", "JS"],
    "biopic": "images/biophoto.jpg",
    "display": function () {
        var formattedHTMLheaderName = HTMLheaderName.replace(DATA, bio.name);
        var formattedHTMLheaderRole = HTMLheaderRole.replace(DATA, bio.role);
        $("#header").prepend(formattedHTMLheaderRole);
        $("#header").prepend(formattedHTMLheaderName);

        var formattedHTMLmobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
        var formattedHTMLemail = HTMLemail.replace(DATA, bio.contacts.email);
        var formattedHTMLtwitter = HTMLtwitter.replace(DATA, bio.contacts.twitter);
        var formattedHTMLgithub = HTMLgithub.replace(DATA, bio.contacts.github);
        var formattedHTMLblog = HTMLblog.replace(DATA, bio.contacts.blog);
        var formattedHTMLlocation = HTMLlocation.replace(DATA, bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedHTMLmobile);
        $("#topContacts, #footerContacts").append(formattedHTMLemail);
        $("#topContacts, #footerContacts").append(formattedHTMLtwitter);
        $("#topContacts, #footerContacts").append(formattedHTMLgithub);
        $("#topContacts, #footerContacts").append(formattedHTMLblog);
        $("#topContacts, #footerContacts").append(formattedHTMLlocation);

        var formattedHTMLbioPic = HTMLbioPic.replace(DATA, bio.biopic);
        var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);
        $("#header").append(formattedHTMLbioPic);
        $("#header").append(formattedHTMLwelcomeMsg);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            for (var x = 0; x < bio.skills.length; x++) {
                var formattedHTMLSkills = HTMLskills.replace("%data%", bio.skills[x]);
                $("#skills").append(formattedHTMLSkills);
            }
        }
    }
};


var education = {
    "schools": [
        {
            "name": "Code University",
            "location": "Queens, NY",
            "degree": "Masters",
            "majors": ["Programing"],
            "dates": "May 2001"
        }
    ],
    "onlineCourses": [
        {
            "title": "Project: Online Resume",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/"
    }],

    "display": function () {
        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);

            for (var x = 0; x < education.schools.length; x++) {
                var formattedHTMLschoolName = HTMLschoolName.replace(DATA, education.schools[x].name);
                var formattedHTMLschoolLocation = HTMLschoolLocation.replace(DATA, education.schools[x].location);
                var formattedHTMLschoolDegree = HTMLschoolDegree.replace(DATA, education.schools[x].degree);
                var formattedHTMLschoolMajor = HTMLschoolMajor.replace(DATA, education.schools[x].majors);
                var formattedHTMLschoolDates = HTMLschoolDates.replace(DATA, education.schools[x].dates);

                $(".education-entry").append(formattedHTMLschoolName + formattedHTMLschoolDegree);
                $(".education-entry").append(formattedHTMLschoolDates + formattedHTMLschoolLocation);
                $(".education-entry").append(formattedHTMLschoolMajor);
            }
        }


        if (education.onlineCourses.length > 0) {
            $(".education-entry").append(HTMLonlineClasses);

            for (var y = 0; y < education.onlineCourses.length; y++) {
                var formattedHTMLonlineTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[y].title);
                var formattedSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[y].school);
                var formattedOnlineDates = HTMLonlineDates.replace(DATA, education.onlineCourses[y].dates);
                var formattedHTMLonlineURL = HTMLonlineURL.replace(DATA, education.onlineCourses[y].url);

                $(".education-entry").append(formattedHTMLonlineTitle + formattedSchool);
                $(".education-entry").append(formattedOnlineDates);
                $(".education-entry").append(formattedHTMLonlineURL);
            }
        }
    }
};

var work = {

    "jobs": [
        {
            "employer": "Woogle",
            "title": "Developer",
            "location": "Silicon Valley, CA",
            "dates": "April 2014 - Present",
            "description": "Building things using code for Woogle.",
    },
        {
            "employer": "Tony's Pizza",
            "title": "Manager",
            "location": "Las Vegas, NV",
            "dates": "January 1987 - December 2001",
            "description": "Managed Tony's Pizza Employees.",
    }],


    "display": function () {
        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);

            for (var x = 0; x < work.jobs.length; x++) {
                var formattedHTMLWorkEmployer = HTMLworkEmployer.replace(DATA, work.jobs[x].employer);
                var formattedHTMLWorkTitle = HTMLworkTitle.replace(DATA, work.jobs[x].title);
                var formattedHTMLWorkLocation = HTMLworkLocation.replace(DATA, work.jobs[x].location);
                var formattedHTMLWorkDates = HTMLworkDates.replace(DATA, work.jobs[x].dates);
                var formattedHTMLWorkDescription = HTMLworkDescription.replace(DATA, work.jobs[x].description);

                $(".work-entry").append(formattedHTMLWorkEmployer + formattedHTMLWorkTitle);
                $(".work-entry").append(formattedHTMLWorkLocation);
                $(".work-entry").append(formattedHTMLWorkDates);
                $(".work-entry").append(formattedHTMLWorkDescription);
            }
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "Website 1",
            "dates": "2017",
            "description": "Lorem ipsum dolor sit amet.",
            "images": ["images/project1.jpg", "images/project2.jpg"]
    },
        {
            "title": "Website 2",
            "dates": "2017",
            "description": "Lorem ipsum dolor sit amet.",
            "images": ["images/project1.jpg", "images/project2.jpg"]
    }],

    "display": function () {
        if (projects.projects.length > 0) {
            $("#projects").append(HTMLprojectStart);

            for (var x = 0; x < projects.projects.length; x++) {
                var formattedHTMLProjectTitle = HTMLprojectTitle.replace(DATA, projects.projects[x].title);
                var formattedHTMLProjectDates = HTMLprojectDates.replace(DATA, projects.projects[x].dates);
                var formattedHTMLProjectDescription = HTMLprojectDescription.replace(DATA, projects.projects[x].description);

                $(".project-entry").append(formattedHTMLProjectTitle);
                $(".project-entry").append(formattedHTMLProjectDates);
                $(".project-entry").append(formattedHTMLProjectDescription);

                for (var i = 0; i < projects.projects[x].images.length; i++) {
                    var formattedHTMLprojectImage = HTMLprojectImage.replace(DATA, projects.projects[x].images[i]);
                    $(".project-entry").append(formattedHTMLprojectImage);
                }
            }
        }
    }
};

$("#mapDiv").append(googleMap);

education.display();
projects.display();
work.display();
bio.display();
