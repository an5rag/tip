webpackJsonp([0],{"./src/scripts/app.tsx":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("./node_modules/react/react.js"),n=s("./node_modules/react-router-dom/es/index.js"),o=s("./src/scripts/scenes/main/main.tsx"),a=s("./node_modules/redux/es/index.js"),c=s("./node_modules/redux-thunk/lib/index.js"),i=s("./src/scripts/services/redux/root-reducer.ts"),l=s("./node_modules/react-redux/es/index.js"),u=s("./node_modules/redux-logger/dist/redux-logger.js"),m=a.createStore(i.rootReducer,a.applyMiddleware(c.default,u.default)),p=function(){return r.createElement(l.Provider,{store:m},r.createElement(n.HashRouter,null,r.createElement(o.Main,null)))};t.default=p},"./src/scripts/building-blocks/tip-link.tsx":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("./node_modules/react/react.js");t.TipLink=function(e){return r.createElement("span",{className:"tip-link"},r.createElement("a",{href:e.link},e.label))}},"./src/scripts/index.jsx":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("./node_modules/react-hot-loader/index.js"),n=(s.n(r),s("./node_modules/react/react.js")),o=(s.n(n),s("./node_modules/react-dom/index.js")),a=(s.n(o),s("./src/scripts/app.tsx")),c=s.n(a),i=document.getElementById("root"),l=function(e){return o.render(n.createElement(r.AppContainer,null,n.createElement(e,null)),i)};l(c.a),e.hot.accept("./src/scripts/app.tsx",function(e){a=s("./src/scripts/app.tsx"),c=s.n(a),function(){l(c.a)}()})},"./src/scripts/scenes/blog/blog.tsx":function(e,t,s){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])};return function(t,s){function r(){this.constructor=t}e(t,s),t.prototype=null===s?Object.create(s):(r.prototype=s.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var n=s("./node_modules/react/react.js"),o=s("./node_modules/react-router-dom/es/index.js"),a=s("./src/scripts/scenes/blog/scenes/archive/archive-container.tsx"),c=function(e){return n.createElement("div",{className:"shrink columns bb-tab"},n.createElement(o.NavLink,{to:e.link,activeClassName:"bb-tab-active"},e.name))};t.BbTabs=function(){return n.createElement("div",{className:"row"},n.createElement(c,{link:"/blog/home",name:"Home"}),n.createElement(c,{link:"/blog/archive",name:"Archive"}),n.createElement(c,{link:"/blog/search",name:"Search"}))};var i=function(e){function s(){return null!==e&&e.apply(this,arguments)||this}return r(s,e),s.prototype.render=function(){return n.createElement("div",{className:"tip-blog"},n.createElement("div",{className:"row row-center"},n.createElement("div",{className:"small-12 medium-7 columns "},n.createElement(t.BbTabs,null))),n.createElement("div",{className:"row row-center"},n.createElement("div",{className:"small-12 medium-7 columns "},n.createElement(o.Switch,null,n.createElement(o.Redirect,{from:"/blog",exact:!0,to:"/blog/home"}),n.createElement(o.Route,{path:this.props.match.url+"/home",render:function(e){return n.createElement("div",null,"blog home")}}),n.createElement(o.Route,{path:this.props.match.url+"/archive",component:a.ArchiveContainer}),n.createElement(o.Route,{path:this.props.match.url+"/post/:blogId",render:function(){return n.createElement("div",null,"some blog")}})))))},s}(n.Component);t.Blog=i},"./src/scripts/scenes/blog/scenes/archive/archive-container.tsx":function(e,t,s){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])};return function(t,s){function r(){this.constructor=t}e(t,s),t.prototype=null===s?Object.create(s):(r.prototype=s.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var n=s("./node_modules/react/react.js"),o=s("./node_modules/react-redux/es/index.js"),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.componentWillMount=function(){},t.prototype.render=function(){return n.createElement("div",{className:"tip-blog-archive"},"Archive!")},t}(n.Component);t.Archive=a;var c=function(e,t){return{match:t.match}},i=function(e){return{}};t.ArchiveContainer=o.connect(c,i)(a)},"./src/scripts/scenes/home/components/team-grid.tsx":function(e,t,s){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])};return function(t,s){function r(){this.constructor=t}e(t,s),t.prototype=null===s?Object.create(s):(r.prototype=s.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var n=s("./node_modules/react/react.js"),o=s("./node_modules/react-masonry-component/lib/index.js"),a=s("./node_modules/lodash/lodash.js"),c={fitWidth:!0,transitionDuration:"0.3s"},i=function(e){function t(t){var s=e.call(this,t)||this;return s.handleImagesLoaded=function(){s.setState({imagesLoaded:!0})},s.state={imagesLoaded:!1},s}return r(t,e),t.prototype.render=function(){var e=this.props.members.map(function(e,t){var s,r=" sepia(90%) hue-rotate("+45*a.random(0,8)+"deg)",o=[n.createElement("span",{key:0},e.name),n.createElement("br",{key:1}),n.createElement("span",{key:2},e.role)];return s=e.link?n.createElement("a",{href:e.link},o):o,n.createElement("div",{className:"grid-element",key:t},n.createElement("img",{className:"grid-element-image hide-on-hover",src:e.src,style:{filter:r}}),n.createElement("div",{className:"grid-element-caption show-on-hover"},s))});n.createElement("h1",null,"Loading");return n.createElement("div",null,n.createElement(o.default,{className:"tip-masonry-grid",options:c},e))},t}(n.Component);t.TeamGrid=i},"./src/scripts/scenes/home/home.tsx":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("./node_modules/react/react.js"),n=s("./src/scripts/building-blocks/tip-link.tsx"),o=s("./src/scripts/scenes/home/components/team-grid.tsx"),a=s("./src/scripts/scenes/home/team-members.ts"),c={booksLarge:s("./src/scripts/scenes/home/static/books.jpg"),booksMedium:s("./src/scripts/scenes/home/static/books-medium.jpg")},i=s("./src/scripts/scenes/home/static/home-page-girl.jpg");t.Home=function(){var e=r.createElement(o.TeamGrid,{members:a.teamMembers.members});return r.createElement("div",{className:"tip-home"},r.createElement("div",{className:"row row-center"},r.createElement("div",{className:"small-12 medium-10 columns"},e)),r.createElement("div",{className:"row row-center"},r.createElement("div",{className:"small-12 medium-10 columns"},r.createElement("div",{className:"row tip-home-section"},r.createElement("div",{className:"small-12 large-6 columns tip-home-subsection"},r.createElement("div",{className:"tip-home-massive-heading"},"We're breaking gender stereotypes in the everyday classroom.",r.createElement("span",{style:{color:"indianred"}}))),r.createElement("div",{className:"small-12 large-6 columns tip-home-subsection"},r.createElement("p",null,"The Irrelevant Project was started with the simple, yet challenging vision of breaking gender stereotypes in the everyday classroom."),r.createElement("p",null,"Having faced the oppression and the limitations of the patriarchal society, the project founders aim to change the narrative for the coming generation through story-telling and gender-sensitization workshops for children."))))),r.createElement("div",{className:"tip-home-ticker-container"},r.createElement("div",{className:"tip-home-ticker"},"We are everyday people committed to constructing a world without gender stereotypes.")),r.createElement("div",{className:"row row-center"},r.createElement("div",{className:"small-12 medium-10 columns"},r.createElement("div",{className:"row tip-home-section"},r.createElement("div",{className:"small-12 columns tip-home-subsection"},r.createElement("picture",null,r.createElement("source",{media:"(min-width: 650px)",srcSet:c.booksLarge}),r.createElement("source",{media:"(max-width: 649px)",srcSet:c.booksMedium}),r.createElement("img",{alt:"Irrelevant Project books strung on a rope."})))),r.createElement("div",{className:"row tip-home-section"},r.createElement("div",{className:"small-12 large-12 columns tip-home-subsection"},r.createElement("h1",{className:"tip-home-subsection-heading"},"Who are we?"),r.createElement("p",null,"We are ",r.createElement("b",null,"everyday feminists"),", deeply determined to create a ",r.createElement("b",null,"kind and inclusive world")," for little children to grow up in."),r.createElement("p",null,"We are engineers, designers, students, illustrators, entrepreneurs, psychologists, journalists who are  excited by the possibility of  replacing the patriarchal and prejudiced worldview dominant in our society with a humane and empathetic worldview. We  aspire to develop a world that’s devoid of biases that have oppressed people and lives . We have worked on this project voluntarily, and with a sense of urgency. We invite you to be a part of this initiative aiming to create a world which allows the next generation of children to be who they are. A world in which their gender, caste, and other identities are irrelevant."))),r.createElement("div",{className:"row tip-home-section row-wrap-reverse"},r.createElement("div",{className:"small-12 large-6 columns tip-home-subsection"},r.createElement("h1",{className:"tip-home-subsection-heading"},"How are we doing this?"),r.createElement("p",null,"Fiction. Stories. We are weaving stories and characters, coloring them, to create in children’s minds an imagination of a better world. An inclusive world. A kind and empathetic world."),r.createElement("p",null,"We hope that these stories will create little superstars for children to fall in love with and mimic. In the process, we’ll create inquisitive little Indian superstars who are eager to ask difficult questions, willing to challenge the status quo, and able to solve problems.")),r.createElement("div",{className:"small-12 large-6 columns tip-home-subsection"},r.createElement("img",{src:"https://feministphilosophers.files.wordpress.com/2012/03/line2-29-10-620x418.jpg"}))),r.createElement("div",{className:"row tip-home-section"},r.createElement("div",{className:"small-12 large-6 columns tip-home-subsection"},r.createElement("img",{src:i})),r.createElement("div",{className:"small-12 large-6 columns tip-home-subsection"},r.createElement("h1",{className:"tip-home-subsection-heading"},"The Storybooks."),r.createElement("p",null,"If you buy one of our books, you’ll get a beautiful, fully illustrated picture book taking you through an exciting journey along with the protagonist. We’ve woven stories around characters who are from different parts of India and the imagery reflects this - in the choice of clothing, in the language used, and even the food mentioned! As you read the story and see the images, you’ll see how we used the ",r.createElement(n.TipLink,{label:"psychology principle of priming",link:"https://explorable.com/priming"})," to get the reader to see the alternate narrative. You’ll see little clues here and there - a boy playing with a doll, a girl playing with a car, the attire of the mother, the task of the father."),r.createElement("p",null,"We are starting off with 5 books at the moment, but as we grow and more writers and illustrators join us, we will have more books for you to buy and indulge in."))),r.createElement("div",{className:"row tip-home-section row-wrap-reverse"},r.createElement("div",{className:"small-12 large-6 columns tip-home-subsection"},r.createElement("h1",{className:"tip-home-subsection-heading"},"Reach out."),r.createElement("p",null,"We are a growing group of people and in a constant search for more illustrators, authors, publishers and just anyone who believes in what we believe in."),r.createElement("p",null,"Let us know you're interested by writing to us ",r.createElement(n.TipLink,{label:"here",link:"#"}),".")),r.createElement("div",{className:"small-12 large-6 columns tip-home-subsection"},r.createElement("div",{className:"tip-home-massive-heading"},"We don't ",r.createElement("br",null)," bite."))))))}},"./src/scripts/scenes/home/static/aakriti.jpg":function(e,t,s){e.exports=s.p+"aed86696d5ad672de1383eaf4182fdc0.jpg"},"./src/scripts/scenes/home/static/aliysha.jpg":function(e,t,s){e.exports=s.p+"e16b0fe66bba8be37db2d4c69edf5205.jpg"},"./src/scripts/scenes/home/static/anurag.jpg":function(e,t,s){e.exports=s.p+"e6165048625f630740ff18f65891e5aa.jpg"},"./src/scripts/scenes/home/static/anushka.jpg":function(e,t,s){e.exports=s.p+"4772decfd9708846d59877f21b893550.jpg"},"./src/scripts/scenes/home/static/ashwini.jpg":function(e,t,s){e.exports=s.p+"a8af72998e7487319af5d62ae9581e0d.jpg"},"./src/scripts/scenes/home/static/books-medium.jpg":function(e,t,s){e.exports=s.p+"1afb251e7d1689ee574d1b35537d4269.jpg"},"./src/scripts/scenes/home/static/books.jpg":function(e,t,s){e.exports=s.p+"3470109b1e5aeb5790bc59af0b25b97e.jpg"},"./src/scripts/scenes/home/static/harish.jpg":function(e,t,s){e.exports=s.p+"0ca3b867c51a9ee48cb5550a3a29570c.jpg"},"./src/scripts/scenes/home/static/home-page-girl.jpg":function(e,t,s){e.exports=s.p+"5b6946897215a412dd4c66aa07f0556c.jpg"},"./src/scripts/scenes/home/static/meghna.jpg":function(e,t,s){e.exports=s.p+"137f248c52076422fb05b22d276333e1.jpg"},"./src/scripts/scenes/home/static/pallavi.jpg":function(e,t,s){e.exports=s.p+"7fe76ab411d7cc73cc2db154b717c286.jpg"},"./src/scripts/scenes/home/static/pranita.jpg":function(e,t,s){e.exports=s.p+"13fe797c9b3be9a42239fe514e88a100.jpg"},"./src/scripts/scenes/home/static/roopsha.jpg":function(e,t,s){e.exports=s.p+"7faa2495f7d01709fa8fa18518f0f7cd.jpg"},"./src/scripts/scenes/home/static/sonaksha.jpg":function(e,t,s){e.exports=s.p+"f8f5be9c8a6b4ee540e0cbe83f142be8.jpg"},"./src/scripts/scenes/home/static/sudhamshu.jpg":function(e,t,s){e.exports=s.p+"54007f14a5d79711cb23861ffda66df2.jpg"},"./src/scripts/scenes/home/static/twisha.jpg":function(e,t,s){e.exports=s.p+"69402b5be4a9b8f82c1f2d2eb4389395.jpg"},"./src/scripts/scenes/home/static/varsha.jpg":function(e,t,s){e.exports=s.p+"2bbe6edc0cd5be3c3890b97efd5eb222.jpg"},"./src/scripts/scenes/home/static/varun.jpg":function(e,t,s){e.exports=s.p+"23e405da7e91da4a68ed89dfde670eed.jpg"},"./src/scripts/scenes/home/team-members.ts":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={anurag:s("./src/scripts/scenes/home/static/anurag.jpg"),meghna:s("./src/scripts/scenes/home/static/meghna.jpg"),aliysha:s("./src/scripts/scenes/home/static/aliysha.jpg"),sudhamshu:s("./src/scripts/scenes/home/static/sudhamshu.jpg"),varsha:s("./src/scripts/scenes/home/static/varsha.jpg"),ashwini:s("./src/scripts/scenes/home/static/ashwini.jpg"),pranita:s("./src/scripts/scenes/home/static/pranita.jpg"),roopsha:s("./src/scripts/scenes/home/static/roopsha.jpg"),twisha:s("./src/scripts/scenes/home/static/twisha.jpg"),anushka:s("./src/scripts/scenes/home/static/anushka.jpg"),sonaksha:s("./src/scripts/scenes/home/static/sonaksha.jpg"),pallavi:s("./src/scripts/scenes/home/static/pallavi.jpg"),aakriti:s("./src/scripts/scenes/home/static/aakriti.jpg"),harish:s("./src/scripts/scenes/home/static/harish.jpg"),varun:s("./src/scripts/scenes/home/static/varun.jpg")};t.teamMembers={members:[{src:r.aliysha,name:"Aliysha Almeda",role:"Co-founder, Queer Activist"},{src:r.meghna,name:"Meghna Chaudhury",role:"Co-founder, Learning Experience Designer",link:"https://medium.com/@meghnachaudhury"},{src:r.sudhamshu,name:"Sudhamshu Mitra",role:"Chief researcher, Blogger, Activist",link:"https://www.youthkiawaaz.com/author/sudhamshu_mitra/"},{src:r.varsha,name:"Varsha Varghese",role:"Author, Founder of Wordsworth project",link:"https://www.youtube.com/watch?v=ZnERyntytSc"},{src:r.ashwini,name:"Ashwini Ashokkumar",role:"Author, Social psychologist, Amateur poet"},{src:r.pranita,name:"Pranita Kocharekar",role:"Illustrator, Influencer, Mental Health Activist "},{src:r.roopsha,name:"Roopsha Manda",role:"Illustrator, Design Student, Freelancer"},{src:r.twisha,name:"Twisha Maniar",role:"Illustrator, Founder of Carousel"},{src:r.anushka,name:"Anuskha Jajodia",role:"Illustrator, Design Student, Freelancer"},{src:r.sonaksha,name:"Sonaksha Iyengar",role:"Illustrator, Author, Mental Health and Body-Positive Activist "},{src:r.pallavi,name:"Pallavi Prasad",role:"Journalist, Editor, Personal Cheerleader"},{src:r.aakriti,name:"Aakriti Pasricha",role:"Mental Health Activist, Editor"},{src:r.harish,name:"Harish Balan",role:"Investor, personal cheerleader, brand strategist"},{src:r.anurag,name:"Anurag Choudhary",role:"Web Designer/Developer",link:"http://anuragchoudhary.com"},{src:r.varun,name:"Varun Mukerji",role:"Founder of withinreach.in, Basketball Enthusiast",link:"https://www.withinreach.in/"}]}},"./src/scripts/scenes/main/body/body.tsx":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("./node_modules/react/react.js"),n=s("./node_modules/react-router-dom/es/index.js"),o=s("./src/scripts/scenes/home/home.tsx"),a=s("./src/scripts/scenes/stories/stories.tsx"),c=s("./src/scripts/scenes/talk/talk.tsx"),i=s("./src/scripts/scenes/blog/blog.tsx");t.Body=function(){return r.createElement("div",{className:"tip-body"},r.createElement(n.Switch,null,r.createElement(n.Route,{exact:!0,path:"/",component:o.Home}),r.createElement(n.Route,{path:"/stories",component:a.Stories}),r.createElement(n.Route,{path:"/talk",component:c.Talk}),r.createElement(n.Route,{path:"/blog",component:i.Blog}),r.createElement(n.Route,{render:function(){return r.createElement("div",null,"404: Page Not found.")}})))}},"./src/scripts/scenes/main/footer/footer.tsx":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("./node_modules/react/react.js");t.Footer=function(){return r.createElement("div",{className:"tip-footer"},r.createElement("div",{className:"row"},r.createElement("div",{className:"tip-footer-section small-6 large-3 columns"},r.createElement("h3",{className:"tip-footer-section-title"},"STORIES"),r.createElement("h4",{className:"tip-footer-section-subtitle"},"All Stories"),r.createElement("h4",{className:"tip-footer-section-subtitle"},"Latest Story"),r.createElement("h4",{className:"tip-footer-section-subtitle"},"First Story")),r.createElement("div",{className:"tip-footer-section small-6 large-3 columns"},r.createElement("h3",{className:"tip-footer-section-title"},"BLOG"),r.createElement("h4",{className:"tip-footer-section-subtitle"},"All Blogs"),r.createElement("h4",{className:"tip-footer-section-subtitle"},"Latest Blog"),r.createElement("h4",{className:"tip-footer-section-subtitle"},"Write a Blog")),r.createElement("div",{className:"tip-footer-section small-6 large-3 columns"},r.createElement("h3",{className:"tip-footer-section-title"},"VOLUNTEER"),r.createElement("h4",{className:"tip-footer-section-subtitle"},"Apply as a Writer"),r.createElement("h4",{className:"tip-footer-section-subtitle"},"Apply as an Illustrator")),r.createElement("div",{className:"tip-footer-section small-6 large-3 columns"},r.createElement("h3",{className:"tip-footer-section-title"},"EXTERNAL"),r.createElement("h4",{className:"tip-footer-section-subtitle"},"Facebook"),r.createElement("h4",{className:"tip-footer-section-subtitle"},"Twitter"),r.createElement("h4",{className:"tip-footer-section-subtitle"},"Instagram"),r.createElement("h4",{className:"tip-footer-section-subtitle"},"Contact us"))),r.createElement("div",{className:"row"},r.createElement("div",{className:"tip-title"},r.createElement("div",{className:"tip-title-copyright"},"© The Irrelevant Project 2017"),r.createElement("div",{className:"tip-title-banner anim-text-flow"},r.createElement("span",null,"t"),r.createElement("span",null,"h"),r.createElement("span",null,"e"),r.createElement("span",null),r.createElement("span",null),r.createElement("span",null),r.createElement("span",null),r.createElement("span",null,"i"),r.createElement("span",null,"r"),r.createElement("span",null,"r"),r.createElement("span",null,"e"),r.createElement("span",null,"l"),r.createElement("span",null,"e"),r.createElement("span",null,"v"),r.createElement("span",null,"a"),r.createElement("span",null,"n"),r.createElement("span",null,"t"),r.createElement("span",null),r.createElement("span",null),r.createElement("span",null),r.createElement("span",null),r.createElement("span",null,"p"),r.createElement("span",null,"r"),r.createElement("span",null,"o"),r.createElement("span",null,"j"),r.createElement("span",null,"e"),r.createElement("span",null,"c"),r.createElement("span",null,"t")))))}},"./src/scripts/scenes/main/header/components/title.tsx":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("./node_modules/react/react.js");t.Title=function(){return r.createElement("div",{className:"tip-title"},"the irrelevant project")}},"./src/scripts/scenes/main/header/header.tsx":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("./node_modules/react/react.js"),n=s("./node_modules/react-router-dom/es/index.js"),o=s("./src/scripts/scenes/main/header/components/title.tsx"),a=function(e){return r.createElement("div",{className:"shrink columns tip-nav-link"},r.createElement(n.NavLink,{to:e.link,activeClassName:"tip-nav-link-active"},e.name))};t.Header=function(){return r.createElement("div",{className:"tip-header"},r.createElement("div",{className:"row row-center"},r.createElement(n.Link,{to:"/"},r.createElement(o.Title,null))),r.createElement("div",{className:"row row-center"},r.createElement(a,{link:"/stories",name:"Stories"}),r.createElement(a,{link:"/talk",name:"Talk"}),r.createElement(a,{link:"/blog",name:"Blog"})))}},"./src/scripts/scenes/main/main.tsx":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("./node_modules/react/react.js"),n=s("./src/scripts/scenes/main/header/header.tsx"),o=s("./src/scripts/scenes/main/footer/footer.tsx"),a=s("./src/scripts/scenes/main/body/body.tsx");t.Main=function(){return r.createElement("div",null,r.createElement(n.Header,null),r.createElement(a.Body,null),r.createElement(o.Footer,null))}},"./src/scripts/scenes/stories/scenes/story-grid/components/story-box.tsx":function(e,t,s){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])};return function(t,s){function r(){this.constructor=t}e(t,s),t.prototype=null===s?Object.create(s):(r.prototype=s.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var n=s("./node_modules/react/react.js"),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props.tags.slice(0,3),t=e.reduce(function(e,t){return e?e+" | "+t.toUpperCase():t.toUpperCase()},"");return n.createElement("div",{className:"tip-story-box"},n.createElement("img",{src:this.props.image}),n.createElement("div",{className:"tip-story-box-caption"},n.createElement("div",{className:"story-title"},this.props.title),n.createElement("div",{className:"story-subtitle"},this.props.author.name),n.createElement("div",{className:"story-subtitle"},this.props.illustrator.name),n.createElement("div",{className:"story-tags"},t)))},t}(n.Component);o.defaultProps={title:"Story Title",id:"",image:"https://img03.deviantart.net/7874/i/2008/122/4/5/crack_texture_by_struckdumb.jpg",synopsis:"Story synopsis",author:{name:"Author Name",id:""},illustrator:{name:"Illustrator Name",id:""},tags:["NONE"]},t.StoryBox=o},"./src/scripts/scenes/stories/scenes/story-grid/components/story-grid.tsx":function(e,t,s){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])};return function(t,s){function r(){this.constructor=t}e(t,s),t.prototype=null===s?Object.create(s):(r.prototype=s.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var n=s("./node_modules/react/react.js"),o=s("./node_modules/react-router-dom/es/index.js"),a=s("./src/scripts/scenes/stories/scenes/story-grid/components/story-box.tsx"),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.componentWillMount=function(){this.props.loadStories()},t.prototype.render=function(){var e=[];for(var t in this.props.stories){var s=this.props.stories[t];e.push(n.createElement(o.Link,{to:this.props.match.url+"/"+t,key:t},n.createElement(a.StoryBox,{title:s.title,author:s.author,tags:s.tags,illustrator:s.illustrator,image:s.images?s.images.grid:void 0})))}return n.createElement("div",{className:"tip-story-grid"},e)},t}(n.Component);t.StoryGrid=c},"./src/scripts/scenes/stories/scenes/story-grid/story-grid-container.tsx":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("./node_modules/react-redux/es/index.js"),n=s("./src/scripts/services/redux/stories/actions.ts"),o=s("./src/scripts/scenes/stories/scenes/story-grid/components/story-grid.tsx"),a=function(e,t){return{stories:e.stories.stories,loadStatus:e.stories.loadStatus,match:t.match}},c=function(e){return{loadStories:function(){e(n.actionCreators.loadStories())}}};t.StoryGridContainer=r.connect(a,c)(o.StoryGrid)},"./src/scripts/scenes/stories/scenes/story/components/story.tsx":function(e,t,s){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])};return function(t,s){function r(){this.constructor=t}e(t,s),t.prototype=null===s?Object.create(s):(r.prototype=s.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var n=s("./node_modules/react/react.js"),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.componentWillMount=function(){this.loadStory(this.props.storyId)},t.prototype.loadStory=function(e){this.props.loadStory(e),this.props.setCurrentStory({id:e})},t.prototype.componentWillReceiveProps=function(e){e.match&&e.storyId!=this.props.storyId&&this.loadStory(e.match.params.storyId)},t.prototype.render=function(){return null===this.props.story?n.createElement("div",null,"story not found!"):n.createElement("div",{className:"tip-story"},n.createElement("div",{className:"row row-center"},n.createElement("div",{className:"small-12 medium-10 columns"},n.createElement("h1",{className:"title"},this.props.story.title),n.createElement("div",{className:"row row-center row-wrap-reverse"},n.createElement("div",{className:"small-12 medium-6 columns synopsis"},n.createElement("p",null,this.props.story.synopsis)),n.createElement("div",{className:"small-12 medium-6 columns info"},n.createElement("div",null,n.createElement("span",{className:"info-key"},"Author "),n.createElement("span",{className:"info-value"},this.props.story.author?this.props.story.author.name:"Unknown")),n.createElement("div",null,n.createElement("span",{className:"info-key"},"Illustrator "),n.createElement("span",{className:"info-value"},this.props.story.illustrator?this.props.story.illustrator.name:"Unknown")))))))},t}(n.Component);o.defaultProps={story:{title:"Story Title",id:"",images:{cover:"http://rishikajain.com/wp-content/uploads/2016/10/Lessons-from-this-picture.jpg",series:[]},synopsis:"Story synopsis",author:{name:"Author Name",id:""},illustrator:{name:"Illustrator Name",id:""}}},t.Story=o},"./src/scripts/scenes/stories/scenes/story/story-container.tsx":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("./node_modules/react-redux/es/index.js"),n=s("./src/scripts/scenes/stories/scenes/story/components/story.tsx"),o=s("./src/scripts/services/redux/stories/actions.ts"),a=function(e,t){return{story:e.stories.stories[t.match.params.storyId],loadStatus:e.stories.loadStatus,match:t.match,storyId:t.match.params.storyId}},c=function(e){return{loadStory:function(t){e(o.actionCreators.loadStory(t))},setCurrentStory:function(t){e(o.actionCreators.setCurrentStory(t))}}};t.StoryContainer=r.connect(a,c)(n.Story)},"./src/scripts/scenes/stories/stories.tsx":function(e,t,s){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])};return function(t,s){function r(){this.constructor=t}e(t,s),t.prototype=null===s?Object.create(s):(r.prototype=s.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var n=s("./node_modules/react/react.js"),o=s("./node_modules/react-router-dom/es/index.js"),a=s("./src/scripts/scenes/stories/scenes/story/story-container.tsx"),c=s("./src/scripts/scenes/stories/scenes/story-grid/story-grid-container.tsx"),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){return n.createElement("div",{className:"row row-center"},n.createElement("div",{className:"small-12 columns tip-stories"},n.createElement(o.Route,{exact:!0,path:this.props.match.url,component:c.StoryGridContainer}),n.createElement(o.Route,{path:this.props.match.url+"/:storyId",component:a.StoryContainer})))},t}(n.Component);t.Stories=i},"./src/scripts/scenes/talk/talk.tsx":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("./node_modules/react/react.js");t.Talk=function(){return r.createElement("div",null,r.createElement("div",{className:"row row-center"},r.createElement("div",{className:"small-12 medium-10 columns tip-talk"},r.createElement("div",{className:"row row-center tip-section"},r.createElement("div",{className:"small-12 columns tip-subsection shrink"},r.createElement("div",{className:"tip-massive-heading"},"Talk."))))))}},"./src/scripts/services/firebase/firebase.ts":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("./node_modules/firebase/firebase-browser.js"),n={apiKey:"AIzaSyD6qrof9hrfDCSOSl2URGfd2bYhc-PqnpM",authDomain:"the-irrelevant-project.firebaseapp.com",databaseURL:"https://the-irrelevant-project.firebaseio.com",projectId:"the-irrelevant-project",storageBucket:"the-irrelevant-project.appspot.com",messagingSenderId:"654368705913"};t.firebase=r.initializeApp(n)},"./src/scripts/services/redux/root-reducer.ts":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("./node_modules/redux/es/index.js"),n=s("./src/scripts/services/redux/stories/reducers.ts");t.rootReducer=r.combineReducers({stories:n.stories})},"./src/scripts/services/redux/stories/actions.ts":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("./src/scripts/services/firebase/firebase.ts"),n=r.firebase.database().ref("stories/");t.actionTypes={FETCH_STORIES_START:"FETCH_STORIES",UPDATE_STORIES:"UPDATE_STORIES",FETCH_STORIES_END:"FETCH_STORIES_COMPLETE",UPDATE_STORY:"UPDATE_STORY",SET_CURRENT_STORY:"SET_CURRENT_STORY"},t.actionCreators={fetchStoriesStart:function(){return{type:t.actionTypes.FETCH_STORIES_START}},fetchStoriesEnd:function(){return{type:t.actionTypes.FETCH_STORIES_END}},updateStories:function(e){return{type:t.actionTypes.UPDATE_STORIES,payload:e}},updateStory:function(e,s){return{type:t.actionTypes.UPDATE_STORY,payload:{id:e,story:s}}},loadStories:function(){return function(e){return e(t.actionCreators.fetchStoriesStart()),n.once("value").then(function(s){var r=s.val();e(t.actionCreators.fetchStoriesEnd()),e(t.actionCreators.updateStories(r))},function(s){e(t.actionCreators.fetchStoriesEnd()),console.error("Server error: ",s.message)})}},loadStory:function(e){return function(s){return s(t.actionCreators.fetchStoriesStart()),n.child(e).once("value").then(function(r){var n=r.val();s(t.actionCreators.fetchStoriesEnd()),null!==n&&s(t.actionCreators.updateStory(e,n))},function(e){s(t.actionCreators.fetchStoriesEnd()),console.error("Server error: ",e.message)})}},setCurrentStory:function(e){return{type:t.actionTypes.SET_CURRENT_STORY,payload:{id:e}}}}},"./src/scripts/services/redux/stories/interfaces.ts":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e[e.INITIAL=0]="INITIAL",e[e.FETCHING=1]="FETCHING",e[e.UPDATING=2]="UPDATING",e[e.COMPLETE=3]="COMPLETE"}(t.StoriesLoadStatusEnum||(t.StoriesLoadStatusEnum={}))},"./src/scripts/services/redux/stories/reducers.ts":function(e,t,s){"use strict";var r=this&&this.__assign||Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++){t=arguments[s];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};Object.defineProperty(t,"__esModule",{value:!0});var n=s("./src/scripts/services/redux/stories/interfaces.ts"),o=s("./src/scripts/services/redux/stories/actions.ts"),a={loadStatus:n.StoriesLoadStatusEnum.INITIAL,stories:{}};t.stories=function(e,t){switch(void 0===e&&(e=a),t.type){case o.actionTypes.FETCH_STORIES_START:return r({},e,{loadStatus:n.StoriesLoadStatusEnum.FETCHING});case o.actionTypes.FETCH_STORIES_END:return r({},e,{loadStatus:n.StoriesLoadStatusEnum.UPDATING});case o.actionTypes.UPDATE_STORIES:return r({},e,{loadStatus:n.StoriesLoadStatusEnum.COMPLETE,stories:t.payload});case o.actionTypes.SET_CURRENT_STORY:return r({},e,{currentStory:{id:t.payload.id}});case o.actionTypes.UPDATE_STORY:var s=e.stories;return s[t.payload.id]=t.payload.story,r({},e,{loadStatus:n.StoriesLoadStatusEnum.COMPLETE,stories:s});default:return e}}},"./src/styles/global.scss":function(e,t){},0:function(e,t,s){s("./src/styles/global.scss"),e.exports=s("./src/scripts/index.jsx")}},[0]);
//# sourceMappingURL=bundle.js.map