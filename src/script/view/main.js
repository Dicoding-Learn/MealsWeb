import '../component/meal-list.js';
import '../component/search-bar.js';
import DataMeal from '../data/data-meal.js';
 
const main = () => {
   const searchElement = document.querySelector("search-bar");
   const mealListElement = document.querySelector("meal-list");
 
   const onButtonSearchClicked = async () => {
       try {
           const result = await DataMeal.searchMeal(searchElement.value);
           renderResult(result);
       } catch (message) {
           fallbackResult(message)
       }
   };
 
   const renderResult = results => {
       mealListElement.meals = results;
   };
 
   const fallbackResult = message => {
       mealListElement.renderError(message);
   };
 
   searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;