
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

import axios from 'axios';

const getchat = async () =>{
  await axios.get("https://aws.random.cat/meow")
  .then(function (response){
  document.querySelector("#imgchat").src=response.data.file;
  setTimeout(()=>{getchat()},1000);
});
}
getchat();
