let lodash = require('lodash');

let postDataObj = { post: 
   { id: 20,
     name: 'Nitin Joshi',
     username: 'nitin.joshi',
     avatar_template: '/letter_avatar_proxy/v2/letter/n/7993a0/{size}.png',
     created_at: '2017-07-14T19:05:16.906Z',
     cooked: '<p>Is a dummy text to display in the topic</p>',
     post_number: 3,
     post_type: 1,
     updated_at: '2017-07-14T19:05:16.906Z',
     reply_count: 0,
     reply_to_post_number: 2,
     quote_count: 0,
     avg_time: null,
     incoming_link_count: 0,
     reads: 1,
     score: 0,
     yours: false,
     topic_id: 14,
     topic_slug: 'calvin-app-tools',
     topic_title: 'Calvin App & Tools',
     display_username: 'Nitin Joshi',
     primary_group_name: null,
     primary_group_flair_url: null,
     primary_group_flair_bg_color: null,
     primary_group_flair_color: null,
     version: 1,
     user_title: null,
     reply_to_user: 
      { username: 'calvin',
        avatar_template: '/letter_avatar_proxy/v2/letter/c/f475e1/{size}.png' },
     moderator: false,
     admin: false,
     staff: false,
     user_id: 3,
     hidden: false,
     hidden_reason_id: null,
     trust_level: 1,
     deleted_at: null,
     user_deleted: false,
     edit_reason: null,
     can_view_edit_history: true,
     wiki: false } }

let topicDataObj = { topic: 
   { id: 15,
     title: 'Secod topic created',
     fancy_title: 'Secod topic created',
     posts_count: 1,
     created_at: '2017-07-14T19:05:54.285Z',
     views: 0,
     reply_count: 0,
     participant_count: 1,
     like_count: 0,
     last_posted_at: '2017-07-14T19:05:54.912Z',
     visible: true,
     closed: false,
     archived: false,
     has_summary: false,
     archetype: 'regular',
     slug: 'secod-topic-created',
     category_id: 1,
     word_count: 51,
     deleted_at: null,
     pending_posts_count: 0,
     user_id: 3,
     pm_with_non_human_user: false,
     draft: null,
     draft_key: 'topic_15',
     draft_sequence: 0,
     unpinned: null,
     pinned_globally: false,
     pinned: false,
     pinned_at: null,
     pinned_until: null,
     details: 
      {
        notification_level: 1,
        can_move_posts: true,
        can_edit: true,
        can_delete: true,
        can_remove_allowed_users: true,
        can_invite_to: true,
        can_invite_via_email: true,
        can_create_post: true,
        can_reply_as_new_topic: true,
        can_flag_topic: true },
     highest_post_number: 1,
     deleted_by: null,
     has_deleted: false,
     chunk_size: 20,
     bookmarked: null,
     featured_link: null,
     topic_timer: null,
     message_bus_last_id: 1 } }

let postMappingConfig = {
	username: "post.username",
	displayName: "post.display_username",
	createdOn: "post.created_at",
	topicId: "post.topic_id",
	topicSlug: "post.topic_slug",
	topicTitle: "post.topic_title",
	message: "post.cooked",
	groupName: "post.primary_group_name"
}

let topicMappingConfig = {
	createdOn: "topic.created_at",
	topicId: "topic.id",
	topicSlug: "topic.slug",
	topicTitle: "topic.title",
}


function convertData(dataObj, mappingConfig) {
	let convertedData = {};
	
	Object.keys(mappingConfig).forEach( (fieldKey) => {
		convertedData[fieldKey] = lodash.get(dataObj, mappingConfig[fieldKey]);
	});

	console.log("POST data ", convertedData);
}


const DCMapping={

    post:postMappingConfig,
    topic: topicMappingConfig
}

const CALMapping ={

    create:"createMappingConfig",
    event:"eventMappingConfig"
}


// mapping = {
//     'discourse': function() { 
//         eventType=Object.keys(eventObj)[0];
//             MappedObj=DCMapping;
//     }
// }

// mapping[toolid]()

function getMapper(eventObj,toolid) {
      let  eventType;
      let  MappedObj;
      let requireMapping;

     switch(toolid){

        case 'discourse':
                eventType=Object.keys(eventObj)[0];
                MappedObj=DCMapping;
                 break;
     }
     console.log(eventType); 
     requireMapping=MappedObj[eventType];
     convertData(eventObj,requireMapping);
}

function test(data,nodes) {

    console.log('obj1 is..',data);
    console.log('obj2 is..',data.b);
    console.log('node is..',nodes);
}
 let a={
    test:"hi",
    test1:"hello" 
};
 let b={

    t1:"helloss",
    t2:"helloessdd"
};

 let obj={a,b};
test(obj,"hello");


// convertData(postDataObj, postMappingConfig);
// convertData(topicDataObj, topicMappingConfig);

// getMapper(postDataObj,"discourse");
// getMapper(topicDataObj,"discourse");