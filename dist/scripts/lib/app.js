'use strict';

$(document).ready(function() {

	!function ($) {
    $(function() {

      var $root = $('html, body');

      $('a[href^="#calculator"]').click(function() {
        // var href = $.attr(this, 'href');
        $root.animate({
          scrollTop: $('#gpacalculator').offset().top-80
        }, 500, function () {
            //window.location.hash = href;
        });
        return false;
      });

    });
	}(window.jQuery);

	var tour = new Tour({
    backdrop  : true,
    template: '<div class="popover">'+
                '<div class="arrow"></div>'+
                '<h3 class="popover-title"></h3>'+
                '<div class="popover-content"></div>'+
                '<div class="popover-navigation">'+
                '<hr>'+
                  '<div class="btn-group">'+
                    '<button class="btn btn-sm btn-default" data-role="prev">&laquo; Prev</button>'+
                    '<button class="btn btn-sm btn-default" data-role="next">Next &raquo;</button>'+
                  '</div>'+
                  '<button class="btn btn-sm btn-default" data-role="end">Close</button>'+
                '</div>'+
              '</div>',
	});
	tour.addSteps([
    {
      element   : '#programmecell', // string (jQuery selector) - html element next to which the step popover should be shown
      title     : 'Start here', // string - title of the popover
      content   : 'First choose your <strong>Campus</strong> and <strong>Faculty</strong>', // string - content of the popover
      placement : 'top',
    },
    {
      element   : '#addcourses',
      title     : 'Add your courses',
      content   : 'Click here to <strong>Add</strong> to your list of courses and grades. Repeat as needed to have a complete list of your grades',
      placement : 'right',
    },
    {
      element   : '#coursegrades',
      title     : 'Your courses',
      content   : 'Enter the grades for the courses you have completed.',
      placement : 'top',
    },
    {
      element   : '#coursesandgrades',
      title     : 'Your Courses and Grades',
      content   : 'The <strong>Courses and Grades</strong> that you have entered will appear here.',
      placement : 'top',
    },
    {
      element   : '#addcell',
      title     : 'Add to your list of courses',
      content   : 'Click on this to add to your list of courses and grades. Repeat as needed to have a complete list of your grades',
      placement : 'right',
    },
    {
      element   : '#gpa1',
      title     : 'GPA 1',
      content   : 'Your points will automatically be calculated and displayed.',
      placement : 'left',
    },
    {
      element   : '#priorgpa',
      title     : 'Prior GPA Scheme',
      content   : 'Your points from the <strong>Old GPA Scheme</strong> will automatically be calculated and displayed.',
      placement : 'left',
    },
    {
      element   : '#gpa2',
      title     : 'GPA 2',
      content   : 'Your converted points will automatically be calculated and displayed',
      placement : 'left',
    },
    {
      element   : '#currentgpa',
      title     : 'Current GPA Scheme',
      content   : 'Your points from the <strong>Current GPA Scheme</strong> will automatically be calculated and displayed',
      placement : 'left',
    },
    {
      element   : '#comparison',
      title     : 'Comparison',
      content   : 'Your GPA under both schemes will automatically be calculated and displayed',
      placement : 'top',
    },
    {
      element   : '#separategpas',
      title     : 'Cumulative and Converted GPAs',
      content   : 'The <strong>Cumulative GPAs</strong> for the two schemes will be calculated and displayed here. The old scheme will then be </strong>converted to the 2014/15 Scheme</strong>',
      placement : 'top',
    },
    {
      element   : '#combinedgpa',
      title     : 'Combined GPA',
      content   : 'The <strong>Combined Cumulative and Degree GPAs</strong> will be calculated and displayed here along with the <strong>Class of Degree</strong> earned.',
      placement : 'top',
    },
    {
      element   : '#formulas',
      title     : 'GPA Formulas',
      content   : 'See how the <strong>Combined Cumulative and Degree GPAs</strong> were calculated using the prior and current GPA schemes.',
      placement : 'top',
    }
	]);

	// $('#help').click(function(){
	// 	//tour.end();
	// 	console.log(tour);
	// 	tour.restart();
	// });
	$(document).on('click', '#help', function() {
		// console.log(tour);
		tour.restart();
	});

	$(document).scroll(function() {
		var myhero = $(this).scrollTop();
		var mycalc = $('#gpacalculator').offset().top;
		mycalc = mycalc/4;
		if (myhero<=mycalc) {
			var myopacity = myhero/mycalc;
      // $('#topnav').attr('style', 'background-color:rgba(67,158,36,'+myopacity+')');
      $('#topnav').attr('style', 'background-color:rgba(128,143,150,'+myopacity+')');
		}
	});

});
