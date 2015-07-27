---
# Tag Cloud
---
var word_array = [
{% for tags in site.tags %}{% assign tag = tags | first %}{% assign posts = tags | last %}
	{text: "{{ tag }}", weight: {{ posts | size }}, link: "{% include tag-link.html tag=tag %}"}{% unless forloop.last %},{% endunless %}
{% endfor %}
];

$(document).ready(function() {
	var tag_cloud = $('#tag-cloud');
	if(tag_cloud){
		tag_cloud.addClass('jqcloud');
		tag_cloud.jQCloud(word_array);
	}
});
