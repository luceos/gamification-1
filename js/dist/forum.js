module.exports=function(t){var n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=77)}([function(t,n){t.exports=flarum.core.compat.app},function(t,n){t.exports=flarum.core.compat.Model},function(t,n){t.exports=flarum.core.compat.extend},function(t,n){t.exports=flarum.core.compat["components/Button"]},function(t,n,o){"use strict";o.d(n,"a",function(){return a});var e=o(23),r=o.n(e);function a(t,n){t.prototype=r()(n.prototype),t.prototype.constructor=t,t.__proto__=n}},function(t,n){t.exports=flarum.core.compat["helpers/username"]},function(t,n){var o=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=o)},function(t,n){var o=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=o)},function(t,n,o){t.exports=!o(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=flarum.core.compat["helpers/avatar"]},function(t,n){t.exports=flarum.core.compat["components/IndexPage"]},function(t,n,o){var e=o(12);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=flarum.core.compat["helpers/listItems"]},function(t,n){},function(t,n){var o={}.hasOwnProperty;t.exports=function(t,n){return o.call(t,n)}},function(t,n,o){var e=o(38),r=o(30);t.exports=function(t){return e(r(t))}},function(t,n){var o=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:o)(t)}},function(t,n,o){var e=o(43)("keys"),r=o(45);t.exports=function(t){return e[t]||(e[t]=r(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,o){var e=o(11),r=o(49),a=o(50),s=Object.defineProperty;n.f=o(8)?Object.defineProperty:function(t,n,o){if(e(t),n=a(n,!0),e(o),r)try{return s(t,n,o)}catch(t){}if("get"in o||"set"in o)throw TypeError("Accessors not supported!");return"value"in o&&(t[n]=o.value),t}},function(t,n,o){var e=o(12),r=o(7).document,a=e(r)&&e(r.createElement);t.exports=function(t){return a?r.createElement(t):{}}},function(t,n,o){t.exports=o(52)},function(t,n,o){"use strict";o.d(n,"a",function(){return i});var e=o(4),r=o(1),a=o.n(r),s=o(25),i=function(t){function n(){return t.apply(this,arguments)||this}return Object(e.a)(n,t),n}(o.n(s)()(a.a,{points:a.a.attribute("points"),name:a.a.attribute("name"),color:a.a.attribute("color")}))},function(t,n){t.exports=flarum.core.compat["utils/mixin"]},function(t,n){t.exports=flarum.core.compat["components/Page"]},function(t,n){t.exports=flarum.core.compat["utils/ItemList"]},function(t,n){t.exports=flarum.core.compat["components/LogInModal"]},function(t,n,o){t.exports=o(78)},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,o){var e=o(37),r=o(20);t.exports=Object.keys||function(t){return e(t,r)}},function(t,n,o){var e=o(7),r=o(6),a=o(46),s=o(48),i=o(16),u=function(t,n,o){var c,p,f,l=t&u.F,m=t&u.G,d=t&u.S,h=t&u.P,v=t&u.B,b=t&u.W,y=m?r:r[n]||(r[n]={}),g=y.prototype,x=m?e:d?e[n]:(e[n]||{}).prototype;for(c in m&&(o=n),o)(p=!l&&x&&void 0!==x[c])&&i(y,c)||(f=p?x[c]:o[c],y[c]=m&&"function"!=typeof x[c]?o[c]:v&&p?a(f,e):b&&x[c]==f?function(t){var n=function(n,o,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,o)}return new t(n,o,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):h&&"function"==typeof f?a(Function.call,f):f,h&&((y.virtual||(y.virtual={}))[c]=f,t&u.R&&g&&!g[c]&&s(g,c,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,n){t.exports=flarum.core.compat["components/Dropdown"]},function(t,n){t.exports=flarum.core.compat["models/Discussion"]},function(t,n){t.exports=flarum.core.compat["components/UserCard"]},,function(t,n,o){var e=o(16),r=o(17),a=o(40)(!1),s=o(19)("IE_PROTO");t.exports=function(t,n){var o,i=r(t),u=0,c=[];for(o in i)o!=s&&e(i,o)&&c.push(o);for(;n.length>u;)e(i,o=n[u++])&&(~a(c,o)||c.push(o));return c}},function(t,n,o){var e=o(39);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){var o={}.toString;t.exports=function(t){return o.call(t).slice(8,-1)}},function(t,n,o){var e=o(17),r=o(41),a=o(42);t.exports=function(t){return function(n,o,s){var i,u=e(n),c=r(u.length),p=a(s,c);if(t&&o!=o){for(;c>p;)if((i=u[p++])!=i)return!0}else for(;c>p;p++)if((t||p in u)&&u[p]===o)return t||p||0;return!t&&-1}}},function(t,n,o){var e=o(18),r=Math.min;t.exports=function(t){return t>0?r(e(t),9007199254740991):0}},function(t,n,o){var e=o(18),r=Math.max,a=Math.min;t.exports=function(t,n){return(t=e(t))<0?r(t+n,0):a(t,n)}},function(t,n,o){var e=o(6),r=o(7),a=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,n){return a[t]||(a[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:o(44)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!0},function(t,n){var o=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++o+e).toString(36))}},function(t,n,o){var e=o(47);t.exports=function(t,n,o){if(e(t),void 0===n)return t;switch(o){case 1:return function(o){return t.call(n,o)};case 2:return function(o,e){return t.call(n,o,e)};case 3:return function(o,e,r){return t.call(n,o,e,r)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,o){var e=o(21),r=o(51);t.exports=o(8)?function(t,n,o){return e.f(t,n,r(1,o))}:function(t,n,o){return t[n]=o,t}},function(t,n,o){t.exports=!o(8)&&!o(13)(function(){return 7!=Object.defineProperty(o(22)("div"),"a",{get:function(){return 7}}).a})},function(t,n,o){var e=o(12);t.exports=function(t,n){if(!e(t))return t;var o,r;if(n&&"function"==typeof(o=t.toString)&&!e(r=o.call(t)))return r;if("function"==typeof(o=t.valueOf)&&!e(r=o.call(t)))return r;if(!n&&"function"==typeof(o=t.toString)&&!e(r=o.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,o){o(53);var e=o(6).Object;t.exports=function(t,n){return e.create(t,n)}},function(t,n,o){var e=o(32);e(e.S,"Object",{create:o(54)})},function(t,n,o){var e=o(11),r=o(55),a=o(20),s=o(19)("IE_PROTO"),i=function(){},u=function(){var t,n=o(22)("iframe"),e=a.length;for(n.style.display="none",o(56).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;e--;)delete u.prototype[a[e]];return u()};t.exports=Object.create||function(t,n){var o;return null!==t?(i.prototype=e(t),o=new i,i.prototype=null,o[s]=t):o=u(),void 0===n?o:r(o,n)}},function(t,n,o){var e=o(21),r=o(11),a=o(31);t.exports=o(8)?Object.defineProperties:function(t,n){r(t);for(var o,s=a(n),i=s.length,u=0;i>u;)e.f(t,o=s[u++],n[o]);return t}},function(t,n,o){var e=o(7).document;t.exports=e&&e.documentElement},function(t,n){t.exports=flarum.core.compat["models/Post"]},function(t,n){t.exports=flarum.core.compat["models/User"]},function(t,n){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,n){t.exports=flarum.core.compat["components/LinkButton"]},function(t,n){t.exports=flarum.core.compat["components/CommentPost"]},,,function(t,n,o){"use strict";var e=o(2),r=o(0),a=o.n(r),s=o(9),i=o.n(s),u=o(66),c=o.n(u),p=o(5),f=o.n(p),l=o(34),d=o.n(l),h=o(33),v=o.n(h),b=o(14),y=o.n(b),g=o(1),x=o.n(g),w=o(57),k=o.n(w),N=o(67),P=o.n(N),O=o(58),_=o.n(O),j=o(35),C=o.n(j),M=o(68),S=o.n(M),I=o(69),U=o.n(I);function V(t,n){void 0===n&&(n={}),n.style=n.style||{},n.className="rankLabel "+(n.className||"");var o=t.color();return n.style.backgroundColor=n.style.color=o,n.className+=" colored",m("span",n,m("span",{className:"rankLabel-text"},t.name()))}var R=function(){d.a.prototype.canVote=x.a.attribute("canVote"),d.a.prototype.canSeeVotes=x.a.attribute("canSeeVotes"),d.a.prototype.votes=x.a.attribute("votes"),_.a.prototype.points=x.a.attribute("points"),_.a.prototype.ranks=x.a.hasMany("ranks"),k.a.prototype.upvotes=x.a.hasMany("upvotes"),k.a.prototype.downvotes=x.a.hasMany("downvotes"),Object(e.extend)(C.a.prototype,"infoItems",function(t,n){var o="";0==o&&(o="0"),o=app.forum.attribute("PointsPlaceholder")?app.forum.attribute("PointsPlaceholder").replace("{points}",this.props.user.data.attributes.Points):app.translator.trans("reflar-gamification.forum.user.points",{points:this.props.user.data.attributes.Points}),t.add("points",o)}),C.a.prototype.view=function(){var t=this.props.user,n=S.a.controls(t,this).toArray(),o=t.color(),e=t.badges().toArray();return m("div",{className:"UserCard "+(this.props.className||""),style:o?{backgroundColor:o}:""},m("div",{className:"darkenBackground"},m("div",{className:"container"},n.length?v.a.component({children:n,className:"UserCard-controls App-primaryControl",menuClassName:"Dropdown-menu--right",buttonClassName:this.props.controlsButtonClassName,label:app.translator.trans("core.forum.user_controls.button"),icon:"fa fa-ellipsis-v"}):"",m("div",{className:"UserCard-profile"},m("h2",{className:"UserCard-identity"},this.props.editable?[c.a.component({user:t,className:"UserCard-avatar"}),f()(t)]:m("a",{href:app.route.user(t),config:m.route},m("div",{className:"UserCard-avatar"},i()(t)),f()(t))),e.length?m("ul",{className:"UserCard-badges badges"},y()(e),!1!==t.ranks()?t.ranks().map(function(t,n){if(!(n>=app.forum.attribute("ranksAmt")&&null!==app.forum.attribute("ranksAmt")))return m("li",{className:"User-Rank"},V(t))}):""):"",m("ul",{className:"UserCard-info"},y()(this.infoItems().toArray()))))))},P.a.prototype.view=function(){var t=this.props.post,n=t.user();if(!n)return m("div",{className:"PostUser"},m("h3",null,i()(n,{className:"PostUser-avatar"})," ",f()(n)," ",rank[0]));var o="";return!t.isHidden()&&this.cardVisible&&(o=C.a.component({user:n,className:"UserCard--popover",controlsButtonClassName:"Button Button--icon Button--flat"})),m("div",{className:"PostUser"},U()(n),m("h3",null,m("a",{href:app.route.user(n),config:m.route},i()(n,{className:"PostUser-avatar"})," ",f()(n)),n.ranks().map(function(t,n){if(!(n>=app.forum.attribute("ranksAmt")&&null!==app.forum.attribute("ranksAmt")))return m("span",{className:"Post-Rank"},V(t))})),m("ul",{className:"PostUser-badges badges"},y()(n.badges().toArray())),o)}},B=o(29),E=o.n(B),A=o(10),D=o.n(A),L=o(27),T=o.n(L),F=o(59),q=o.n(F),z=o(3),W=o.n(z),G=o(60),H=o.n(G),J=function(){D.a.prototype.viewItems=function(){var t=this,n=new T.a,o=app.cache.discussionList.sortMap(),e={};for(var r in o)e[r]=app.translator.trans("core.forum.index_sort."+r+"_button");var a=e[this.params().sort]||E()(o).map(function(t){return e[t]})[0];return/^.*?\/hot/.test(m.route())&&(a=app.translator.trans("core.forum.index_sort.hot_button")),n.add("sort",v.a.component({buttonClassName:"Button",label:a,children:E()(e).map(function(n){var r=e[n],a=(t.params().sort||E()(o)[0])===n;return/^.*?\/hot/.test(m.route())&&"hot"===n&&(a=!0),/^.*?\/hot/.test(m.route())&&"latest"===n&&(a=!1,m.redraw()),W.a.component({children:r,icon:!a||"fa fa-check",onclick:t.changeSort.bind(t,n),active:a})})})),n},D.a.prototype.navItems=function(){var t=new T.a,n=this.stickyParams();return t.add("allDiscussions",H.a.component({href:app.route("index",n),active:"/"===m.route()||/^.*?\/(\?sort=.*|hot)/.test(m.route()),children:app.translator.trans("core.forum.index.all_discussions_link"),icon:"fa fa-comments-o"}),100),void 0===app.session.user||!1===app.session.user.data.attributes.canViewRankingPage||t.add("rankings",H.a.component({href:app.route("rankings",{}),children:app.translator.trans("reflar-gamification.forum.nav.name"),icon:"fa fa-trophy"}),80),t},D.a.prototype.changeSort=function(t){var n=this.params();"hot"===t?(m.route(app.route("index")),m.route(m.route()+"hot")):(t===E()(app.cache.discussionList.sortMap())[0]?delete n.sort:n.sort=t,"hot"===n.filter&&delete n.filter,m.route(app.route("index",n)))},Object(e.extend)(q.a.prototype,"sortMap",function(t){t.hot="hot"}),Object(e.extend)(q.a.prototype,"requestParams",function(t){"hot"===this.props.params.filter&&(t.filter.q=" is:hot")})},K=o(28),Q=o.n(K),X=o(61),Y=o.n(X),Z=o(4),tt=o(70),nt=function(t){function n(){return t.apply(this,arguments)||this}Object(Z.a)(n,t);var o=n.prototype;return o.className=function(){return"VotesModal Modal--small"},o.title=function(){return app.translator.trans("reflar-gamification.forum.modal.title")},o.content=function(){return m("div",{className:"Modal-body"},m("ul",{className:"VotesModal-list"},m("legend",null,app.translator.trans("reflar-gamification.forum.modal.upvotes_label")),this.props.post.upvotes().map(function(t){return m("li",null,m("a",{href:app.route.user(t),config:m.route},i()(t)," "," ",f()(t)))}),m("legend",null,app.translator.trans("reflar-gamification.forum.modal.downvotes_label")),this.props.post.downvotes().map(function(t){return m("li",null,m("a",{href:app.route.user(t),config:m.route},i()(t)," "," ",f()(t)))})))},n}(o.n(tt).a),ot=o(24),et=o(26),rt=o.n(et),at=o(71),st=o.n(at),it=function(t){function n(){return t.apply(this,arguments)||this}Object(Z.a)(n,t);var o=n.prototype;return o.init=function(){t.prototype.init.call(this),app.session.user&&!0===app.session.user.data.attributes.canViewRankingPage||m.route("/"),this.loading=!0,this.users=[],this.refresh()},o.view=function(){var t,n=this;return t=this.loading?st.a.component():W.a.component({children:app.translator.trans("core.forum.discussion_list.load_more_button"),className:"Button",onclick:this.loadMore.bind(this)}),m("div",{className:"RankingPage"},D.a.prototype.hero(),m("div",{className:"container"},m("nav",{className:"RankingPage-nav IndexPage-nav sideNav",config:D.a.prototype.affixSidebar},m("ul",null,y()(D.a.prototype.sidebarItems().toArray()))),m("div",{className:"RankingPage"},m("div",{className:"sideNavOffset"},m("table",{class:"rankings"},m("tr",null,m("th",{className:"rankings-mobile"},app.translator.trans("reflar-gamification.forum.ranking.rank")),m("th",null,app.translator.trans("reflar-gamification.forum.ranking.name")),m("th",null,app.translator.trans("reflar-gamification.forum.ranking.amount"))),this.users.map(function(t,o){return++o,[m("tr",{className:"ranking-"+o},o<4?"1"==app.forum.attribute("CustomRankingImages")?m("img",{className:"rankings-mobile rankings-image",src:app.forum.attribute("baseUrl")+"/assets/"+app.forum.attribute("TopImage"+o)}):m("td",{className:"rankings-mobile rankings-"+o}," ",m("i",{className:"icon fa fa-trophy"})):m("td",{className:"rankings-4 rankings-mobile"},n.addOrdinalSuffix(o)),m("td",null,m("div",{className:"PostUser"},m("h3",{className:"rankings-info"},m("a",{href:app.route.user(t),config:m.route},o<4?i()(t,{className:"info-avatar rankings-"+o+"-avatar"}):""," ",f()(t))))),o<4?m("td",{className:"rankings-"+o},t.data.attributes.Points):m("td",{className:"rankings-4"},t.data.attributes.Points))]})),m("div",{className:"rankings-loadmore"}," ",t)))))},o.refresh=function(t){var n=this;return void 0===t&&(t=!0),t&&(this.loading=!0,this.users=[]),this.loadResults().then(function(t){n.users=[],n.parseResults(t)},function(){n.loading=!1,m.redraw()})},o.addOrdinalSuffix=function(t){if("en"==app.forum.attribute("DefaultLocale")){var n=t%10,o=t%100;return 1==n&&11!=o?t+"st":2==n&&12!=o?t+"nd":3==n&&13!=o?t+"rd":t+"th"}return t},o.stickyParams=function(){return{sort:m.route.param("sort"),q:m.route.param("q")}},o.actionItems=function(){var t=new T.a;return t.add("refresh",W.a.component({title:app.translator.trans("core.forum.index.refresh_tooltip"),icon:"fa fa-refresh",className:"Button Button--icon",onclick:function(){app.cache.discussionList.refresh(),app.session.user&&(app.store.find("users",app.session.user.id()),m.redraw())}})),t},o.newDiscussion=function(){var t=m.deferred();return app.session.user?this.composeNewDiscussion(t):app.modal.show(new Q.a({onlogin:this.composeNewDiscussion.bind(this,t)})),t.promise},o.composeNewDiscussion=function(t){var n=new DiscussionComposer({user:app.session.user});return app.composer.load(n),app.composer.show(),t.resolve(n),t.promise},o.loadResults=function(t){var n={};return n.page={offset:t,limit:"10"},app.store.find("rankings",n)},o.loadMore=function(){this.loading=!0,this.loadResults(this.users.length).then(this.parseResults.bind(this))},o.parseResults=function(t){return[].push.apply(this.users,t),this.loading=!1,this.users.sort(function(t,n){return parseFloat(n.data.attributes.Points)-parseFloat(t.data.attributes.Points)}),m.lazyRedraw(),t},n}(rt.a),ut=o(72),ct=function(t){function n(){return t.apply(this,arguments)||this}Object(Z.a)(n,t);var o=n.prototype;return o.icon=function(){return"Up"===this.props.notification.content()?"thumbs-up":"thumbs-down"},o.href=function(){return app.route.post(this.props.notification.subject())},o.content=function(){return"Up"===this.props.notification.content()?app.translator.trans("reflar-gamification.forum.notification.upvote",{username:this.props.notification.sender().username()}):app.translator.trans("reflar-gamification.forum.notification.downvote",{username:this.props.notification.sender().username()})},o.excerpt=function(){return this.props.notification.subject().contentPlain()},n}(o.n(ut).a);a.a.initializers.add("reflar-gamification",function(t){t.store.models.ranks=ot.a,t.notificationComponents.vote=ct,t.routes.rankings={path:"/rankings",component:it.component()},Object(e.extend)(Y.a.prototype,"config",function(t,n,o){var r=this;n||(a.a.pusher&&a.a.pusher.then(function(t){t.main.bind("newVote",function(t){var n=parseInt(t.userId);if(n!=a.a.session.user.id()){if(m.startComputation(),r.postId()==t.postId){var o=r.upvotedata(),e=r.downvotedata();switch(t.before){case"up":o=r.removeVote(o,n);break;case"down":e=r.removeVote(e,n)}switch(t.after){case"up":o.unshift({type:"users",id:n});break;case"down":e.unshift({type:"users",id:n});break;case"none":e=r.removeVote(e,n),o=r.removeVote(o,n)}r.downvotedata(e),r.upvotedata(o),m.redraw.strategy("all")}m.endComputation()}}),Object(e.extend)(o,"onunload",function(){return t.main.unbind("newVote")})}),$(".Post-vote").unbind().on("click touchend",function(){$(this).addClass("cbutton--click"),setTimeout(function(){$(".Post-vote").removeClass("cbutton--click")},600)}))}),Object(e.extend)(Y.a.prototype,"actionItems",function(t){var n=this,o=this.props.post;this.postId=m.prop(o.data.id),this.downvotedata=m.prop(o.data.relationships.downvotes.data),this.upvotedata=m.prop(o.data.relationships.upvotes.data);var e=a.a.session.user&&o.upvotes().some(function(t){return t===a.a.session.user}),r=a.a.session.user&&o.downvotes().some(function(t){return t===a.a.session.user});a.a.session.user||(r=!1,e=!1);var s=a.a.forum.attribute("IconName");null!==s&&""!==s||(s="thumbs"),this.removeVote=function(t,n){return t.some(function(o,e){o.id==n&&t.splice(e,1)}),t},t.add("upvote",W.a.component({icon:"fa fa-"+s+"-up",className:"Post-vote Post-upvote",style:!1!==e?"color:"+a.a.forum.data.attributes.themePrimaryColor:"color:",disabled:!o.discussion().canVote(),onclick:function(){if(a.a.session.user){if(o.discussion().canVote()){var t=o.data.relationships.upvotes.data;e=!e,r=!1,o.save([e,r,"vote"]),t=n.removeVote(t,a.a.session.user.id()),e&&t.unshift({type:"users",id:a.a.session.user.id()})}}else a.a.modal.show(new Q.a)}})),t.add("points",m("button",{disabled:!o.discussion().canSeeVotes(),className:"Post-points",onclick:function(){o.discussion().canSeeVotes()&&a.a.modal.show(new nt({post:o}))}},this.upvotedata().length-this.downvotedata().length)),t.add("downvote",W.a.component({icon:"fa fa-"+s+"-down",className:"Post-vote Post-downvote",style:!1!==r?"color:"+a.a.forum.data.attributes.themePrimaryColor:"",disabled:!o.discussion().canVote(),onclick:function(){if(a.a.session.user){if(o.discussion().canVote()){var t=o.data.relationships.downvotes.data;r=!r,e=!1,o.save([e,r,"vote"]),t=n.removeVote(t,a.a.session.user.id()),r&&t.unshift({type:"users",id:a.a.session.user.id()})}}else a.a.modal.show(new Q.a)}}))}),J(),R()})},,function(t,n){t.exports=flarum.core.compat["components/AvatarEditor"]},function(t,n){t.exports=flarum.core.compat["components/PostUser"]},function(t,n){t.exports=flarum.core.compat["utils/UserControls"]},function(t,n){t.exports=flarum.core.compat["helpers/userOnline"]},function(t,n){t.exports=flarum.core.compat["components/Modal"]},function(t,n){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,n){t.exports=flarum.core.compat["components/Notification"]},,,,,function(t,n,o){"use strict";o.r(n);var e=o(15);for(var r in e)"default"!==r&&function(t){o.d(n,t,function(){return e[t]})}(r);o(64)},function(t,n,o){o(79),t.exports=o(6).Object.keys},function(t,n,o){var e=o(80),r=o(31);o(81)("keys",function(){return function(t){return r(e(t))}})},function(t,n,o){var e=o(30);t.exports=function(t){return Object(e(t))}},function(t,n,o){var e=o(32),r=o(6),a=o(13);t.exports=function(t,n){var o=(r.Object||{})[t]||Object[t],s={};s[t]=n(o),e(e.S+e.F*a(function(){o(1)}),"Object",s)}}]);
//# sourceMappingURL=forum.js.map