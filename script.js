var beers=[];
var sorted=false;
function addBeer (name, category, ball){
console.log(name);
beers.push({
    'name': name,
    'category': category,
    'rating': ball
});
console.log(beers);
renderBeers();
}

$('.sort-beer').on('click', function (){
console.log('sort');
if(!sorted || (sorted==="descending")){
beers.sort(function (a, b) {
    if (a.rating > b.rating) {
      return 1;
    }
    if (a.rating < b.rating) {
      return -1;
    }
    return 0;
  });
  sorted="ascending";
}
else if (sorted="ascending")
{
    beers.sort(function (a, b) {
        if (a.rating < b.rating) {
          return 1;
        }
        if (a.rating > b.rating) {
          return -1;
        }
        return 0;
      });
      sorted="descending";
}
//BubbleSort(beers);
//beers=QuickSort(beers);
renderBeers();
});


function BubbleSort(beers)      
{                           
    var array_lenght = beers.length;
    for (var i = 0; i < array_lenght-1; i++)
     { for (var j = 0; j < array_lenght-1-i; j++)
        { if (beers[j+1].rating < beers[j].rating)
           { var t = beers[j+1]; beers[j+1] = beers[j]; beers[j] = t; }
        }
     }                     
    return beers;    
}
function QuickSort(){
    console.log('sort');
   if (beers.length == 0) return [];
    var a = [], b = [], p = beers[0];
    for (var i = 1; i < beers.length; i++)
     { if (beers[ i ].rating < p.rating) a[a.length] = beers[ i ];
       else b[b.length] = beers[ i ];
     }
    return QuickSort(a).concat( p,QuickSort(b) );
};

$('.post-beer').on('click', function (){
var beerName = $('.beer-input').val(),
categoryName = $('.category-input').val(),
mark=$( "input[type=radio][name=rating]:checked" ).val();
if(beerName && categoryName && mark){
addBeer(beerName, categoryName,mark);}
else alert('Please fill all fields');
});

function renderBeers(){
$('.beerList').empty();
if(beers){
    beers.forEach(function(element,index){
    $('.beerList').append('<li>'+beers[index].name +', RATING:'+ beers[index].rating+'</li>');
    })
}
}