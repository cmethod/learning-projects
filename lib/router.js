if (Meteor.isClient) {


FlowRouter.route('/', {
  action: function(){

    BlazeLayout.render('layout1', { top: "home", main: "pickaproject" });
  }
});


FlowRouter.route('/threejscube', {
  action: function(){

    BlazeLayout.render('layout1', { top: "home", main: "threejscube" });
  }
});

FlowRouter.route('/animate', {
  action: function(){

    BlazeLayout.render('layout1', { top: "home", main: "animate" });
  }
});

FlowRouter.route('/webpage', {
  action: function(){

    BlazeLayout.render('layout1', { top: "home", main: "webpage" });
  }
});

FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {

    }
};
}
