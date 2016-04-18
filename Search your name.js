/*jshint multistr:true */
var text = "I love the way you shivang lie \ i simply dont understand shivang \ fuck the shut up shivang \ suck the fuck up shivang"
var myName = "shivang"
var hits = [];
for(var i=0;i<text.length;i++){
  if(text[i]==='s'){
      for(var j=i;j<i+myName.length;j++)
      {
           hits.push(j);
      }
     }
  }
  if(hits.length===0){
      console.log("Your name wasn't found")
      }
    else{
        console.log(hits);} 
        