// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    let html = '';
    for (let messageData in Messages._data) {
      html += MessageView.render(Messages._data[messageData]);
    }
    $('#chats').append(html);
  },

  renderMessage: function(message) {
    let html = '';
    html += MessageView.render(message);
    $('#chats').append(html);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    $('#chats username').click(event, function() {
      let username = $(this).text();
      Friends.toggleStatus(username);
    });
  }

};