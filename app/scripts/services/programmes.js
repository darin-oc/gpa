'use strict';

angular.module('gpaApp')
  .factory('programmes', function () {
    // Service logic
    var programmes;

    programmes = [
      {name:'BEd Educational Administration', group:'BEd'},
      {name:'BEd Education Administration (Level 1)', group:'BEd'},
      {name:'BEd Literacy Studies', group:'BEd'},
      {name:'BEd Primary Education Language Arts', group:'BEd'},
      {name:'BSc Economics', group:'BSc'},
      {name:'BSc Accounting', group:'BSc'},
      {name:'BSc Agribusiness Management', group:'BSc'},
      {name:'BSc Banking and Finance', group:'BSc'},
      {name:'BSc Management Studies', group:'BSc'},
      {name:'BEd Secondary Maths Education (A)', group:'BEd'},
      {name:'BEd Secondary English/Literature Education (A)', group:'BEd'},
      {name:'BEd Secondary Spanish Education (A)', group:'BEd'},
      {name:'BEd Secondary Computer Science Education (A)', group:'BEd'},
      {name:'BEd Secondary Chemistry Education (A)', group:'BEd'},
      {name:'BEd Secondary History Education (A)', group:'BEd'},
      {name:'BEd Secondary Maths Education (B)', group:'BEd'},
      {name:'BEd Secondary English/Literature Education (B)', group:'BEd'},
      {name:'BEd Secondary Spanish Education (B)', group:'BEd'},
      {name:'BEd Secondary Computer Science Education (B)', group:'BEd'},
      {name:'BEd Secondary Chemistry Education (B)', group:'BEd'},
      {name:'BEd Secondary History Education (B)', group:'BEd'},
      {name:'BSc Accounting (L2)', group:'BSc'},
      {name:'BEd Literacy Studies Model A', group:'BEd'},
      {name:'BSc Nursing - Post RN', group:'BSc'},
      {name:'ASc in Social Work', group:'ASc'},
      {name:'ASc in the Management of NGOs', group:'ASc'},
      {name:'ASc in Administrative Professional Office Management', group:'ASc'},
      {name:'ASc in Paralegal Studies', group:'ASc'},
      {name:'BEd The Teaching of Primary School Mathematics and Science', group:'BEd'},
      {name:'ASc in Public Sector Management', group:'ASc'},
      {name:'BSc Management Studies (Major)', group:'BSc'},
      {name:'BSc Management Studies (Economics Minor)', group:'BSc'},
      {name:'BEd Educational Leadership and Management (Special)', group:'BEd'},
      {name:'BEd Educational Leadership and Management (Major)', group:'BEd'},
      {name:'BSc Banking and Finance (Special)', group:'BSc'},
      {name:'BSc Banking and Finance (Special)-ECIB', group:'BSc'},
      {name:'BSc Banking and Finance (Lending and Mortgage Underwriting Minor)', group:'BSc'},
      {name:'BSc Banking and Finance (Law for Banking and Finance Minor)', group:'BSc'},
      {name:'BSc Banking and Finance (Compliance and Corporate Governance Minor)', group:'BSc'},
      {name:'BEd Literacy Studies Model B', group:'BEd'},
      {name:'BSc Youth Development Work', group:'BSc'},
      {name:'BEd Early Childhood Development and Family Studies', group:'BEd'},
      {name:'ASc in Business Management at B&B UC', group:'ASc'},
      {name:'BSc in Social Work', group:'BSc'},
      // mona
      {name:'BA African & African Diaspora Std', group:'BA'},
      {name:'BA Carib Sign Lang Interpreting', group:'BA'},
      {name:'BEd Computer Sci./Info. Tech', group:'BEd'},
      {name:'BA Computer Science', group:'BA'},
      {name:'BA Dance', group:'BA'},
      {name:'BA Digital Media Production', group:'BA'},
      {name:'BA Drama', group:'BA'},
      // {name:'BEd Education Science', group:'BEd'},
      {name:'BEd Educational Administration', group:'BEd'},
      {name:'BA Enter & Cultural Entp Mgt', group:'BA'},
      {name:'BA French', group:'BA'},
      {name:'BA French & Education', group:'BA'},
      {name:'BA French & Spanish', group:'BA'},
      {name:'BA Geography', group:'BA'},
      {name:'BA Geography (Special)', group:'BA'},
      {name:'BA History', group:'BA'},
      {name:'BA History & Archaeology', group:'BA'},
      {name:'BEd History Education', group:'BEd'},
      {name:'BA History and Heritage', group:'BA'},
      {name:'BA Integrated Marketing Comm', group:'BA'},
      {name:'BA Journalism', group:'BA'},
      {name:'BA Lang, Comm & Linguistics', group:'BA'},
      {name:'BA Language & Linguistics', group:'BA'},
      {name:'BEd Language Ed - English', group:'BEd'},
      {name:'BEd Language Ed - Lit Studies', group:'BEd'},
      {name:'BEd Language Eudcation: Spanish', group:'BEd'},
      {name:'BA Language and Literature', group:'BA'},
      {name:'BA Language, Communicat & Society', group:'BA'},
      {name:'BA Library & Information Studies', group:'BA'},
      {name:'BA Linguistics', group:'BA'},
      {name:'BA Linguistics & Language Edu', group:'BA'},
      {name:'BA Linguistics (Special)', group:'BA'},
      // {name:'BEd Literacy Studies', group:'BEd'},
      {name:'BA Literatures in English', group:'BA'},
      {name:'BA Mathematics', group:'BA'},
      {name:'BEd Mathematics Education', group:'BEd'},
      {name:'BA Media & Communication', group:'BA'},
      {name:'BA Ministerial Studies', group:'BA'},
      {name:'BA Music', group:'BA'},
      {name:'BA Philosophy', group:'BA'},
      {name:'BA Philosophy with Theology', group:'BA'},
      {name:'BEd School Librarianship', group:'BEd'},
      {name:'BEd Social Studies/Geography Edu', group:'BEd'},
      {name:'BA Spanish', group:'BA'},
      {name:'BA Spanish & Education', group:'BA'},
      {name:'BA Theology', group:'BA'},
      {name:'BA Visual Arts', group:'BA'},
      {name:'LLB Law', group:'LLB'},
      {name:'LLB Law (First Year)', group:'LLB'},
      {name:'BBMed Sci Anatomy', group:'BBMed'},
      {name:'BBMed Sci Biochemistry (Medical Sc)', group:'BBMed'},
      {name:'BSc Biochemistry (Medical Sc)', group:'BSc'},
      {name:'BSc Diagnostic Imag. (Radiography)', group:'BSc'},
      {name:'MB BS Medicine & Surgery MB', group:'BS'},
      {name:'BSc Nursing', group:'BSc'},
      // {name:'BSc Nursing - Post RN', group:'BSc'},
      {name:'BBMed Sci Pharmacology', group:'BBMed'},
      {name:'DDS Undergraduate Dental Programme', group:'DDS'},
      {name:'BSc Physical Therapy', group:'BSc'},
      {name:'BBMed Sci Physiology', group:'BBMed'},
      {name:'BSc Actuarial Science', group:'BSc'},
      {name:'BSc Alternative Energy', group:'BSc'},
      {name:'BSc Animal Biology', group:'BSc'},
      {name:'BSc Applied Chemistry', group:'BSc'},
      {name:'BSc Applied Plant Sciences', group:'BSc'},
      {name:'BSc Biochemistry (Pure & Applied)', group:'BSc'},
      {name:'BSc Biology', group:'BSc'},
      {name:'BSc Biology with Education', group:'BSc'},
      {name:'BSc Biotechnology', group:'BSc'},
      {name:'BSc Botany', group:'BSc'},
      {name:'BSc Chemistry', group:'BSc'},
      {name:'BSc Chemistry & Management', group:'BSc'},
      {name:'BSc Chemistry (Special)', group:'BSc'},
      {name:'BSc Chemistry with Education', group:'BSc'},
      {name:'BSc Civil Engineering', group:'BSc'},
      {name:'BSc Computer Science', group:'BSc'},
      {name:'BSc Computer Studies', group:'BSc'},
      {name:'BSc Computer Systems Engineering', group:'BSc'},
      {name:'BSc Electronics', group:'BSc'},
      {name:'BSc Electronics Engineering', group:'BSc'},
      {name:'BSc Enter & Cultural Entp Mgt', group:'BSc'},
      {name:'BSc Environmental Biology', group:'BSc'},
      {name:'BSc Environmental Biology (Double)', group:'BSc'},
      {name:'BSc Environmental Physics', group:'BSc'},
      {name:'BSc Experimental Biology', group:'BSc'},
      {name:'BSc Experimental Biology (double)', group:'BSc'},
      {name:'BSc Food Chemistry', group:'BSc'},
      {name:'BSc General', group:'BSc'},
      {name:'BSc Geography', group:'BSc'},
      {name:'BSc Geography (Special)', group:'BSc'},
      {name:'BSc Geology', group:'BSc'},
      {name:'BSc Geology (Special)', group:'BSc'},
      {name:'BSc Horticulture', group:'BSc'},
      {name:'BSc Information Technology', group:'BSc'},
      {name:'BSc Marine Biology', group:'BSc'},
      {name:'BSc Materials Science', group:'BSc'},
      {name:'BSc Mathematics', group:'BSc'},
      {name:'BSc Mathematics & Modelling Proces', group:'BSc'},
      {name:'BSc Mathematics (double)', group:'BSc'},
      {name:'BSc Mathematics with Education', group:'BSc'},
      {name:'BSc Media & Communication', group:'BSc'},
      {name:'BSc Medical Physics', group:'BSc'},
      {name:'BSc Microbiology', group:'BSc'},
      {name:'BSc Molecular Biology', group:'BSc'},
      {name:'BSc Occu & Env Safety & Health', group:'BSc'},
      {name:'BSc Physics', group:'BSc'},
      {name:'BSc Physics with Education', group:'BSc'},
      {name:'BSc Science, Media & Communication', group:'BSc'},
      {name:'BSc Terrestrial & Freshwater Bio', group:'BSc'},
      {name:'BSc Tropical Horticulture', group:'BSc'},
      {name:'BSc Zoology', group:'BSc'},
      // {name:'BSc Accounting', group:'BSc'},
      {name:'BSc African & African Diaspora Std', group:'BSc'},
      {name:'BSc Anthropology', group:'BSc'},
      {name:'BSc Banking & Finance', group:'BSc'},
      {name:'BSc Banking & Finance (Special)', group:'BSc'},
      {name:'BSc Bus, Econ & Soc Stat (Special)', group:'BSc'},
      {name:'BSc Demography', group:'BSc'},
      // {name:'BSc Economics', group:'BSc'},
      {name:'BSc Economics (Special)', group:'BSc'},
      // {name:'BSc Enter & Cultural Entp Mgt', group:'BSc'},
      {name:'BSc Entrepreneurship', group:'BSc'},
      {name:'BSc Finance', group:'BSc'},
      {name:'BSc Gender & Development Studies', group:'BSc'},
      {name:'BSc Government', group:'BSc'},
      {name:'BSc Hospitality & Tourism Mgmt', group:'BSc'},
      {name:'BSc Hotel Management (Special)', group:'BSc'},
      {name:'BSc Human Resource Management', group:'BSc'},
      {name:'BSc International Relations', group:'BSc'},
      {name:'BSc Labour & Employment Relations', group:'BSc'},
      {name:'BSc Management Information Systems', group:'BSc'},
      // {name:'BSc Management Studies', group:'BSc'},
      {name:'BSc Management Studies (Accounts)', group:'BSc'},
      {name:'BSc Management Studies (Entrep)', group:'BSc'},
      {name:'BSc Management Studies (General)', group:'BSc'},
      {name:'BSc Management Studies (HRM)', group:'BSc'},
      {name:'BSc Management Studies (MIS)', group:'BSc'},
      {name:'BSc Management Studies (Marketing)', group:'BSc'},
      {name:'BSc Management Studies(Operations)', group:'BSc'},
      {name:'BSc Marketing', group:'BSc'},
      {name:'BSc Mgmt Stud (Corp Gov & Bus Eth)', group:'BSc'},
      {name:'BSc Operations Management', group:'BSc'},
      {name:'BSc Political Science', group:'BSc'},
      {name:'BSc Politics & International Coop', group:'BSc'},
      {name:'BSc Psychology', group:'BSc'},
      {name:'BSc Public Administration', group:'BSc'},
      {name:'BSc Public Sector Management', group:'BSc'},
      {name:'BSc Social Development Policy', group:'BSc'},
      {name:'BSc Social Policy & Administration', group:'BSc'},
      {name:'BSc Social Policy & Development', group:'BSc'},
      {name:'BSc Social Psychology', group:'BSc'},
      {name:'BSc Social Work (Special)', group:'BSc'},
      {name:'BSc Sociology', group:'BSc'},
      {name:'BSc Sociology (Special)', group:'BSc'},
      {name:'BSc Statistics', group:'BSc'},
      {name:'BSc Tourism Management', group:'BSc'},
      {name:'BSc Tourism Management (Special)', group:'BSc'}
    ];
    // Public API here
    return {
      collection: function () {
        return programmes;
      },
      selectedProgramme: function (index) {
        return programmes[index];
      }
    };
  });
