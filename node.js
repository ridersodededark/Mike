var reasons = [    

    "Trees Provide Shade",
    "Trees Provide Shelter",
    "Trees Provide Materials",
    "Trees Provide Food",
    "Trees Provide Medicine",
    "Trees Provide Beauty"   
                   
];

var images = [
  
  " https://static.scientificamerican.com/sciam/cache/file/B138306C-B6BE-40DB-925471A06A9DEE3A_source.jpg " ,
   
   "https://scx2.b-cdn.net/gfx/news/hires/2022/ancient-trees-deemed-v.jpg" ,

  "http://cdn.shopify.com/s/files/1/0617/2750/6590/collections/autumn-trees.jpg?v=1656404500",

   "https://images.immediate.co.uk/production/volatile/sites/10/2019/10/2048x1365-Trees-for-autumn-colour-GettyImages-471903735-7e8763a.jpg?quality=90&resize=940,627",

   "https://s.hdnux.com/photos/01/27/43/56/22952855/3/1200x0.jpg",

   "https://cdn.thecoolist.com/wp-content/uploads/2016/05/Japanese-Cherry-beautiful-tree.jpg"

];

var i = 0; 

   function nextSlide() {

       document.getElementById("reasontext").innerHTML =  reasons[i];
       document.getElementById("album").src = images[i];
       i++;
       document.getElementById("audio").play();

   }