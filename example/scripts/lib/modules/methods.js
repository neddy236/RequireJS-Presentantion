define(['jquery'], function ($) {

  var methods = {}

  methods.ChangeHTML = function(args){
    $('#clickMe').click(function () {
      $(this).text(args);
    })
  }

  methods.alertPop = function (args) {
    $('#clickMe').click(function () {
      alert(args);
    })
  }

  return methods;

});
