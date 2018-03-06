// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require_tree .
var currentList = {}

$(document).on('submit', function(e){
  e.preventDefault();
  $.ajax({
    url: '/welcome',
    type: 'POST',
    dataType: 'JSON',
    data: data
  })
})

$(document).ready( function() {
  $('.list').on('click', function(){
    currentList.id = this.dataset.id
    $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/products',
      method: 'GET',
      dataType: 'JSON'
    }).done( function(items){
        var lists = $('#items');
        lists.empty();
        items.forEach( function(char){
          var li = '<li data-name-id="' + char.id + '">' + char.name + '-  ' + char.description + '</li>'
          lists.append(li)
        });
    });
  });
});
