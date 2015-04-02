import DS from 'ember-data';

export default DS.Model.extend({
 	name: DS.attr('string'),
	tour: DS.belongsTo('tourDetail'),
	map_image: DS.attr('string'),
	position: DS.attr('number'),
	page: DS.attr('number'),
	tour_slug: DS.attr('string'),
	stop_link: DS.attr('string'),
	description: DS.attr('string'),
	metadescription: DS.attr('string'),
	article_link: DS.attr('string'),
	video_embed: DS.attr('string'),
	video_poster: DS.attr('string'),
	lat: DS.attr(),
	lng: DS.attr(),
	park_lat: DS.attr(),
	park_lng: DS.attr(),
	directions_intro: DS.attr('string'),
	direction_notes: DS.attr('string'),
	images: DS.attr(),
	previous_stop: DS.attr('string'),
	next_stop: DS.attr('string')
});
