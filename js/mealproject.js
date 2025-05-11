document.querySelector('.search').addEventListener('click',() => {
 let searchedMeal = document.querySelector(".search-meal-input").value ;
 let request = new XMLHttpRequest();
 request.open("GET", `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedMeal}` );
 request.send();
 request.addEventListener("load",() => {
    let response = request .responseText;
    //console.log(response);
    let responseData = JSON.parse(response);
    console.log(responseData);
    let mealName = responseData.meals[0].strMeal;
    let mealImage = responseData.meals[0].strMealThumb;
    document.querySelector(".img").setAttribute("src", mealImage);
    document.querySelector('.meal-name').textContent=mealName;
 })
})
