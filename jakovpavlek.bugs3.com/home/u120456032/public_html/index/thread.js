/*jslint evil:true */
/**
 * Dynamic thread loader
 *
 * 
 *  * 
 * 
 * 
*/

// 
var DISQUS;
if (!DISQUS || typeof DISQUS == 'function') {
    throw "DISQUS object is not initialized";
}
// 

// json_data and default_json django template variables will close
// and re-open javascript comment tags

(function () {
    var jsonData, cookieMessages, session, key;

    /* */ jsonData = {"reactions": [], "reactions_limit": 10, "ordered_highlighted": [], "posts": {"283379041": {"edited": false, "author_is_moderator": false, "from_request_user": null, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "Super Super ", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2011-08-11_07:19:11", "date": "5 months ago", "message": "Super Super", "approved": true, "is_last_child": false, "author_is_founder": false, "can_reply": true, "likes": 2, "user_voted": null, "num_replies": 0, "down_voted": false, "is_first_child": false, "has_been_anonymized": false, "highlighted": false, "parent_post_id": null, "depth": 0, "points": 2, "user_key": "90e2496ec86cf316ef80a6523f60af62", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}, "181145296": {"edited": false, "author_is_moderator": false, "from_request_user": null, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "Nice work!\n\nJust a pitty the HTML5 implementation in multiple browsers is still not as good as it should (hopefully it will improve over time and get standarized).\n\nIt's nice to see these effects come back!\n\nKeep up the great job!", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2010-07-23_12:23:49", "date": "1 year ago", "message": "Nice work!<br><br>Just a pitty the HTML5 implementation in multiple browsers is still not as good as it should (hopefully it will improve over time and get standarized).<br><br>It's nice to see these effects come back!<br><br>Keep up the great job!", "approved": true, "is_last_child": false, "author_is_founder": false, "can_reply": true, "likes": 3, "user_voted": null, "num_replies": 1, "down_voted": false, "is_first_child": false, "has_been_anonymized": false, "highlighted": false, "parent_post_id": null, "depth": 0, "points": 3, "user_key": "a0ed578160a5a246a95b4c3706c159f5", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}, "181145299": {"edited": false, "author_is_moderator": false, "from_request_user": null, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "Sure. By now, only Chrome and Opera are suitable browser to see those processor-intensive eye-candy-html5-lets.\nIn fact, nothing new under the hoods, the canvas capabilities are not worth fifteen-years-old- good-c/c++-demoscene-coding ;) ( try { impatiently waiting for web-gl canvas capabilities } catch(bored-exception) {} ).\nThanks for your comment, hope to see u again :D.", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2010-07-26_17:53:00", "date": "1 year ago", "message": "Sure. By now, only Chrome and Opera are suitable browser to see those processor-intensive eye-candy-html5-lets.<br>In fact, nothing new under the hoods, the canvas capabilities are not worth fifteen-years-old- good-c/c++-demoscene-coding ;) ( try { impatiently waiting for web-gl canvas capabilities } catch(bored-exception) {} ).<br>Thanks for your comment, hope to see u again :D.", "approved": true, "is_last_child": true, "author_is_founder": false, "can_reply": true, "likes": 3, "user_voted": null, "num_replies": 0, "down_voted": false, "is_first_child": true, "has_been_anonymized": false, "highlighted": false, "parent_post_id": 181145296, "depth": 1, "points": 3, "user_key": "a171f8c3c43a74c77a7e850eeece61b9", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}, "181145301": {"edited": false, "author_is_moderator": false, "from_request_user": null, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "&gt; Firefox 3.6 also tends to draw visual artifacts between a quad\u2019s adjacent triangles, giving an unpolished appearance\n\nIsn't that Firefox and the others used antialiased clipping while Chrome does not support it? It could simply be you are not using correct coordinates for your quads (I get the same artifact with QtWebKit, Firefox and Safari).", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2010-08-12_14:43:27", "date": "1 year ago", "message": "&gt; Firefox 3.6 also tends to draw visual artifacts between a quad\u2019s adjacent triangles, giving an unpolished appearance<br><br>Isn't that Firefox and the others used antialiased clipping while Chrome does not support it? It could simply be you are not using correct coordinates for your quads (I get the same artifact with QtWebKit, Firefox and Safari).", "approved": true, "is_last_child": false, "author_is_founder": false, "can_reply": true, "likes": 3, "user_voted": null, "num_replies": 1, "down_voted": false, "is_first_child": false, "has_been_anonymized": false, "highlighted": false, "parent_post_id": null, "depth": 0, "points": 3, "user_key": "296ff026cb8383610c5ce4f6a496230b", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}, "181145304": {"edited": false, "author_is_moderator": false, "from_request_user": null, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "Hi Benjamin, maybe you're right. In fact, I've tried to force projected coords and/or uvs' into integers by issuing Math.floor, as well as leaving them with decimals and forcing them to be half way (in .5). But nothing has worked for me (maybe i've been doing it all wrongly ?).  I'm right now implementing  env mapping (by using the average normal on vertex) and same thing happens. I'd thank a lot if you could point me out in the right direction I'm not able to solve that myself :(.\nThanks for your comment. Hope to see u again.", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2010-08-12_16:00:38", "date": "1 year ago", "message": "Hi Benjamin, maybe you're right. In fact, I've tried to force projected coords and/or uvs' into integers by issuing Math.floor, as well as leaving them with decimals and forcing them to be half way (in .5). But nothing has worked for me (maybe i've been doing it all wrongly ?).  I'm right now implementing  env mapping (by using the average normal on vertex) and same thing happens. I'd thank a lot if you could point me out in the right direction I'm not able to solve that myself :(.<br>Thanks for your comment. Hope to see u again.", "approved": true, "is_last_child": true, "author_is_founder": false, "can_reply": true, "likes": 1, "user_voted": null, "num_replies": 0, "down_voted": false, "is_first_child": true, "has_been_anonymized": false, "highlighted": false, "parent_post_id": 181145301, "depth": 1, "points": 1, "user_key": "a171f8c3c43a74c77a7e850eeece61b9", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}, "181145306": {"edited": false, "author_is_moderator": false, "from_request_user": null, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "You made some excellent points there. I did a search on the topic and almost not got any specific details on other sites, but then happy to be here, seriously, thanks.\n\n- Lucas", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2010-10-01_14:07:22", "date": "1 year ago", "message": "You made some excellent points there. I did a search on the topic and almost not got any specific details on other sites, but then happy to be here, seriously, thanks.<br><br>- Lucas", "approved": true, "is_last_child": false, "author_is_founder": false, "can_reply": true, "likes": 5, "user_voted": null, "num_replies": 1, "down_voted": false, "is_first_child": false, "has_been_anonymized": false, "highlighted": false, "parent_post_id": null, "depth": 0, "points": 5, "user_key": "8eb49e9a76b55f0fdfb33a542de57ff1", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}, "181145308": {"edited": false, "author_is_moderator": true, "from_request_user": false, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "You are welcome. \nThanks for your kind comment ;).", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2010-10-01_14:30:44", "date": "1 year ago", "message": "You are welcome. <br>Thanks for your kind comment ;).", "approved": true, "is_last_child": true, "author_is_founder": true, "can_reply": true, "likes": 3, "user_voted": null, "num_replies": 0, "down_voted": false, "is_first_child": true, "has_been_anonymized": false, "highlighted": false, "parent_post_id": 181145306, "depth": 1, "points": 3, "user_key": "hyperandroid", "author_is_creator": true, "email": "", "killed": false, "is_realtime": false}, "181145310": {"edited": false, "author_is_moderator": false, "from_request_user": null, "up_voted": false, "can_edit": false, "ip": "", "last_modified_date": null, "dislikes": 0, "raw_message": "w7 ie9 works!!          and is even faster", "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2010-10-12_13:35:10", "date": "1 year ago", "message": "w7 ie9 works!!          and is even faster", "approved": true, "is_last_child": false, "author_is_founder": false, "can_reply": true, "likes": 2, "user_voted": null, "num_replies": 0, "down_voted": false, "is_first_child": false, "has_been_anonymized": false, "highlighted": false, "parent_post_id": null, "depth": 0, "points": 2, "user_key": "bc75195aee5beebb778b022e46112743", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}}, "ordered_posts": [283379041, 181145306, 181145308, 181145301, 181145304, 181145296, 181145299, 181145310], "realtime_enabled": false, "ready": true, "mediaembed": [], "has_more_reactions": false, "realtime_paused": true, "integration": {"receiver_url": "http://hyperandroid.com/no-existe", "hide_user_votes": false, "reply_position": false, "disqus_logo": false}, "highlighted": {}, "reactions_start": 0, "media_url": "http://mediacdn.disqus.com/1328224449", "users": {"a0ed578160a5a246a95b4c3706c159f5": {"username": "Iker Jamardo Zugaz", "tumblr": "", "about": "", "display_name": "Iker Jamardo Zugaz", "url": "http://disqus.com/guest/a0ed578160a5a246a95b4c3706c159f5/", "registered": false, "remote_id": null, "linkedin": "", "blog": "", "remote_domain": "", "points": null, "facebook": "", "avatar": "http://mediacdn.disqus.com/1328224449/images/noavatar32.png", "delicious": "", "is_remote": false, "verified": false, "flickr": "", "twitter": "", "remote_domain_name": ""}, "296ff026cb8383610c5ce4f6a496230b": {"username": "Benjamin", "tumblr": "", "about": "", "display_name": "Benjamin", "url": "http://disqus.com/guest/296ff026cb8383610c5ce4f6a496230b/", "registered": false, "remote_id": null, "linkedin": "", "blog": "", "remote_domain": "", "points": null, "facebook": "", "avatar": "http://mediacdn.disqus.com/1328224449/images/noavatar32.png", "delicious": "", "is_remote": false, "verified": false, "flickr": "", "twitter": "", "remote_domain_name": ""}, "a171f8c3c43a74c77a7e850eeece61b9": {"username": "hyperandroid", "tumblr": "", "about": "", "display_name": "hyperandroid", "url": "http://disqus.com/guest/a171f8c3c43a74c77a7e850eeece61b9/", "registered": false, "remote_id": null, "linkedin": "", "blog": "", "remote_domain": "", "points": null, "facebook": "", "avatar": "http://mediacdn.disqus.com/1328224449/images/noavatar32.png", "delicious": "", "is_remote": false, "verified": false, "flickr": "", "twitter": "", "remote_domain_name": ""}, "8eb49e9a76b55f0fdfb33a542de57ff1": {"username": "PKV", "tumblr": "", "about": "", "display_name": "PKV", "url": "http://disqus.com/guest/8eb49e9a76b55f0fdfb33a542de57ff1/", "registered": false, "remote_id": null, "linkedin": "", "blog": "", "remote_domain": "", "points": null, "facebook": "", "avatar": "http://mediacdn.disqus.com/1328224449/images/noavatar32.png", "delicious": "", "is_remote": false, "verified": false, "flickr": "", "twitter": "", "remote_domain_name": ""}, "bc75195aee5beebb778b022e46112743": {"username": "dirk digizaal", "tumblr": "", "about": "", "display_name": "dirk digizaal", "url": "http://disqus.com/guest/bc75195aee5beebb778b022e46112743/", "registered": false, "remote_id": null, "linkedin": "", "blog": "http://digizaal.nl", "remote_domain": "", "points": null, "facebook": "", "avatar": "http://mediacdn.disqus.com/1328224449/images/noavatar32.png", "delicious": "", "is_remote": false, "verified": false, "flickr": "", "twitter": "", "remote_domain_name": ""}, "90e2496ec86cf316ef80a6523f60af62": {"username": "Shankarmca009", "tumblr": "", "about": "", "display_name": "Shankarmca009", "url": "http://disqus.com/guest/90e2496ec86cf316ef80a6523f60af62/", "registered": false, "remote_id": null, "linkedin": "", "blog": "", "remote_domain": "", "points": null, "facebook": "", "avatar": "http://mediacdn.disqus.com/1328224449/images/noavatar32.png", "delicious": "", "is_remote": false, "verified": false, "flickr": "", "twitter": "", "remote_domain_name": ""}, "hyperandroid": {"username": "hyperandroid", "tumblr": "", "about": "", "display_name": "hyperandroid", "url": "http://disqus.com/hyperandroid/", "registered": true, "remote_id": null, "linkedin": "", "blog": "", "remote_domain": "", "points": 3, "facebook": "", "avatar": "http://mediacdn.disqus.com/uploads/users/894/1755/avatar32.jpg?1327438597", "delicious": "", "is_remote": false, "verified": true, "flickr": "", "twitter": "http://twitter.com/hyperandroid", "remote_domain_name": ""}}, "user_unapproved": {}, "messagesx": {"count": 0, "unread": []}, "thread": {"voters_count": 0, "offset_posts": 0, "slug": "tiler3d_html5", "paginate": false, "num_pages": 1, "days_alive": 0, "moderate_none": false, "voters": {}, "total_posts": 8, "realtime_paused": true, "queued": false, "pagination_type": "append", "user_vote": null, "likes": 5, "num_posts": 8, "closed": false, "per_page": 0, "id": 274901234, "killed": false, "moderate_all": false}, "forum": {"use_media": true, "avatar_size": 32, "apiKey": "JDTDXCqCZXIRkgRO9xWNZHFcfTxNiWZbTdGXYCDFd6FoXhhOeH550umg8OzdCP4q", "features": {}, "comment_max_words": 0, "mobile_theme_disabled": false, "is_early_adopter": false, "login_buttons_enabled": true, "streaming_realtime": false, "reply_position": false, "id": 749230, "default_avatar_url": "http://mediacdn.disqus.com/1328224449/images/noavatar32.png", "template": {"url": "http://mediacdn.disqus.com/1328224449/uploads/themes/7884a9652e94555c70f96b6be63be216/theme.js?174", "mobile": {"url": "http://mediacdn.disqus.com/1328224449/uploads/themes/mobile/theme.js", "css": "http://mediacdn.disqus.com/1328224449/uploads/themes/mobile/theme.css"}, "api": "1.1", "name": "Houdini", "css": "http://mediacdn.disqus.com/1328224449/uploads/themes/7884a9652e94555c70f96b6be63be216/theme.css?174"}, "max_depth": 0, "ranks_enabled": false, "lastUpdate": "", "linkbacks_enabled": true, "allow_anon_votes": true, "revert_new_login_flow": false, "stylesUrl": "http://mediacdn.disqus.com/uploads/styles/74/9230/hyperandroid.css", "show_avatar": true, "reactions_enabled": true, "disqus_auth_disabled": false, "name": "Hyperandroid&#39;s code playground", "language": "en", "mentions_enabled": true, "url": "hyperandroid", "allow_anon_post": true, "thread_votes_disabled": false, "hasCustomStyles": false, "moderate_all": false}, "settings": {"realtimeHost": "qq.disqus.com", "uploads_url": "http://media.disqus.com/uploads", "ssl_media_url": "https://securecdn.disqus.com/1328224449", "realtime_url": "http://rt.disqus.com/forums/realtime-cached.js", "facebook_app_id": "52254943976", "minify_js": true, "recaptcha_public_key": "6LdKMrwSAAAAAPPLVhQE9LPRW4LUSZb810_iaa8u", "read_only": false, "facebook_api_key": "52254943976", "realtimePort": "80", "debug": false, "disqus_url": "http://disqus.com", "media_url": "http://mediacdn.disqus.com/1328224449"}, "ranks": {}, "request": {"sort": "hot", "is_authenticated": false, "user_type": "anon", "subscribe_on_post": 0, "missing_perm": null, "user_id": null, "remote_domain_name": "", "remote_domain": "", "is_verified": false, "profile_url": "", "username": "", "is_global_moderator": false, "sharing": {}, "timestamp": "2012-02-06_11:37:42", "is_moderator": false, "ordered_unapproved_posts": [], "unapproved_posts": {}, "forum": "hyperandroid", "is_initial_load": true, "display_username": "", "points": null, "has_email": false, "moderator_can_edit": false, "is_remote": false, "userkey": "", "page": 1}, "context": {"use_twitter_signin": true, "use_fb_connect": true, "show_reply": true, "active_switches": ["autocommitted_thread", "bespin", "community_icon", "embedapi", "google_auth", "mentions", "new_facebook_auth", "new_thread_create", "realtime_cached", "show_captcha_on_links", "ssl", "static_reply_frame", "static_styles", "statsd_created", "upload_media", "use_rs_paginator_60m"], "sigma_chance": 10, "use_google_signin": true, "switches": {"olark_admin_addons": true, "listactivity_replies": true, "es_index_threads": true, "use_master_for_api": true, "google_auth": true, "html_email": true, "statsd.timings": true, "community_icon": true, "show_captcha_on_links": true, "google_analytics": true, "olark_admin_packages": true, "static_styles": true, "firehose": true, "stats": true, "realtime": true, "realtime_cached": true, "statsd_created": true, "bespin": true, "olark_support": true, "firehose_gnip": true, "olark_addons": true, "new_facebook_auth": true, "limit_get_posts_days_30d": true, "use_impermium": true, "discovery_network": true, "phoenix": true, "new_thread_create": true, "edits_to_spam": true, "upload_media": true, "vip_read_slave": true, "embedapi": true, "ssl": true, "autocommitted_thread": true, "send_to_impermium": true, "theme_editor_disabled": true, "train_impermium": true, "listactivity_replies_30d": true, "firehose_gnip_http": true, "moderate_ascending": true, "firehose_message_db_lookup": true, "git_themes": true, "new_moderate": true, "use_rs_paginator_60m": true, "redis_threadcount": true, "mentions": true, "olark_install": true, "static_reply_frame": true}, "forum_facebook_key": "", "use_yahoo": true, "subscribed": false, "active_gargoyle_switches": ["discovery_network", "edits_to_spam", "es_index_threads", "firehose", "firehose_gnip", "firehose_gnip_http", "firehose_message_db_lookup", "git_themes", "google_analytics", "html_email", "limit_get_posts_days_30d", "listactivity_replies", "listactivity_replies_30d", "moderate_ascending", "new_moderate", "olark_addons", "olark_admin_addons", "olark_admin_packages", "olark_install", "olark_support", "phoenix", "realtime", "redis_threadcount", "send_to_impermium", "show_captcha_on_links", "stats", "statsd.timings", "theme_editor_disabled", "train_impermium", "use_impermium", "use_master_for_api", "vip_read_slave"], "realtime_speed": 15000, "use_openid": true}}; /* */
    /* */ cookieMessages = {"user_created": null, "post_has_profile": null, "post_twitter": null, "post_not_approved": null}; session = {"url": null, "name": null, "email": null}; /* */

    DISQUS.jsonData = jsonData;
    DISQUS.jsonData.cookie_messages = cookieMessages;
    DISQUS.jsonData.session = session;

    if (DISQUS.useSSL) {
        DISQUS.useSSL(DISQUS.jsonData.settings);
    }

    // The mappings below are for backwards compatibility--before we port all the code that
    // accesses jsonData.settings to DISQUS.settings

    var mappings = {
        debug:                'disqus.debug',
        minify_js:            'disqus.minified',
        read_only:            'disqus.readonly',
        recaptcha_public_key: 'disqus.recaptcha.key',
        facebook_app_id:      'disqus.facebook.appId',
        facebook_api_key:     'disqus.facebook.apiKey'
    };

    var urlMappings = {
        disqus_url:    'disqus.urls.main',
        media_url:     'disqus.urls.media',
        ssl_media_url: 'disqus.urls.sslMedia',
        realtime_url:  'disqus.urls.realtime',
        uploads_url:   'disqus.urls.uploads'
    };

    if (DISQUS.jsonData.context.switches.realtime_setting_change) {
        urlMappings.realtimeHost = 'realtime.host';
        urlMappings.realtimePort = 'realtime.port';
    }
    for (key in mappings) {
        if (mappings.hasOwnProperty(key)) {
            DISQUS.settings.set(mappings[key], DISQUS.jsonData.settings[key]);
        }
    }

    for (key in urlMappings) {
        if (urlMappings.hasOwnProperty(key)) {
            DISQUS.jsonData.settings[key] = DISQUS.settings.get(urlMappings[key]);
        }
    }
}());

