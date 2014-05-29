# GPA Comparison Calculator

> The Board of Undergraduate Studies introduces a revised Grade Point Average (GPA) effective Semester I 2014/2015. Visit the http://www.uwi.edu/undergraduatestudies/gpascheme.aspx page to learn about the changes and the benefits.

Written by Darin Brathwaite (darin.brathwaite@open.uwi.edu) and Reiza Haniff (reiza.haniff@open.uwi.edu).

Maintained by Darin Brathwaite (darin.brathwaite@open.uwi.edu).

## Usage

The `/app` directory contains all the raw files for the application. The `/dist` directory contains the minified version of the application. Minified files means faster loadinf of the application by clients. Place the files and folders of either `/app` or `/dist` in the public facing directory of your web server.

## Configuration

Use the **config.json** file to configure the settings of the app. The instructions for each setting can found in the "_comment_*setting name*". For example, the instructions for setting the `"defaultCampus"` can be found in `"_comment_defaultCampus1"`.

`"studentProgrammeRecordURI"` in **config.json** can be used to automatically load student's programme records if your student management system has a web services API. `"studentProgrammeRecordURI"` expects the response to be in json format. In the json response is an array named "sar" and each object is a row of the student's record containing "term_code", "course_code", "course_type_name", "grade", "grade_point", "program_levels_name", "quality_hours" and "quality_points" (see example.json).

`"coursesURI"` in the **config.json** can be used to load all of the courses you wish to appear in the app. This can be from a json response from your student management system or a .json file in the app itself. "coursesURI" expects the response to contain an array named "courses" and each object is a course with "name" and "group". The "group" value is the course's prefix and is used to group the courses in the option select menu for Course in the app.

## How to use the app

1. Select a **Campus** and a **Faculty** if available
2. Click on the **Add Course** button to add courses and grades to the list
3. In the screens that pops up select all the values for a a particular course. The selection will turn green when a valuse i selected
4. To add another course click the green circle with the plus sign
5. To delete a course click the red circle with the minus sign
6. Save the selected courses to add them to the calculator
7. To remove a course from the calculator click on the red circle with the cross
8. To Exclude a course from the calculations uncheck the check box to the left of the course
9. Click on the formula name to understand how the combined GPAs were calculated