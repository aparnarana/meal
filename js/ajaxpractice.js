document.querySelector('.search').addEventListener('click', () => {
        let searchedMeal = document.querySelector(".meal-search-input").value;
        let request = new XMLHttpRequest();
        request.open("GET",`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedMeal}`  );
        request.send();
        request.addEventListener("load", () => {
          let response = request.responseText;
          //console.log(response)
          let responseData = JSON.parse(response);
          console.log(responseData);
          let mealName = responseData.meals[0].strMeal;
           let mealImage = responseData.meals[0].strMealThumb;
           document.querySelector(".meal-name").textContent = mealName;
           document.querySelector(".meal-img").setAttribute("src", mealImage);
           let mealsObject = responseData.meals[0]
            let mealIngredients= '';

            for(let key in mealsObject){
            if(key.startsWith('strIngredient') && key.length > 0){
                // console.log(mealsObject[key])
                mealIngredients = mealIngredients + mealsObject[key] + "\n"
            }
            }

            console.log(mealIngredients)
            document.querySelector('.ingredients').textContent = mealIngredients
            let mealsmeasure = responseData.meals[0]
            let mealIngredientsmeasure= '';
            for(let key in mealsmeasure){
            if(key.startsWith('strMeasure') && key.length > 0){
                // console.log(mealsObject[key])
                mealIngredientsmeasure = mealIngredientsmeasure + mealsmeasure[key] + "\n"
            }
            }   
            console.log(mealIngredientsmeasure);
            document.querySelector('.measure').textContent = mealIngredientsmeasure

        });
});
        