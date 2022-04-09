var firebaseUrl = "https://title-views-b2c2f-default-rtdb.asia-southeast1.firebasedatabase.app/";
var secret = "auUKsC4qmCP5CdapRHDew1kV3OAMQySnbNn9z8CG";
var base = FirebaseApp.getDatabaseByUrl(firebaseUrl, secret);

function main() {
  var videoId = "WuSCrKqSlMg";

  var videoData = getVideoDetails(videoId); //get current views in video 
  //var firebaseViews = updateFirebaseData(videoData);
  

  if (updateFirebaseData(videoData) == true){
    updateDetails(videoData);
  }
  
  Logger.log(videoData);
  // if(!validate(videoData)){
  //   updateDetails(videoData);
  // }
  
  Logger.log(videoData);
}

//get current views in video 
function getVideoDetails(videoId){
  var result = YouTube.Videos.list('snippet,statistics', {id:videoId});
  var obj = {
    id:videoId,
    title: result.items[0].snippet.title,
    categoryId: result.items[0].snippet.categoryId,
    viewCount: result.items[0].statistics.viewCount
  }
  
  return obj;
}

function validate(videoData){
  if(videoData.title.indexOf(videoData.viewCount) > 0){
    return true;
  }
  return false;
}

//update video title
function updateDetails(videoData){
  var resource = {
    snippet : {
      title: "O/L Blender SpeedArt, views " + videoData.viewCount + ")",
      categoryId : videoData.categoryId
    },
    id : videoData.id
  };
  
  Logger.log(resource);
  YouTube.Videos.update(resource, "snippet,id");
}


function updateFirebaseData(videoData){

  var viewNumber = base.getData();
  return videoData.title.indexOf(videoData.viewCount) > viewNumber;
} 

function setdataFirebase(){
  ///hfuhd
}