DISQUS.jsonData.context.csrf_token = '21bc467119200cb06806902fa8e2f5b0';

DISQUS.jsonData.urls = {
    login: 'http://disqus.com/profile/login/',
    logout: 'http://disqus.com/logout/',
    upload_remove: 'http://hyperandroid.disqus.com/thread/tiler3d_html5/async_media_remove/',
    request_user_profile: 'http://disqus.com/AnonymousUser/',
    request_user_avatar: 'http://mediacdn.disqus.com/1328224449/images/noavatar92.png',
    verify_email: 'http://disqus.com/verify/',
    remote_settings: 'http://hyperandroid.disqus.com/_auth/embed/remote_settings/',
    edit_profile_window: 'http://disqus.com/embed/profile/edit/',
    embed_thread: 'http://hyperandroid.disqus.com/thread.js',
    embed_vote: 'http://hyperandroid.disqus.com/vote.js',
    embed_thread_vote: 'http://hyperandroid.disqus.com/thread_vote.js',
    embed_thread_share: 'http://hyperandroid.disqus.com/thread_share.js',
    embed_queueurl: 'http://hyperandroid.disqus.com/queueurl.js',
    embed_hidereaction: 'http://hyperandroid.disqus.com/hidereaction.js',
    embed_more_reactions: 'http://hyperandroid.disqus.com/more_reactions.js',
    embed_subscribe: 'http://hyperandroid.disqus.com/subscribe.js',
    embed_highlight: 'http://hyperandroid.disqus.com/highlight.js',
    embed_block: 'http://hyperandroid.disqus.com/block.js',
    update_moderate_all: 'http://hyperandroid.disqus.com/update_moderate_all.js',
    update_days_alive: 'http://hyperandroid.disqus.com/update_days_alive.js',
    show_user_votes: 'http://hyperandroid.disqus.com/show_user_votes.js',
    forum_view: 'http://hyperandroid.disqus.com/tiler3d_html5',
    cnn_saml_try: 'http://disqus.com/saml/cnn/try/',
    realtime: DISQUS.jsonData.settings.realtime_url,
    thread_view: 'http://hyperandroid.disqus.com/thread/tiler3d_html5/',
    twitter_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/twitter/begin/',
    yahoo_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/yahoo/begin/',
    openid_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/openid/begin/',
    googleConnect: DISQUS.jsonData.settings.disqus_url + '/_ax/google/begin/',
    community: 'http://hyperandroid.disqus.com/community.html',
    admin: 'http://hyperandroid.disqus.com/admin/moderate/',
    moderate: 'http://hyperandroid.disqus.com/admin/moderate/',
    moderate_threads: 'http://hyperandroid.disqus.com/admin/moderate-threads/',
    settings: 'http://hyperandroid.disqus.com/admin/settings/',
    unmerged_profiles: 'http://disqus.com/embed/profile/unmerged_profiles/',

    channels: {
        def:      'http://disqus.com/default.html', /* default channel */
        auth:     'https://disqus.com/embed/login.html',
        tweetbox: 'http://disqus.com/forums/integrations/twitter/tweetbox.html?f=hyperandroid',
        edit:     'http://hyperandroid.disqus.com/embed/editcomment.html'
    }
};


// 
//     
DISQUS.jsonData.urls.channels.reply = 'http://mediacdn.disqus.com/1328224449/build/system/reply.html';
DISQUS.jsonData.urls.channels.upload = 'http://mediacdn.disqus.com/1328224449/build/system/upload.html';
DISQUS.jsonData.urls.channels.sso = 'http://mediacdn.disqus.com/1328224449/build/system/sso.html';
DISQUS.jsonData.urls.channels.facebook = 'http://mediacdn.disqus.com/1328224449/build/system/facebook.html';
//     
// 