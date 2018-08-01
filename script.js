var beers = [];
sorted = "sort_des";
function addBeer(name, category, ball) {
    console.log(name);
    beers.push({
        'name': name,
        'category': category,
        'rating': ball
    });
}

function compareNumericDes(a, b) {
sorted="sort_des";
return b.rating - a.rating;
}
function compareNumericAsc(a, b) {
    sorted="sort_asc";
    return a.rating - b.rating;
    }
$('.sort-beer').on('click', function () {
    (sorted==="sort_des")?beers.sort(compareNumericAsc):beers.sort(compareNumericDes);
    console.log(beers);
    renderBeers();
});


$('.post-beer').on('click', function () {
    var beerName = $('.beer-input').val(),
        categoryName = $('.category-input').val(),
        mark = $("input[type=radio][name=rating]:checked").val();
    if (beerName && categoryName && mark) {
        addBeer(beerName, categoryName, mark);
        renderBeers();
    }
    else alert('Please fill all fields');
});

function renderBeers() {
    $('.beerList').empty();
    if (beers) {
        beers.forEach(function (element, index) {
            $('.beerList').append('<li>' + beers[index].name + "<br><strong>    Category: </strong>"+beers[index].category);//', RATING:' + beers[index].rating + '</li>');
           var str='';
            for(let i=0; i<beers[index].rating;i++){
            str+='&#10027;';
           }
           $('.beerList').append(str + '</li>');
        })
    }
}