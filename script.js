const menu={
sandwiches:[
["The Basic Cheesesteak","$10.55","Served on French Bread with Provolone Cheese, Lettuce, Tomato, Pickles & Special Sauce."],
["The Satchmo","$11.55",'"The Basic Cheesesteak" plus Grilled Green Peppers, Mushrooms & Onions.'],
["The Bird","$8.55","Grilled Chicken served on French Bread with Provolone Cheese, Lettuce, Tomato, Pickles & Special Sauce."],
["The Big Bird","$9.55",'"The Bird" plus Grilled Green Peppers, Mushrooms & Onions.'],
["The Chikiyaki","$8.55","Teriyaki marinated Chicken served on a Kaiser with Provolone Cheese, Lettuce & Tomato."],
["The Lady Day","$7.99","Nanny's Chicken Salad served on Toasted Wheat with Bacon, Lettuce, Tomato."],
["The Cheesiest","$6.99","Downtown BEST Grilled Cheese served on Wheat or White. Served with a side item."]
],
"specialty-burgers":[
["Big Daddy Cheeseburger","$13.99","Two Burger Patties on a Kaiser with American Cheese, Lettuce, Tomato, Pickles, Onions, Mustard, Mayo & Ketchup."],
["Pimp Daddy","$13.99","A Burger Patty on a Kaiser with American Cheese, Lettuce, Tomato, Pickles, Onions, Mustard, Mayo & Ketchup."],
["Trap Beckham","$14.99","A Burger Patty on a Kaiser with American Cheese, Sautéed Onions, Lettuce, Tomato, Pickles, Mustard, Mayo & Ketchup."],
["Jalapeno Bacon Cheese","$11.54","A Burger Patty on a Kaiser with Pepper Jack Cheese, Jalapeno Peppers, Bacon, Lettuce, Tomato, Pickles, Onions, Mustard, Mayo & Ketchup."],
["Hawaiian Pineapple","$11.54","A Burger Patty on a Kaiser with American Cheese, Lettuce, Tomato, Pickles, Onions, Mustard, Mayo & Ketchup."],
["All American","$11.54","A Burger Patty on a Kaiser with American Cheese, Bacon & Eggs, Lettuce, Tomato, Pickles, Onions, Mustard, Mayo & Ketchup."],
['NYC Style "Chop Cheese"','$10.54',"A Chopped Burger Patty served with Lettuce, Tomato, Mayo & Ketchup."],
["Turkey Burger","$10.99","A Turkey Burger Patty on a Kaiser served with Lettuce, Tomato, Pickles, Onions & Special Sauce."],
["Veggie Burger","$11.54","A Veggie Burger Patty on a Kaiser served with Lettuce, Tomato, Ketchup & Special Sauce."]
],
burgers:[
["The Classic Burger","$7.07","Beef Patty served on a Kaiser with the Lettuce, Tomato, Pickles, Onions, Mustard, Mayo, and Ketchup."],
["Grilled Onion & Provolone Burger","$8.55","Beef Patty served on Kaiser with Lettuce, Tomato, Pickles, Onions Ketchup, and Special Sauce."],
["Bacon Cheddar Burger","$8.55","Beef Patty served on a Kaiser with Cheddar Cheese, Bacon, Lettuce, Tomato, Pickles, Onions Ketchup, and Special Sauce."]
],
chicken:[
["6 Pc Wings","$8.99","Flavors: Hot, Mild, Lemon Pepper, Jerk, Barbeque, Garlic Parmesan, Honey Hot, Mango Habanero & Teriyaki"],
["10 Pc Wings","$13.99","Flavors: Hot, Mild, Lemon Pepper, Jerk, Barbeque, Garlic Parmesan, Honey Hot, Mango Habanero & Teriyaki"],
["20 Pc Wings","$25.00","Flavors: Hot, Mild, Lemon Pepper, Jerk, Barbeque, Garlic Parmesan, Honey Hot, Mango Habanero & Teriyaki"],
["Fried Chicken","$7.55","Fried Chicken served on a Kaiser with Lettuce, Tomato, Pickles & Honey Mustard."],
["Jerk Chicken","$15.00",""],["Fried Chicken","$15.00",""],["Brown Stew Chicken","$15.00",""],["Curry Chicken","$15.00",""]
],
beef:[["Oxtails","$25.00",""]],
seafood:[
["Burger Salmon","$13.00","Fresh Salmon served on a Kaiser with Lettuce, Tomato & Honey Jerk House Sauce"],
["Fish Sandwich","$7.99","Served on French Bread with American Cheese, Tartar Sauce, Lettuce, Tomato & Pickles"],
["Fish Basket","$8.99","2-piece Fish with Special Tartar Sauce & Garlic Bread"]
],
salads:[
["Cucumber Salad","$3.99",""],["Red Potato Salad","$3.99",""],["Pasta Salad","$3.99",""],
["Nanny's Chicken Salad","$3.50","A nice scoop of Nanny's family recipe made with yummy, toasted Almonds"],
["Solid White Tuna Salad","$3.50","A nice scoop of our homemade, perfectly seasoned tuna salad."]
],
sides:[
["Seasoned Fries","$3.50","SM: $2.99"],["Sweet Potato Fries","$5.15","SM: $4.22"],["Onion Rings","$4.50",""],
["Crispy Coleslaw","$2.99",""],["Patties","$3.00","Chicken, Beef or Veggie"],["Veggies","$3.00",""],
["Rice & Peas","$3.00",""],["Cabbage","$3.00",""],["Plantains","$3.00",""],["Mac & Cheese","$5.00",""],
["Fruit Salad","$2.99",""],["Lay Chips","$2.85",""],["Festival (4 PC)","$5.00",""]
],
drinks:[
["Bottled Drinks","$3.25",""],["Can Soda","$1.75",""],["Energy Drink","$4.00",""],["Milkshakes","$5.00","Vanilla & Chocolate"]
],
lunch:[
["Jerk Chicken","$12.00",""],["Fried Chicken","$12.00",""],["Brown Stew Chicken","$12.00",""],["Curry Chicken","$12.00",""]
]};
const labels={sandwiches:"Specialty Sandwiches","specialty-burgers":"Specialty Burgers",burgers:"Burgers",chicken:"Chicken",beef:"Beef",seafood:"Seafood",salads:"Salads",sides:"Side Items",drinks:"Drinks",lunch:"Lunch (M-F Before 2 PM)"};
const tabs=document.getElementById("tabs"), list=document.getElementById("menu-list");
Object.keys(menu).forEach((key,i)=>{const b=document.createElement("button");b.textContent=labels[key];b.onclick=()=>render(key);if(i===0)b.className="active";b.dataset.key=key;tabs.appendChild(b)});
function render(key){document.querySelectorAll(".tabs button").forEach(b=>b.classList.toggle("active",b.dataset.key===key));list.innerHTML=menu[key].map(x=>`<article class="item"><div><h3>${x[0]}</h3>${x[2]?`<p>${x[2]}</p>`:""}</div><div class="price">${x[1]}</div></article>`).join("")}
render("sandwiches");document.getElementById("year").textContent=new Date().getFullYear();