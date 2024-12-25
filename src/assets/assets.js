import Logo from "./Logo.png";
import forgotpassword from "./forgotpassword.png";
import homewallpaper from "./homewallpaper.png";
import add from "./add.png";
import addfood from "./addfood.png";
import minusfood from "./minusfood.png";
import cart from "./cart.png";
import search from "./search.png";
import rating from "./rating.png";

// menu list--------------------------------------------------------
import Pizza from "./Pizza.png";
import Burger from "./Burger.png";
import FrenchFries from "./FrenchFries.png";
import Noodles from "./Noodles.png";
import Sandwich from "./Sandwich.png";
import Shakes from "./Shakes.png";
import Coffee from "./Coffee.png";

// pizzas-----------------------------------------------------

import BlazingOnionPaprika from "./Pizzaas/BlazingOnionNPaprika.png";
import CapcicumMashroom from "./Pizzaas/Capcicum&Mashroom.png";
import CapcicumPizza from "./Pizzaas/CapcicumPizza.png";
import CheeseNcorn from "./Pizzaas/CheeseNCorn.png";
import Formhouse from "./Pizzaas/Farmhouse.png";
import GoldenCorn from "./Pizzaas/GoldenCorn.png";
import IndiTandooriPaneer from "./Pizzaas/IndiTandooriPaneer.png";
import Magherita from "./Pizzaas/Magherita.png";
import onionPaneer from "./Pizzaas/Onion&Paneer.png";
import Onion from "./Pizzaas/Onion.png";
import Tomato from "./Pizzaas/Tomato.png";
import VegExtravaganza from "./Pizzaas/VegExtravaganza.png";
import VeggieParadise from "./Pizzaas/VeggieParadise.png";



// Burger----------------------------------------------------
import BurgerLogo from "./Burgers/BurgerLogo.png";
import AlooTikki from "./Burgers/AlooTikkiBurger.jpg";
import DoublePattyBurger from "./Burgers/DoublePattyBurger.jpg";
import ChesseBurger from "./Burgers/ChesseBurger.jpg";
import classicBurger from "./Burgers/classicBurger.jpg";
import GrillBeanBurger from "./Burgers/GrilledBeanBurgers.jpg";
import GrilledPortobelloBurgers from "./Burgers/GrilledPortobelloBurger.jpg";
import GrilledVegBurger  from "./Burgers/GrilledVegBurger.jpg";
import MushroomBurger from "./Burgers/MushroomBurger.jpg";
import RedOnionBurger from "./Burgers/redOnionBurger.jpg";
import VeggieBigMac from "./Burgers/veggieBigMac.jpg";


// Sandwich---------------------------------------------------
import sandwich1 from "./Sandwich/sandwich1.png";

// Coffee-----------------------------------------------------
import justcoffee from "./Coffee/justcoffee.png";

// FrenchFries------------------------------------------------
import fries1 from "./FrenchFies/fries1.png";

// Noodle-----------------------------------------------------
import noodle1 from "./Noodle/noodle1.png";

// Shake------------------------------------------------------
import shake1 from "./Shake/shake1.png";

export const assets = {
  Logo,
  forgotpassword,
  homewallpaper,
  add,
  addfood,
  minusfood,
  cart,
  search,
  rating,
};

export const Menu_list = [
  {
    menu_name: "Pizza",
    menu_image: Pizza,
  },
  {
    menu_name: "Burger",
    menu_image: Burger,
  },
  {
    menu_name: "French_Fries",
    menu_image: FrenchFries,
  },
  {
    menu_name: "Noodles",
    menu_image: Noodles,
  },
  {
    menu_name: "Sandwich",
    menu_image: Sandwich,
  },
  {
    menu_name: "Shakes",
    menu_image: Shakes,
  },
  {
    menu_name: "Coffee",
    menu_image: Coffee,
  },
  {
    menu_name: "Specail_Menu",
    menu_image: Sandwich,
  },
  {
    menu_name: "Sandwich",
    menu_image: Sandwich,
  },
  {
    menu_name: "Sandwich",
    menu_image: Sandwich,
  },
  {
    menu_name: "Sandwich",
    menu_image: Sandwich,
  },
  {
    menu_name: "Sandwich",
    menu_image: Sandwich,
  },
  {
    menu_name: "Sandwich",
    menu_image: Sandwich,
  },
];

