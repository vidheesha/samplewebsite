"use strict";

$(document).ready(function(){
    var userData = [
         {"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
         {"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
         {"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
         {"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
         {"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
         {"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
         {"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }];
            new tastTracker(userData);
         });
var tastTracker = function(userData) {
    var that = this;
    this.displayTable(userData);
    $("#datePicker").datepicker();
    $('#createTask').on('submit', function(e) {
        e.preventDefault();
        var data = $(this).serializeArray();
        var rowData = that.rowData(data);
        $.each(rowData,function(key,value){
           if ($.trim(value.name).length === 0 || value.date === '' || $.trim(value.assigned).length === 0 ) {
                return false;
            }else{
                that.displayTable(rowData);
            } 
        });
    });
}
tastTracker.prototype.displayTable = function(userData) {
        var html = '';
        $.each(userData, function(key, value) {
                html += '<tr><td>' + value.name + '</td><td>' + value.date + '</td><td>' +value.assigned + '</td></tr>';
            });
        $('#tblData').prepend(html);

    };
tastTracker.prototype.rowData = function(data) {
        var objData = {}, ArrData = [], i = 0;
        for (var i in data) {
            objData[data[i].name] = data[i].value;
        }
        ArrData.push(objData);
      return ArrData;
   };