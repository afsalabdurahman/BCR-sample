var express = require('express');
var router = express.Router();

/* GET home page. */
var product=[
  {
  name:"iphone",
  rate:250000,
  img:"https://idestiny.in/wp-content/uploads/2022/09/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_Avail__en-IN.jpg"
},
{
  name:"iphone",
  rate:250000,
  img:"https://idestiny.in/wp-content/uploads/2022/09/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_Avail__en-IN.jpg"
},
{
  name:"iphone",
  rate:250000,
  img:"https://idestiny.in/wp-content/uploads/2022/09/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_Avail__en-IN.jpg"
},
{
  name:"iphone",
  rate:250000,
  img:"https://idestiny.in/wp-content/uploads/2022/09/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_Avail__en-IN.jpg"
},
{
  name:"iphone",
  rate:250000,
  img:"https://idestiny.in/wp-content/uploads/2022/09/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_Avail__en-IN.jpg"
},
{
  name:"iphone",
  rate:250000,
  img:"https://idestiny.in/wp-content/uploads/2022/09/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_Avail__en-IN.jpg"
},

]

router.get('/', function(req, res, next) {
  res.render('index', { product});
});

module.exports = router;
