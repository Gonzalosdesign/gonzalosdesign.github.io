$(function () {

    var vid = $('#v0')[0]; // jquery option
    
    // pause video on load
    vid.pause();
    
    // pause video on document scroll (stops autoplay once scroll started)
    window.onscroll = function () {
        vid.pause();
        //console.log(vid.currentTime, window.pageYOffset / 400);
        $("#time").text(vid.currentTime);
      
      if (vid.currentTime > 29.1 && vid.currentTime < 29.5) {
        $('.content').addClass('active');
      } else {
        $('.content').removeClass('active');
      }
        
    };
    
    // refresh video frames on interval for smoother playback
    setInterval(function () {
        
        if((window.pageYOffset / 400) > 3 && (window.pageYOffset / 400) < 6){
            vid.pause();
        } else {
            
            vid.currentTime = window.pageYOffset / 400;
        }
        
        
    }, 32);
                
                
               
});