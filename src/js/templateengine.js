var work_exp_template;
function showTemplate(pointer, template, data) {
  var html = template(data);
  $(pointer).html(html);
}

$(document).ready(function () {
  var source = $('#work-exp-template').html();
  work_exp_template = Handlebars.compile(source);
  showTemplate('#work-exp-content', work_exp_template, workexp);
});
$('#testtest').addItems();
