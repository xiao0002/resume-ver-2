import './styles.scss';
var Work_exp_template;
function showTemplate(template, data) {
  var html = template(data);
  $('#content').html(html);
}

$(document).ready(function () {
  var source = $('#Work-exp-template').html();
  Work_exp_template = Handlebars.compile(source);
});
