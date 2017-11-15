

$.ajax({
  url: 'api/todos',
  type:'GET',
  success: function(promise){
    console.log('nothing here');
  },
  error: function() {
    console.log('FAILURE');
  }
}).then(console.log);


export default APIUtil;
