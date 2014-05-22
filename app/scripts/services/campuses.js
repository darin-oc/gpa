'use strict';

angular.module('gpaApp')
  .factory('campuses', function () {
    // Service logic
    var campuses, campus, themes, dynamicThemeState = true;

    campuses = [
      {name:'Open Campus', value:'3', shortName:'open'},
      {name:'Mona Campus', value:'6', shortName:'mona'},
      {name:'Cavehill Campus', value:'2', shortName:'cave'},
      {name:'St. Augustine Campus', value:'8', shortName:'sta'}
    ];

    themes = [
      {name:'open', color:'rgba(250,102,034,0.9552238805970149)', alert:'alert-warning', table:'warning', font:'text-yg', jumbofont:'jumbocolordefault'},
      {name:'mona', color:'rgba(229,015,022,0.9552238805970149)', alert:'alert-danger', table:'danger', font:'text-yg', jumbofont:'jumbocolordefault'},
      {name:'cave', color:'rgba(252,204,056,0.9552238805970149)', alert:'alert-warning', table:'warning', font:'success', jumbofont:'jumbocolorblack'},
      {name:'sta', color:'rgba(030,107,201,0.9552238805970149)', alert:'alert-info', table:'sta', font:'text-yg', jumbofont:'jumbocolordefault'},
      {name:'default', color:'rgba(67,158,36,0.9552238805970149)', alert:'alert-success', table:'success', font:'text-yg', jumbofont:'jumbocolordefault'}
    ];
    // Public API here
    return {
      collection: function () {
        return campuses;
      },
      defaultCampus: function (defaultCampus) {
        for (var i = 0; i < campuses.length; i++) {
          if (campuses[i].shortName === defaultCampus) {
            return campuses[i];
          }
        }
        return null;
      },
      selectedCampus: function (selectedCampus) {
        campus = selectedCampus;
      },
      thisCampus: function () {
        if (campus) {
          return campus.shortName;
        }
        else {
          return null;
        }
      },
      theme: function (name) {
        if (!dynamicThemeState) {
          name = 'default';
        }
        for (var i = 0; i < themes.length; i++) {
          if (themes[i].name === name) {
            return themes[i];
          }
        }
      },
      dynamicTheme: function (state) {
        dynamicThemeState = state;
      }
    };
  });
