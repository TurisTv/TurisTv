    const button = document.querySelector("button");

    button.addEventListener("click", ()=>{
        if(navigator.geolocation){ //if browser support geolocation api
            button.innerText = "Allow to detect location";
            // geolocation.getCurrentPosition method is used to get current position of the device
            // it takes three paramaters success, error, options. If everything is right then success 
            // callback function will call else error callback function will call. We don't need third paramater for this project
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }else{
            button.innerText = "Your browser not support";
        }
    });

    function onSuccess(position){
        button.innerText = "Detecting your location...";
        let {latitude, longitude} = position.coords; //getting latitude and longitude properties value from coords obj
        //sending get request to the api with passing latitude and longitude coordinates of the user position
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_API_KEY`)
        //parsing json data into javascript object and returning it and in another then function receiving the object that is sent by the api
        .then(response => response.json()).then(response =>{
            let allDetails = response.results[0].components; //passing components object to allDetails variable
            console.table(allDetails);
            let {county, postcode, country} = allDetails; //getting country, postcode, country properties value from allDetails obj
            button.innerText = `${county} ${postcode}, ${country}`; //passing these value to the button innerText
        }).catch(()=>{ //if error any error occured
            button.innerText = "Something went wrong";
        });
    }

    function onError(error){
        if(error.code == 1){ //if user denied the request
            button.innerText = "You denied the request";
        }else if(error.code == 2){ //if location in not available
            button.innerText = "Location is unavailable";
        }else{ //if other error occured
            button.innerText = "Something went wrong";
        }
        button.setAttribute("disabled", "true"); //disbaled the button if error occured
    }




























  var _height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
   var _width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
   var _block_height = Math.round(_height / 9);
   var _block_width = Math.ceil(_width / 16);
   var _animation_delay = 0.03;
   var _blocks = "<div id='unfold-block'><st" + "yle> .unfold-box{ width:" + _block_width + "px;" + "height:" + _block_height + "px; } </st" + "yle>";
   for (var i = 0; i < 9; i++) {
     for (var j = 0; j < 15; j++) {
       _blocks += "<div class='unfold-box' style='transition-delay:" + _animation_delay + "s;'></div>"
       _animation_delay += 0.03;
     }
     _blocks += "<div class='unfold-box' style='transition-delay:" + _animation_delay + "s;width:"+ ( _width - (_block_width * 15)) + "px;'></div>";
     _animation_delay += 0.03;
   }


   _blocks += "<div id='loader'><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></div></div>";
   document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', _blocks);
document.getElementsByTagName("body")[0].style.overflow = "hidden";
   setTimeout(function() {

     var _blocksDOM = document.querySelectorAll(".unfold-box");
     for (var k = 0; k < _blocksDOM.length; k++) {
       var block = _blocksDOM[k];
       block.classList.add("clear");
     }
     document.getElementById("unfold-block").classList.add("clear");
   }, 2000);

   setTimeout(function() {
     document.getElementById('loader').classList.add('clear');
   }, 4000);

   setTimeout(function() {
     document.getElementById("unfold-block").remove();
     document.getElementsByTagName("body")[0].style.overflow = "hidden";
   }, 7000);
