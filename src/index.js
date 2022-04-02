import './styles.scss';
var work_exp_template;
function showTemplate(template, data) {
  var html = template(data);
  $('#work-exp-content').html(html);
}

$(document).ready(function () {
  var source = $('#work-exp-template').html();
  work_exp_template = Handlebars.compile(source);
});
