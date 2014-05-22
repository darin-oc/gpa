'use strict';

angular.module('gpaApp')
  .factory('faculties', function (campuses) {
    // Service logic
    var facultiesByCampus, faculty;

    facultiesByCampus = [
      {campus:'sta', faculties: [
        {name:'Food and Agriculture', shortName:'FA'},
        {name:'Engineering', shortName:'Eng'},
        {name:'Institute for Gender & Development Studies', shortName:'Gen'},
        {name:'Humanities & Education', shortName:'HE'},
        {name:'Law', shortName:'Law'},
        {name:'Medical Sciences', shortName:'Med'},
        {name:'Science & Technology', shortName:'ST'},
        {name:'Social Sciences', shortName:'SS'},
        {name:'T&T Council of Legal Education', shortName:'CLE'}
      ]},
      {campus:'open', faculties: [

      ]},
      {campus:'mona', faculties: [
        {name:'Humanities', shortName:'Hum'},
        {name:'Engineering', shortName:'Eng'},
        {name:'Law', shortName:'Law'},
        {name:'Medical Sciences', shortName:'Med'},
        {name:'Science & Technology', shortName:'ST'},
        {name:'Social Sciences', shortName:'SS'},
      ]},
      {campus:'cave', faculties: [
        {name:'Institute for Gender & Development Studies', shortName:'Gen'},
        {name:'Humanities & Education', shortName:'HE'},
        {name:'Law', shortName:'Law'},
        {name:'Medical Sciences', shortName:'Med'},
        {name:'Science & Technology', shortName:'ST'},
        {name:'Social Sciences', shortName:'SS'},
      ]}
    ];
    // Public API here
    return {
      collection: function () {
        return facultiesByCampus;
      },
      campusCollection: function (campus) {
        var campusFaculties = [];

        for (var i = 0; i < facultiesByCampus.length; i++) {
          if (facultiesByCampus[i].campus === campus) {
            campusFaculties = facultiesByCampus[i].faculties;
          }
        }
        return campusFaculties;
      },
      defaultFaculty: function (defaultFaculty) {
        if (campuses.thisCampus()) {
          for (var i = 0; i < facultiesByCampus.length; i++) {
            if (facultiesByCampus[i].campus === campuses.thisCampus()) {
              for (var j = 0; j < facultiesByCampus[i].faculties.length; j++) {
                if (facultiesByCampus[i].faculties[j].shortName === defaultFaculty) {
                  return facultiesByCampus[i].faculties[j];
                }
              }
            }
          }
        }
        return null;
      },
      selectedFaculty: function (selectedFaculty) {
        faculty = selectedFaculty;
      },
      thisFaculty: function () {
        if (faculty) {
          // console.log(faculty.shortName);
          return faculty.shortName;
        }
        else {
          return null;
        }
      }
    };
  });
