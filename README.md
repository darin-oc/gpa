# GPA Comparison Calculator

> The Board of Undergraduate Studies introduces a revised Grade Point Average (GPA) effective Semester I 2014/2015. Visit the http://www.uwi.edu/undergraduatestudies/gpascheme.aspx page to learn about the changes and the benefits.

Written by Darin Brathwaite (darin.brathwaite@open.uwi.edu) and Reiza Haniff (reiza.haniff@open.uwi.edu).

Maintained by Darin Brathwaite (darin.brathwaite@open.uwi.edu).

## Usage
The `/app` directory contains all the raw files for the application. The `/dist` directory contains the minified version of the application. Minified files means faster loading of the application by clients. Place the files and folders of either `/app` or `/dist` in the public facing directory of your web server.

## Configuration
Use the **config.json** file to configure the default settings of the app. The instructions for each **"setting"** can found in the **"_comment_setting"**. For example, the instructions for setting the `"defaultCampus"` can be found in `"_comment_defaultCampus"`.
```json
"_comment_defaultCampus"  : "Can be set to null, open, mona, cave or sta",
"defaultCampus"           : "open",
```

`"studentProgrammeRecordURI"` is used to automatically load student's programme records if your student management system has a web services API. `"studentProgrammeRecordURI"` expects the response to be in json format. 
An example of the expected json response is shown below (also see the example.json file).
```json
{
  "sar": [
    {
      "term_code": "201210",
      "course_code": "ACCT1002",
      "course_type_name": "Core",
      "grade": "B",
      "grade_point": "9",
      "program_levels_name": "Level 1",
      "quality_hours": "3",
      "quality_points": "3"
    },
    {
      "term_code": "201220",
      "course_code": "ECON1003",
      "course_type_name": "Core",
      "grade": "C-",
      "grade_point": "5.1",
      "program_levels_name": "Level 1",
      "quality_hours": "3",
      "quality_points": "1.7"
    }
  ]
}
```

`"coursesURI"` is used to load all of the courses you wish to appear in the app. This can be from a json response from your student management system or a .json file in the app itself. `"coursesURI"` expects the response to contain an array named `"courses"` and each object is a course with `"name"` and `"group"`. The `"group"` value is the course's prefix and is used to group the courses in the option select menu for Course in the app.

## How to use the app
1. Select a **Campus** and a **Faculty** if available
2. Click on the **Add Course** button to add courses and grades to the list
3. In the **Add your courses** window, each row represents a course. 
    * Select all the values for a particular course. Each selection will turn green when a valule is selected. 
    * To add another course click the green circle with the plus sign
    * To delete a course click the red circle with the minus sign
    * Save the selected courses to add them to the calculator
4. To remove a course from the calculator click on the red circle with the cross
5. To Exclude a course from the calculations uncheck the check box to the left of the course
6. The results for **Prior GPA Scheme** and **Current GPA Scheme** along with the **Combined GPAs** are shown below the courses
7. To learn how the combined GPAs were calculated click on the formula's name
 
## Dealing with javascript's floating point precision

Javascript's floating point precision issues are well documented http://stackoverflow.com/questions/11695618/dealing-with-float-precision-in-javascript . To work around this, the **big.js** library http://mikemcl.github.io/big.js/ is used for all calculations in the GPA calculator.

## Formulas used in calulations
### GPA conversion
Class | Formula
--------- | ----------
**Upper Class** | newGpa = oldGpa
**Upper Second** | newGpa = ((49 * oldGpa) + 149.5) / 99
**Lower Second** | newGpa = ((49 * oldGpa) + 149) / 99
**Pass** | newGpa = (199 * oldGpa) / 99
```js
convertOldToNewGpaUsingFormula: function (oldGpa) {
  if (parseFloat(oldGpa) > 2.99) {
    return oldGpa;
  }
  else if ((parseFloat(oldGpa) <= 2.99) && (parseFloat(oldGpa) > 1.99)) {
    // ((49 * oldGpa) + 149.5) / 99
    return ((new Big(49).times(oldGpa)).plus(149.5)).div(99).toFixed(2);
  }
  else if ((parseFloat(oldGpa) <= 1.99) && (parseFloat(oldGpa) > 0.99)) {
    // ((49 * oldGpa) + 149) / 99
    return ((new Big(49).times(oldGpa)).plus(149)).div(99).toFixed(2);
  }
  else if (parseFloat(oldGpa) <= 0.99) {
    // (199 * oldGpa) / 99
    return (new Big(199).times(oldGpa)).div(99).toFixed(2);
  }
}
```
### Grade points
gradePoints = qualityHours * qualityPoints
```js
function calculate (qualityHours, qualityPoints) {
  var gradePoints = 0;
  if(qualityHours && qualityPoints){
    // qualityHours * qualityPoints
    gradePoints = new Big(qualityHours).times(qualityPoints);
    gradePoints = gradePoints.toFixed(2);
  else{
    gradePoints = 0.00;
  }
  return gradePoints;
}
```
### GPA
gpa = oldGpaTotalGradePoints / oldGpaTotalQualityHours
```js
function gpaCalculation (oldGpaTotalGradePoints, oldGpaTotalQualityHours) {
  var gpa = 0;
  if(oldGpaTotalGradePoints && oldGpaTotalQualityHours && (oldGpaTotalGradePoints != 0) && (oldGpaTotalQualityHours != 0)){
    // oldGpaTotalGradePoints / oldGpaTotalQualityHours
    gpa = new Big(oldGpaTotalGradePoints).div(new Big(oldGpaTotalQualityHours));
  }
  else{
    gpa = 0;
  }
  gpa = gpa.toFixed(2);
  return gpa;
}
```
### Combined GPA
combinedGpa = (priorGpaProduct + currentGpaProduct) / (totalHours)
```js
function combinedGpaFormula (priorGpaHours, priorGpa, currentGpaHours, currentGpa) {
  var combinedGpa = 0, fixedCombinedGpa, priorGpaProduct, currentGpaProduct, totalHours;

  totalHours = priorGpaHours + currentGpaHours;
  if ((typeof totalHours === 'undefined') || (totalHours === null) || (isNaN(totalHours)) || (totalHours === 0)) {
    combinedGpa = 0;
  }
  else {
    priorGpaProduct   = (new Big(priorGpaHours).times(priorGpa)).toFixed(2);
    currentGpaProduct = (new Big(currentGpaHours).times(currentGpa)).toFixed(2);
    combinedGpa       = (new Big(priorGpaProduct).plus(currentGpaProduct)).div(new Big(totalHours));
  }
  fixedCombinedGpa = combinedGpa.toFixed(3);
  return fixedCombinedGpa.toString();
}
```
### GNU General Public License