export const Food_list = [
  {
    id: "1",
    name: "Golden Corn Pizza",
    description: " Special Golden Corn Topping ",
    price: "79",
    category: "Pizza",
    image: GoldenCorn,
  },

  {
    id: "2",
    name: "  Tomato Pizza",
    description: "Fresh Tomato With Delicious taste",
    price: "79",
    category: "Pizza",
    image: Tomato,
  },

  {
    id: "3",
    name: "Onion Pizza ",
    description: "Fresh And Juicy Onion",
    price: "79",
    image: Onion,
    category: "Pizza",
  },

  {
    id: "4",
    name: "Capsicum Pizza ",
    description: "Fresh Capsicum",
    price: "79",
    category: "Pizza",
    image: CapcicumPizza,
  },

  {
    id: "5",
    name: "Onion & Paneer Pizza",
    description: "Topping Of Onion & Paneer ",
    price: "99",
    category: "Pizza",
    image: onionPaneer,
  },

  {
    id: "6",
    name: "Capsicum & Mushroom Pizza",
    description: " Fresh Capsicum & Juicy Mushroom ",
    price: "99",
    category: "Pizza",
    image: CapcicumMashroom,
  },

  {
    id: "7",
    name: "Cheese N Corn",
    description: "Sweet And Juicy Corn",
    varient: ["Regular", "Medium", "Large"],
    price: [
      {
        Regular: 119,
        Medium: 209,
        Large: 349,
      },
    ],
    category: "Pizza",
    image: CheeseNcorn,
  },

  {
    id: "8",
    name: "Margherita Pizza ",
    description: "Simple But Chessy",
    varient: ["Regular", "Medium", "Large"],
    price: [
      {
        Regular: 119,
        Medium: 209,
        Large: 349,
      },
    ],
    category: "Pizza",
    image: Magherita,
  },

  {
    id: "9",
    name: "Cheese Blazing Onion & Paprika ",
    description: "Onion,Red Peprika, Spicy Peri Sauce & Cheese",
    varient: ["Regular", "Medium", "Large"],
    price: [
      {
        Regular: 149,
        Medium: 289,
        Large: 399,
      },
    ],
    category: "Pizza",
    image: BlazingOnionPaprika,
  },

  {
    id: "10",
    name: "Farmhouse Pizza",
    description: "Onion, Tomato , Capsicum & Mushroom",
    varient: ["Regular", "Medium", "Large"],
    price: [
      {
        Regular: 159,
        Medium: 319,
        Large: 509,
      },
    ],
    category: "Pizza",
    image: Formhouse,
  },

  {
    id: "11",
    name: "Veggie Paradise",
    description: "Golden Corn, Black Olives , Capsicum & Red Paprika",
    varient: ["Regular", "Medium", "Large"],
    price: [
      {
        Regular: 159,
        Medium: 319,
        Large: 509,
      },
    ],
    category: "Pizza",
    image: VeggieParadise,
  },

  {
    id: "12",
    name: "Veg Extravaganza ",
    description:
      "Black olives, capsicum, onion, grilled mushroom,corn, tomato, jalapeno & extra cheese",
    varient: ["Regular", "Medium", "Large"],
    price: [
      {
        Regular: 219,
        Medium: 379,
        Large: 549,
      },
    ],
    category: "Pizza",
    image: VegExtravaganza,
  },

  {
    id: "13",
    name: "Indi Tandoori Paneer ",
    description:
      "It is hot. It is spicy. It is oh-so-Indian. Tandooripaneer with capsicum, red paprika & mint mayo",
    varient: ["Regular", "Medium", "Large"],
    price: [
      {
        Regular: 179,
        Medium: 359,
        Large: 519,
      },
    ],
    category: "Pizza",
    image: IndiTandooriPaneer,
  },

  {
    id: "14",
    name: "The Sassy Special Pizza",
    description: "Something Different",
    varient: ["Regular", "Medium", "Large"],
    price: [
      {
        Regular: 259,
        Medium: 459,
        Large: 649,
      },
    ],
    category: "Pizza",
    image: "",
  },
  {
    id: "15",
    name: "Aloo Tikki Burger",
    description: "Filled With Tikki Made With Potato and Veggies",
    price: "50",
    category: "Burger",
    image: AlooTikki,
  },
  {
    id: "16",
    name: "Double Aloo Tikki Burger",
    description: "Filled Two Tikki Made with Potato and Veggies",
    price: "80",
    category: "Burger",
    image: DoublePattyBurger,
  },
  {
    id: "17",
    name: "Chesse Burger",
    description: "Filled Two Tikki Made with Potato and Veggies",
    price: "80",
    category: "Burger",
    image: ChesseBurger,
  },
  {
    id: "17",
    name: "",
    description: "",
    price: "",
    category: "Shakes",
    image: shake1,
  },
  {
    id: "18",
    name: "",
    description: "",
    price: "",
    category: "Coffee",
    image: justcoffee,
  },
  {
    id: "19",
    name: "",
    description: "",
    price: "",
    category: "Noodles",
    image: noodle1,
  },
  {
    id: "20",
    name: "",
    description: "",
    price: "",
    category: "Sandwich",
    image: sandwich1,
  },
];