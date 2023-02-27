import logo from './logo.svg';
import logo1 from './logo-1.jpg';
import './App.css';
import Header from './components/Header';
import MyApp from './components/Table'
import { useState } from 'react';
import NONE from './images/NONE.jpeg'
import{ motion }from "framer-motion";
import { NavVariants, TextContainer } from './utils/Motion';


function App() {

  const products = [
    {img: `${logo}`, 
     Title: "CHEDDAR – COLOURED", 
     Place: "UNITED KINGDOM",
     Brand: "JOSEPH HELER"
    },
    {img: `${logo}`, 
     Title: "CHEDDAR – MILD/WHITE", 
     Place: "UNITED KINGDOM",
     Brand: "JOSEPH HELER"
    },
    {img: `${logo}`, 
     Title: "VINTAGE CHEDDAR", 
     Place: "UNITED KINGDOM",
     Brand: "JOSEPH HELER"
    },
    {img: `${logo}`, 
     Title: "DOUBLE GLOUCESTER", 
     Place: "UNITED KINGDOM",
     Brand: "JOSEPH HELER"
    },
    {img: `${logo}`, 
     Title: "MATURED CHEDDAR - RED", 
     Place: "UNITED KINGDOM",
     Brand: "JOSEPH HELER"
    },
    {img: `${logo}`, 
     Title: "MATURED CHEDDAR - WHITE", 
     Place: "UNITED KINGDOM",
     Brand: "JOSEPH HELER"
    },
    {img: `${logo}`, 
     Title: "RED LEICESTER", 
     Place: "UNITED KINGDOM",
     Brand: "JOSEPH HELER"
    },
    {img: `${logo}`, 
     Title: "MILD CHEDDAR", 
     Place: "UNITED KINGDOM",
     Brand: "MONTE CHRISTO"
    },
    {img: `${logo}`, 
     Title: "MILD COLOURED CHEDDAR", 
     Place: "UNITED KINGDOM",
     Brand: "MONTE CHRISTO"
    },
    {img: `${logo}`, 
    alt: "dwv", 
    Title: "VINTAGE CHEDDAR", 
    Place: "UNITED KINGDOM",
    Brand: "MONTE CHRISTO"
   },
   {img: `${logo}`, 
     Title: "DOUBLE GLOUCESTER", 
     Place: "UNITED KINGDOM",
     Brand: "MONTE CHRISTO"
    },
    {img: `${logo}`, 
     Title: "RED LEICESTER", 
     Place: "UNITED KINGDOM",
     Brand: "MONTE CHRISTO"
    },
    {img: `${logo}`, 
     Title: "CHESIRE CHEESE", 
     Place: "UNITED KINGDOM",
     Brand: "MONTE CHRISTO"
    },
    {img: `${logo}`, 
    alt: "dwv", 
    Title: "BRIE", 
    Place: "FRANCE",
    Brand: "PAYSAN BRETON"
   },

   {img: `${logo}`, 
   alt: "dwv", 
   Title: "CAMEMBERT", 
   Place: "FRANCE",
   Brand: "PAYSAN BRETON"
  },
  {img: `${logo}`, 
  alt: "dwv", 
  Title: "EMMENTAL", 
  Place: "FRANCE",
  Brand: "PAYSAN BRETON"
 },

 {img: `${logo}`, 
  alt: "dwv", 
  Title: "EMMENTAL GRATED", 
  Place: "FRANCE",
  Brand: "PAYSAN BRETON"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "SPECIAL PIZZA CHEESE", 
  Place: "FRANCE",
  Brand: "PAYSAN BRETON"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "GOAT CHEESE – HERBS & GARLIC", 
  Place: "FRANCE",
  Brand: "PAYSAN BRETON"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "GOAT CHEESE – NATURAL", 
  Place: "FRANCE",
  Brand: "PAYSAN BRETON"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "GOAT CHEESE – PEPPER", 
  Place: "FRANCE",
  Brand: "PAYSAN BRETON"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "GOUDA WEDGE", 
  Place: "NETHERLANDS",
  Brand: "DAILY DAIRY"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "EDAM WEDGE", 
  Place: "NETHERLANDS",
  Brand: "DAILY DAIRY"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "SMOKED CHEESE – NATURAL", 
  Place: "NETHERLANDS",
  Brand: "DAILY DAIRY"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "SMOKED CHEESE – HERBS", 
  Place: "NETHERLANDS",
  Brand: "DAILY DAIRY"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "SMOKED CHEESE - CHILLIES", 
  Place: "NETHERLANDS",
  Brand: "DAILY DAIRY"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "SMOKED CHEESE – PEPPER", 
  Place: "NETHERLANDS",
  Brand: "DAILY DAIRY"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "MOZZARELLA SLICES", 
  Place: "NETHERLANDS",
  Brand: "DAILY DAIRY"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "EMMENTAL SLICES", 
  Place: "NETHERLANDS",
  Brand: "DAILY DAIRY"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "BLUE CHEESE", 
  Place: "DENMARK",
  Brand: "CANZONA"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "FETA – SALAD CHEESE", 
  Place: "DENMARK",
  Brand: "TAVERNA"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "SALAD CHEESE IN HERB OIL", 
  Place: "DENMARK",
  Brand: "TAVERNA"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "SALAD CHEESE WITH OLIVES", 
  Place: "DENMARK",
  Brand: "TAVERNA"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "SALAD CHEESE IN CHILI OIL", 
  Place: "DENMARK",
  Brand: "TAVERNA"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "GRAN FORMAGGIO", 
  Place: "ITLAY",
  Brand: "COLLA S.P.A."
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "FETA", 
  Place: "DENMARK",
  Brand: "AKADIA"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "DANISH BRIE", 
  Place: "DENMARK",
  Brand: "DAIRYLAND"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "DANISH CAMEMBERT", 
  Place: "DENMARK",
  Brand: "DAIRYLAND"
 },

 {img: `${logo}`, 
  alt: "dwv", 
  Title: "MILD CHEDDAR - COLOURED", 
  Place: "UNITED KINGDOM",
  Brand: "JOSEPH HELER"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "MILD CHEDDAR - WHITE", 
  Place: "UNITED KINGDOM",
  Brand: "JOSEPH HELER"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "MONTREY JACK", 
  Place: "UNITED KINGDOM",
  Brand: "JOSEPH HELER"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "MATURED CHEDDAR", 
  Place: "UNITED KINGDOM",
  Brand: "JOSEPH HELER"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "PARMESAN", 
  Place: "ITALY",
  Brand: "COLA"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "EDAM BALL", 
  Place: "NETHERLANDS",
  Brand: "DAIRY LAND"
 },

 {img: `${logo}`, 
  alt: "dwv", 
  Title: "GOUDA WHEEL", 
  Place: "NETHERLANDS",
  Brand: "DAIRY LAND"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "SMOKED CHEESE NATURAL LOG", 
  Place: "NETHERLANDS",
  Brand: "DAIRY LAND"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "SMOKED CHEESE HERBS LOG", 
  Place: "NETHERLANDS",
  Brand: "DAIRY LAND"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "SMOKED CHEESE CHILLIES LOG", 
  Place: "NETHERLANDS",
  Brand: "DAIRY LAND"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "SMOKED CHEESE BLACK PEPPER",
  Place: "NETHERLANDS",
  Brand: "DAIRY LAND"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "AMANTI – RED PESTO",
  Brand: "DAIRY LAND",
  Place: "NETHERLANDS"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "AMANTI – GREEN PESTO",
  Brand: "DAIRY LAND",
  Place: "NETHERLANDS"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "AMANTI TRUFFLE",
  Brand: "DAIRY LAND",
  Place: "NETHERLANDS"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "AMANTI MUSTARD",
  Brand: "DAIRY LAND",
  Place: "NETHERLANDS"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "AMANTI CUMIN",
  Brand: "DAIRY LAND",
  Place: "NETHERLANDS"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "AMANTI CHILLI",
  Brand: "DAIRY LAND",
  Place: "NETHERLANDS"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "AMANTI BLACK PEPPER",
  Brand: "DAIRY LAND",
  Place: "NETHERLANDS"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "GOAT CHEESE",
  Brand: "QUESOS EL PASTOR",
  Place: "SPAIN"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "GOAT CHEESE",
  Brand: "PAYSAN BRETON",
  Place: "FRANCE"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "GOAT CHEESE",
  Brand: "PAYSAN BRETON",
  Place: "FRANCE"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "FRENCH EMMENTEL",
  Brand: "PAYSAN BRETON",
  Place: "FRANCE"
 },

 {img: `${logo}`, 
  alt: "dwv", 
  Title: "BLUE CHEESE",
  Brand: "CANZONA",
  Place: "DENMARK"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "GREEK FETA",
  Brand: "TAVERNA",
  Place: "GREECE"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "FRESH BRIE",
  Brand: "PAYSAN BRETON",
  Place: "FRANCE"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "STILTON",
  Brand: "BISHOP CROPWELL",
  Place: "UNITED KINGDOM"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "PECORINO",
  Brand: "COLLA SPA",
  Place: "ITALY"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "PROVOLONE",
  Brand: "COLLA SPA",
  Place: "ITALY"
 },
 {img: `${logo}`, 
  alt: "dwv", 
  Title: "RACLETTE",
  Brand: "PAYSAN BRETON",
  Place: "FRANCE"
 },
  {img: `${logo}`, 
  alt: "dwv", 
   Title: "OKAY ", 
   Place: "India",
  },

  ]

  const creams = [
    {img: `${logo}`, 
  alt: "dwv", 
   Title: "UHT WHIPPING CREAM", 
   Brand: "PAYSAN BRETON",
   Place: "FRANCE",
   Qt: "1L"
  },
  {img: `${logo}`, 
  alt: "dwv", 
   Title: "UHT COOKING CREAM", 
   Brand: "PAYSAN BRETON",
   Place: "FRANCE",
   Qt: "1L"
  },
  {img: `${logo}`, 
  alt: "dwv", 
   Title: "UHT WHIPPING CREAM", 
   Brand: "PAYSAN BRETON",
   Place: "FRANCE",
   Qt: "200 ML"
  },
  {img: `${logo}`, 
  alt: "dwv", 
   Title: "UHT COOKING CREAM", 
   Brand: "PAYSAN BRETON",
   Place: "FRANCE",
   Qt: "200 ML"
  },
  ]


  const butter = [
    {img: `${logo}`, 
  alt: "dwv", 
   Title: "TABLE BUTTER SALTED", 
   Brand: "PAYSAN BRETON",
   Place: "FRANCE",
   Qt: "200 GM"
  },
  {img: `${logo}`, 
  alt: "dwv", 
   Title: "TABLE BUTTER UNSALTED", 
   Brand: "PAYSAN BRETON",
   Place: "FRANCE",
   Qt: "200 GM"
  },
  {img: `${logo}`, 
  alt: "dwv", 
   Title: "BUTTER SHEET", 
   Brand: "PAYSAN BRETON",
   Place: "FRANCE",
   Qt: "2 KG"
  },
  {img: `${logo}`, 
  alt: "dwv", 
   Title: "BUTTER CHIPLETS SALTED(with sea salt)", 
   Brand: "PAYSAN BRETON",
   Place: "FRANCE",
   Qt: "10 GM"
  },
  {img: `${logo}`, 
  alt: "dwv", 
   Title: "BUTTER CHIPLETS SLIGHTLY SALTED", 
   Brand: "PAYSAN BRETON",
   Place: "FRANCE",
   Qt: "10 GM"
  },
  {img: `${logo}`, 
  alt: "dwv", 
   Title: "BUTTER CHIPLETS UNSALTED", 
   Brand: "PAYSAN BRETON",
   Place: "FRANCE",
   Qt: "10 MG"
  },
  {img: `${logo}`, 
  alt: "dwv", 
   Title: "BUTTER SALTED", 
   Brand: "PAYSAN BRETON",
   Place: "FRANCE",
   Qt: "500 GM"
  },
  {img: `${logo}`, 
  alt: "dwv", 
   Title: "BUTTER UNSALTED", 
   Brand: "PAYSAN BRETON",
   Place: "FRANCE",
   Qt: "500 GM"
  },
  ]

  const saffron = [
    {img: `${logo}`, 
  alt: "dwv", 
   Title: "SAFFRON", 
   Brand: "GNOSCH",
   Place: "IRAN",
   Qt: "1 GM"
  },
  ]

  const choco = [
    {img: `${logo}`, 
  alt: "dwv", 
   Title: "GOURMAND 32% MILK COUVERTURES", 
   Brand: "MASTER MARTINI",
   Place: "MALAYSIA",
   Qt: "10 KG BAG IN BOX"
  },
  {img: `${logo}`, 
  alt: "dwv", 
   Title: "GOURMAND 54% DARK COUVERTURES", 
   Brand: "MASTER MARTINI",
   Place: "MALAYSIA",
   Qt: "10 KG BAG IN BOX"
  },
  {img: `${logo}`, 
  alt: "dwv", 
   Title: "GOURMAND 60% DARK COUVERTURES", 
   Brand: "MASTER MARTINI",
   Place: "MALAYSIA",
   Qt: "10 KG BAG IN BOX"
  },
  {img: `${logo}`, 
  alt: "dwv", 
   Title: "GOURMAND 72% DARK COUVERTURES", 
   Brand: "MASTER MARTINI",
   Place: "MALAYSIA",
   Qt: "10 KG BAG IN BOX"
  },
  ]
const [brand, setBrand] = useState("NONE");
const [country, setCountry] = useState("NONE");
  
  const countryFilter = (country) => {
    if(country !== "NONE"){
      return products;
    }  
    if(products.Place === country) {
       return products;
    }  
  }


  const BrandFilter = (brand) => {
    if(brand !== "NONE"){
      products.filter(
        item => item.Brand === brand
      )
    }
  }
  const allFilter = (brand, country) => {
    countryFilter(country);
    // BrandFilter(brand);
  }
  console.log(country);
  return (
    <div className="App">
      <Header/>

      <div className={`w-full h-[350px] bg-center bg-cover bg-[url('./images/FARM.jpg')]`}>

</div>

<div className="grid sm:grid-cols-2 grid-cols-1 lg:w-3/5 md:w-3/5 sm:w-4/5 mx-auto">


      <div className="  align-middle my-auto font-semibold text-sm p-1 rounded-sm justify-evenly"
      onChange={allFilter}
      >
        Country
        
        <select 
        className=" bg-gray-200 border-gray-300 border-[1px] rounded-sm py-2 px-3 mx-2 justify-end align-middle"
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
          console.log(country);
        }}>

          <option className="p-2 bg-gray-100 hover:bg-gray-400" value="NONE">NONE</option>

          <option className="p-2 bg-gray-100 hover:bg-gray-400" value="DENMARK">DENMARK</option>

          <option className="p-2 bg-gray-100 hover:bg-gray-400" value="FRANCE">FRANCE</option>

          <option className="p-2 bg-gray-100 hover:bg-gray-400" value="SPAIN">SPAIN</option>

          <option className="p-2 bg-gray-100 hover:bg-gray-400" value="UNITED KINGDOM">UK</option>

          <option className="p-2 bg-gray-100 hover:bg-gray-400" value="IRAN">IRAN</option>

        </select>
      </div>


      <div className="font-semibold text-sm  "
      onChange={allFilter}
      >
        Select Country
        
        <select 
        className="bprder-2 bg-gray-200 rounded-lg p-2 py-1 m-2"
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
          console.log(country);
        }}>

          <option  value="NONE">NONE</option>

          <option  value="India">India</option>

          <option  value="Indonesia">Indonesia</option>

          <option  value="USA">USA</option>

          <option  value="UNITED KINGDOM">UK</option>

        </select>
      </div>

      </div>
      
      {/* <MyApp/> */}
