class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
               
                .meal-thumb {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }
               
                .meal-info {
                    padding: 24px;
                }
               
                .meal-info > h2 {
                    font-weight: lighter;
                    color: #20b2aa;
                }
               
                .meal-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
                .meal-info > a {
                    text-decoration: none;
                    color: #20b2aa;
                }
            </style>
            <img class="meal-thumb" src="${this._meal.strMealThumb}" alt="Meal Thumb">
            <div class="meal-info">
                <h2>${this._meal.strMeal} </h2>
                <p>${this._meal.strCategory}</p>
                <p>${this._meal.strArea}</p>
                <p>${this._meal.strInstructions}</p>
                <br>
                <a href="${this._meal.strYoutube}">Youtube</a><br>
                <a href="${this._meal.strSource}">Source</a>             
            </div>`;
    }
 }
  
 customElements.define("meal-item", MealItem);