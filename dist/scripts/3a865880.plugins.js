$(function(){$("body").on("input propertychange",".floating-label-form-group",function(a){$(this).toggleClass("floating-label-form-group-with-value",!!$(a.target).val())}).on("focus",".floating-label-form-group",function(){$(this).addClass("floating-label-form-group-with-focus")}).on("blur",".floating-label-form-group",function(){$(this).removeClass("floating-label-form-group-with-focus")})}),$(document).ready(function(){!function(a){a(function(){var b=a("html, body");a('a[href^="#calculator"]').click(function(){return b.animate({scrollTop:a("#gpacalculator").offset().top-80},500,function(){}),!1})})}(window.jQuery);var a=new Tour({backdrop:!0,template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div><div class="popover-navigation"><hr><div class="btn-group"><button class="btn btn-sm btn-default" data-role="prev">&laquo; Prev</button><button class="btn btn-sm btn-default" data-role="next">Next &raquo;</button></div><button class="btn btn-sm btn-default" data-role="end">Close</button></div></div>'});a.addSteps([{element:"#programmecell",title:"Start here",content:"First choose your <strong>Campus</strong> and <strong>Faculty</strong>",placement:"top"},{element:"#addcourses",title:"Add your courses",content:"Click here to <strong>Add</strong> to your list of courses and grades. Repeat as needed to have a complete list of your grades",placement:"right"},{element:"#coursegrades",title:"Your courses",content:"Enter the grades for the courses you have completed.",placement:"top"},{element:"#coursesandgrades",title:"Your Courses and Grades",content:"The <strong>Courses and Grades</strong> that you have entered will appear here.",placement:"top"},{element:"#addcell",title:"Add to your list of courses",content:"Click on this to add to your list of courses and grades. Repeat as needed to have a complete list of your grades",placement:"right"},{element:"#gpa1",title:"GPA 1",content:"Your points will automatically be calculated and displayed.",placement:"left"},{element:"#priorgpa",title:"Prior GPA Scheme",content:"Your points from the <strong>Old GPA Scheme</strong> will automatically be calculated and displayed.",placement:"left"},{element:"#gpa2",title:"GPA 2",content:"Your converted points will automatically be calculated and displayed",placement:"left"},{element:"#currentgpa",title:"Current GPA Scheme",content:"Your points from the <strong>Current GPA Scheme</strong> will automatically be calculated and displayed",placement:"left"},{element:"#comparison",title:"Comparison",content:"Your GPA under both schemes will automatically be calculated and displayed",placement:"top"},{element:"#separategpas",title:"Cumulative and Converted GPAs",content:"The <strong>Cumulative GPAs</strong> for the two schemes will be calculated and displayed here. The old scheme will then be </strong>converted to the 2014/15 Scheme</strong>",placement:"top"},{element:"#combinedgpa",title:"Combined GPA",content:"The <strong>Combined Cumulative and Degree GPAs</strong> will be calculated and displayed here along with the <strong>Class of Degree</strong> earned.",placement:"top"},{element:"#formulas",title:"GPA Formulas",content:"See how the <strong>Combined Cumulative and Degree GPAs</strong> were calculated using the prior and current GPA schemes.",placement:"top"}]),$(document).on("click","#help",function(){a.restart()}),$(document).scroll(function(){var a,b,c,d;a=$(this).scrollTop(),b=$("#gpacalculator").offset().top,b/=4,c=a/b,d="108,108,108,"+c,$("#topnav").attr("style","background-color:rgba("+d+")"),$("header.navbar.navbar-inverse.navbar-fixed-top").attr("style","border-color:rgba("+d+")")})}),function(a){"use strict";function b(a){var c,e,f,g=this;if(!(g instanceof b))return new b(a);if(a instanceof b)return g.s=a.s,g.e=a.e,g.c=a.c.slice(),void 0;for(0===a&&0>1/a?a="-0":k.test(a+="")||d(0/0),g.s="-"==a.charAt(0)?(a=a.slice(1),-1):1,(c=a.indexOf("."))>-1&&(a=a.replace(".","")),(e=a.search(/e/i))>0?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length),e=0;"0"==a.charAt(e);e++);if(e==(f=a.length))g.c=[g.e=0];else{for(;"0"==a.charAt(--f););for(g.e=c-e-1,g.c=[],c=0;f>=e;g.c[c++]=+a.charAt(e++));}}function c(a,b,c,e){var f=a.c,g=a.e+b+1;if(1===c?e=f[g]>=5:2===c?e=f[g]>5||5==f[g]&&(e||0>g||null!=f[g+1]||1&f[g-1]):3===c?e=e||null!=f[g]||0>g:(e=!1,0!==c&&d("!Big.RM!")),1>g||!f[0])a.c=e?(a.e=-b,[1]):[a.e=0];else{if(f.length=g--,e)for(;++f[g]>9;)f[g]=0,g--||(++a.e,f.unshift(1));for(g=f.length;!f[--g];f.pop());}return a}function d(a){var b=new Error(a);throw b.name="BigError",b}function e(a,d,e){var f=d-(a=new b(a)).e,g=a.c;for(g.length>++d&&c(a,f,b.RM),f=g[0]?e?d:(g=a.c,a.e+f+1):f+1;g.length<f;g.push(0));return f=a.e,1==e||2==e&&(f>=d||h>=f)?(a.s<0&&g[0]?"-":"")+(g.length>1?(g.splice(1,0,"."),g.join("")):g[0])+(0>f?"e":"e+")+f:a.toString()}b.DP=20,b.RM=1;var f=1e6,g=1e6,h=-7,i=21,j=b.prototype,k=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,l=new b(1);j.abs=function(){var a=new b(this);return a.s=1,a},j.cmp=function(a){var c,d=this,e=d.c,f=(a=new b(a)).c,g=d.s,h=a.s,i=d.e,j=a.e;if(!e[0]||!f[0])return e[0]?g:f[0]?-h:0;if(g!=h)return g;if(c=0>g,i!=j)return i>j^c?1:-1;for(g=-1,h=(i=e.length)<(j=f.length)?i:j;++g<h;)if(e[g]!=f[g])return e[g]>f[g]^c?1:-1;return i==j?0:i>j^c?1:-1},j.div=function(a){var e=this,g=e.c,h=(a=new b(a)).c,i=e.s==a.s?1:-1,j=b.DP;if((j!==~~j||0>j||j>f)&&d("!Big.DP!"),!g[0]||!h[0])return g[0]==h[0]&&d(0/0),h[0]||d(i/0),new b(0*i);var k,m,n,o,p,q=h.slice(),r=k=h.length,s=g.length,t=g.slice(0,k),u=t.length,v=new b(l),w=v.c=[],x=0,y=j+(v.e=e.e-a.e)+1;for(v.s=i,i=0>y?0:y,q.unshift(0);u++<k;t.push(0));do{for(n=0;10>n;n++){if(k!=(u=t.length))o=k>u?1:-1;else for(p=-1,o=0;++p<k;)if(h[p]!=t[p]){o=h[p]>t[p]?1:-1;break}if(!(0>o))break;for(m=u==k?h:q;u;){if(t[--u]<m[u]){for(p=u;p&&!t[--p];t[p]=9);--t[p],t[u]+=10}t[u]-=m[u]}for(;!t[0];t.shift());}w[x++]=o?n:++n,t[0]&&o?t[u]=g[r]||0:t=[g[r]]}while((r++<s||null!=t[0])&&i--);return w[0]||1==x||(w.shift(),v.e--),x>y&&c(v,j,b.RM,null!=t[0]),v},j.eq=function(a){return!this.cmp(a)},j.gt=function(a){return this.cmp(a)>0},j.gte=function(a){return this.cmp(a)>-1},j.lt=function(a){return this.cmp(a)<0},j.lte=function(a){return this.cmp(a)<1},j.minus=function(a){var c,d,e,f,g=this,h=g.s,i=(a=new b(a)).s;if(h!=i)return a.s=-i,g.plus(a);var j=g.c.slice(),k=g.e,l=a.c,m=a.e;if(!j[0]||!l[0])return l[0]?(a.s=-i,a):new b(j[0]?g:0);if(h=k-m){for(c=(f=0>h)?(h=-h,j):(m=k,l),c.reverse(),i=h;i--;c.push(0));c.reverse()}else for(e=((f=j.length<l.length)?j:l).length,h=i=0;e>i;i++)if(j[i]!=l[i]){f=j[i]<l[i];break}if(f&&(c=j,j=l,l=c,a.s=-a.s),(i=-((e=j.length)-l.length))>0)for(;i--;j[e++]=0);for(i=l.length;i>h;){if(j[--i]<l[i]){for(d=i;d&&!j[--d];j[d]=9);--j[d],j[i]+=10}j[i]-=l[i]}for(;0==j[--e];j.pop());for(;0==j[0];j.shift(),--m);return j[0]||(a.s=1,j=[m=0]),a.c=j,a.e=m,a},j.mod=function(a){a=new b(a);var c,e=this,f=e.s,g=a.s;return a.c[0]||d(0/0),e.s=a.s=1,c=1==a.cmp(e),e.s=f,a.s=g,c?new b(e):(f=b.DP,g=b.RM,b.DP=b.RM=0,e=e.div(a),b.DP=f,b.RM=g,this.minus(e.times(a)))},j.plus=function(a){var c,d=this,e=d.s,f=(a=new b(a)).s;if(e!=f)return a.s=-f,d.minus(a);var g=d.e,h=d.c,i=a.e,j=a.c;if(!h[0]||!j[0])return j[0]?a:new b(h[0]?d:0*e);if(h=h.slice(),e=g-i){for(c=e>0?(i=g,j):(e=-e,h),c.reverse();e--;c.push(0));c.reverse()}for(h.length-j.length<0&&(c=j,j=h,h=c),e=j.length,f=0;e;f=(h[--e]=h[e]+j[e]+f)/10^0,h[e]%=10);for(f&&(h.unshift(f),++i),e=h.length;0==h[--e];h.pop());return a.c=h,a.e=i,a},j.pow=function(a){var c=0>a,e=new b(this),f=l;for((a!==~~a||-g>a||a>g)&&d("!pow!"),a=c?-a:a;1&a&&(f=f.times(e)),a>>=1,a;)e=e.times(e);return c?l.div(f):f},j.round=function(a,e){var g=new b(this);return null==a?a=0:(a!==~~a||0>a||a>f)&&d("!round!"),c(g,a,null==e?b.RM:e),g},j.sqrt=function(){var a,e,f,g=this,h=g.c,i=g.s,j=g.e,k=new b("0.5");if(!h[0])return new b(g);0>i&&d(0/0),i=Math.sqrt(g.toString()),0==i||i==1/0?(a=h.join(""),a.length+j&1||(a+="0"),e=new b(Math.sqrt(a).toString()),e.e=((j+1)/2|0)-(0>j||1&j)):e=new b(i.toString()),i=e.e+(b.DP+=4);do f=e,e=k.times(f.plus(g.div(f)));while(f.c.slice(0,i).join("")!==e.c.slice(0,i).join(""));return c(e,b.DP-=4,b.RM),e},j.times=function(a){var c,d=this,e=d.c,f=(a=new b(a)).c,g=e.length,h=f.length,i=d.e,j=a.e;if(a.s=d.s==a.s?1:-1,!e[0]||!f[0])return new b(0*a.s);for(a.e=i+j,h>g&&(c=e,e=f,f=c,j=g,g=h,h=j),j=g+h,c=[];j--;c.push(0));for(i=h-1;i>-1;i--){for(h=0,j=g+i;j>i;h=c[j]+f[i]*e[j-i-1]+h,c[j--]=h%10|0,h=h/10|0);h&&(c[j]=(c[j]+h)%10)}for(h&&++a.e,c[0]||c.shift(),j=c.length;!c[--j];c.pop());return a.c=c,a},j.toString=j.valueOf=j.toJSON=function(){var a=this,b=a.e,c=a.c.join(""),d=c.length;if(h>=b||b>=i)c=c.charAt(0)+(d>1?"."+c.slice(1):"")+(0>b?"e":"e+")+b;else if(0>b){for(;++b;c="0"+c);c="0."+c}else if(b>0)if(++b>d)for(b-=d;b--;c+="0");else d>b&&(c=c.slice(0,b)+"."+c.slice(b));else d>1&&(c=c.charAt(0)+"."+c.slice(1));return a.s<0&&a.c[0]?"-"+c:c},j.toExponential=function(a){return null==a?a=this.c.length-1:(a!==~~a||0>a||a>f)&&d("!toExp!"),e(this,a,1)},j.toFixed=function(a){var b,c=this,g=h,j=i;return h=-(i=1/0),null==a?b=c.toString():a===~~a&&a>=0&&f>=a&&(b=e(c,c.e+a),c.s<0&&c.c[0]&&b.indexOf("-")<0&&(b="-"+b)),h=g,i=j,b||d("!toFix!"),b},j.toPrecision=function(a){return null==a?this.toString():((a!==~~a||1>a||a>f)&&d("!toPre!"),e(this,a-1,2))},"undefined"!=typeof module&&module.exports?module.exports=b:"function"==typeof define&&define.amd?define(function(){return b}):a.Big=b}(this);