<div className="flex flex-col ">

<span className="text-3xl font-bold capitalize  my-3 text-orange">OUR PRODUCTS</span> 


<div
       variants={TextContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}

 className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 m-3 p-2">
{
  products.filter(
    function MyFil(item) {
      if(country === "NONE" || country === ""){
        return products;
      }
     if((country !== "NONE") && item.Place === country) {
      return item;
     } 
    }
  ).map(
    (item) => (
      <motion.div
       variants={TextContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.75 }}
      
      className="hover:shadow-2xl">
      <div className="flex flex-col m-3 ">
      <img src={item.img} alt={item.alt} className="object-contain h-[125px]"/>
      <div className="h-[25px] font-semibold text-orange"> {item.Title} </div>
      <div className="h-[25px] text-sm italics"> {item.Brand} </div>
      <div className="h-[25px] text-sm"> {item.Place} </div>
     
    </div>
    </motion.div>
    )
  )
}

</div>
<div className="h-[50px] w-full bg-orange p-2 text-white text-center align-middle font-bold sm:text-2xl text-xl">
CREAMS
</div>

<div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 m-3 p-2">
{
  creams.filter(
    function MyFil(item) {
      if(country === "NONE" || country === ""){
        return products;
      }
     if((country !== "NONE") && item.Place === country) {
      return item;
     } 
    }
  ).map(
    (item) => (
      <motion.div
       variants={TextContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.75 }}
      
       className="hover:shadow-2xl">
      <div className="flex flex-col m-3 ">
      <img src={item.img} alt={item.alt} className="object-contain h-[125px]"/>
      <div className="h-[25px] font-semibold text-orange"> {item.Title} </div>
      <div className="h-[25px] text-sm italics"> {item.Brand} </div>
      <div className="h-[25px] text-sm"> {item.Place} </div>
      <div className="h-[25px] text-sm"> {item.Qt} </div>
    </div>
    </motion.div>
    )
  )
}

</div>
<div className="h-[50px] w-full bg-orange p-2 text-white text-center align-middle font-bold sm:text-2xl text-xl">
BUTTER
</div>

<div
     
 className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 m-3 p-2 justify-around">
{
  butter.filter(
    function MyFil(item) {
      if(country === "NONE" || country === ""){
        return products;
      }
     if((country !== "NONE") && item.Place === country) {
      return item;
     } 
    }
  ).map(
    (item) => (
      <motion.div
      variants={TextContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
       className="hover:shadow-2xl">
      <div className="flex flex-col m-3 ">
      <img src={item.img} alt={item.alt} className="object-contain min-h-fit"/>
      <div className="h-[25px] font-semibold text-orange "> {item.Title} </div>
      <div className="h-[25px] text-sm italics"> {item.Brand} </div>
      <div className="h-[25px] text-sm"> {item.Place} </div>
      <div className="h-[25px] text-sm"> {item.Qt} </div>
    </div>
    </motion.div>
    )
  )
}

</div>


<div className="h-[50px] w-full bg-orange p-2 text-white text-center align-middle font-bold sm:text-2xl text-xl">
SAFFRON
</div>

<div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 m-3 p-2 justify-around">
{
  saffron.filter(
    function MyFil(item) {
      if(country === "NONE" || country === ""){
        return products;
      }
     if((country !== "NONE") && item.Place === country) {
      return item;
     } 
    }
  ).map(
    (item) => (
      <motion.div
       variants={TextContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
       className="hover:shadow-2xl">
      <div className="flex flex-col m-3 ">
      <img src={item.img} alt={item.alt} className="object-contain h-[125px]"/>
      <div className="h-[25px] font-semibold text-orange"> {item.Title} </div>
      <div className="h-[25px] text-sm italics"> {item.Brand} </div>
      <div className="h-[25px] text-sm"> {item.Place} </div>
      <div className="h-[25px] text-sm"> {item.Qt} </div>
    </div>
    </motion.div>
    )
  )
}

</div>




<div className="h-[50px] w-full bg-orange p-2 text-white text-center align-middle font-bold sm:text-2xl text-xl">
CHOCOLATE FOR PROFESSIONALS
</div>

<div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 m-3 p-2 justify-around">
{
  choco.filter(
    function MyFil(item) {
      if(country === "NONE" || country === ""){
        return products;
      }
     if((country !== "NONE") && item.Place === country) {
      return item;
     } 
    }
  ).map(
    (item) => (
      <motion.div
       variants={TextContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
       className="hover:shadow-2xl">
      <div className="flex flex-col m-3 ">
      <img src={item.img} alt={item.alt} className="object-contain h-[125px]"/>
      <div className="h-[25px] font-semibold text-orange"> {item.Title} </div>
      <div className="h-[25px] text-sm italics"> {item.Brand} </div>
      <div className="h-[25px] text-sm"> {item.Place} </div>
      <div className="h-[25px] text-sm"> {item.Qt} </div>
    </div>
    </motion.div>
    )
  )
}

</div>


</div>
    </div>
  );
}

export default App;
