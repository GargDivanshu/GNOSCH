import logo from './images/farmfood.jpg';
import './App.css';
import Header from './components/Header';
import MyApp from './components/Table'
import { useState } from 'react';
import NONE from './images/NONE.jpeg'
import{ motion }from "framer-motion";
import { NavVariants, TextContainer } from './utils/Motion';
import {MdProductionQuantityLimits} from 'react-icons/md'
import { products } from './products';
import IRAN from './images/iran.png'



function App() {

  

 

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

  const Brands = [
    {
      name: "AKADIA"
    },
    {
      name: "CANZONA"
    },
    {
      name: "COLLA S.P.A."
    },
    {
      name: "DAILY DAIRY"
    },
    {
      name: "DAIRY LAND"
    },
    {
      name: "JOSEPH HELER"
    },
    {
      name: "MONTE CHRISTO"
    },
    {
      name: "PAYSAN BRETON"
    },
    {
      name: "TAVERNA"
    },
    {
      name: "COLLA"
    },
    {
      name: "QUESOS EL PASTOR"
    },
    {
      name: "PAYSAN BRETON"
    },
    {
      name: "BISHOP CROPWELL"
    },
    {
      name: "GNOSCH"
    },
    {
      name: "MASTER MARTINI"
    },
  ]
const [brand, setBrand] = useState("");
const [country, setCountry] = useState("");

const [searchText, setSearchText] = useState('');

console.log("voountru + " + country)

function clearFilter() {
  setBrand("")
  setCountry("")
}
// async function handleSearch(e) {
//  setSearchText(e.target.value);
// }
  
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
    <div className="App ">
      <Header 
      className="z-100"
      myBrand={brand} setMyBrand={setBrand}
      myCountry={country} setMyCountry={setCountry}
      inputValue={searchText} handleSearchNote={setSearchText}/>

      <div 
      className={`w-full h-[350px] bg-center bg-cover bg-[url('./images/FARM.jpg')] bg-no-repeat`}>

</div>

<div className="grid sm:grid-cols-2 grid-cols-1 lg:w-3/5 md:w-3/5  sm:w-4/5 mx-auto">

      </div>
      
     
       <div className={`text-xs font-bold uppercase my-2 ${(country === "" && brand==="") ? "hidden" : null}`}>
        <span className="text-lg">Applied Filters</span>
        
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-3/5 mx-auto">
          <div className={`my-3 ${(country === "" && country==="") ? "hidden" : null}`}>
            Origin: <span className="p-1 bg-gray-200 border border-gray-400 rounded-md"
            >{country}</span>
          </div>
          <div className={`my-3 ${(brand === "" && brand==="") ? "hidden" : null}`}>
            Brand: <span className="p-1 bg-gray-200 border border-gray-400 rounded-md"
            >{brand}</span>
          </div>
          </div>
          <button 
          onClick={clearFilter}
          className="p-1 bg-gray-300 hover:bg-gray-400 border border-gray-500 rounded-lg">Clear Filter</button>
        
       </div>
      {/* <MyApp/> */}


<div className="flex flex-col ">

<span className="text-3xl font-bold capitalize  my-3 text-orange">OUR PRODUCTS</span> 

{/* <div

 className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 m-3 gap-6 mx-auto w-4/5 p-2">
{
  products.filter((item) => item.Title.toLowerCase().includes(searchText.toLowerCase())
      ).filter(
    function MyFil(item) {
      if(country === "NONE" || country === ""){
        return products;
      }
     if((country !== "NONE") && item.Place === country) {
      return item;
     } 
    }
  ).filter(
    function MyFil(item) {
      if(brand === "NONE" || brand === ""){
        return products;
      }
     if((brand !== "NONE") && item.Brand === brand) {
      return item;
     } 
    }
  ).map((item)=> 
  (
    <div class="container">

       

<div class="card">

    <div class="slide slide1">

        <div class="content">

            <img src={item.img} className="object-contain " class="icon"/>

                {/* <i class="fa fa-user-circle" aria-hidden="true"></i> 

        </div>

    </div>

    <div class="slide slide2">

        <div class="content">

        <div className="flex flex-col m-3 ">
      {/* <img src={item.img} alt={item.alt} className="object-contain h-[125px]"/> 
      <div className="h-[25px] font-bold px-2 text-white bg-orange rounded-2xl my-1"> {item.Title} </div>
      <div className="h-[25px] text-sm italic text-center my-1 text-gray-500"> {item.Brand} </div>
    
    <div className="flex flex-row justify-between">
      <div className="h-[25px] text-sm text-left my-1 text-gray-500"> {item.Place} </div>
      <img
        src={`${(item.Place === "FRANCE") ? "https://th.bing.com/th/id/OIP.RPP275EzjhW01m70KN3J_AHaFj?pid=ImgDet&rs=1" : 
        (item.Place === "DENMARK") ? "https://images5.alphacoders.com/102/thumb-1920-1025675.jpg" : 
        (item.Place === "SPAIN") ? "https://th.bing.com/th/id/OIP.xVDCnvjiX8mkOeOhWUqgzAHaD3?pid=ImgDet&rs=1" :
        (item.Place === "UNITED KINGDOM") ? "https://2.bp.blogspot.com/-8A3QVbtpV_E/UPJ_z_9ItlI/AAAAAAAAFSE/zqzWc_DGS9I/s1600/Britain+flag+hd+wallpapers.jpg" : 
        (item.Place === "NETHERLANDS") ? "https://th.bing.com/th/id/R.7ca788dcce497a591283d8aa88034272?rik=RnFW3NN%2fVY1wfg&riu=http%3a%2f%2fwww.printableflags.net%2fwp-content%2fuploads%2f2017%2f04%2fflag-netherlands-netherlands-large-flag-eZQEtX.jpg&ehk=yktkqY1mKH2jKQ6L%2fAdQij5pkAHOPlMxbk46U2YsngY%3d&risl=&pid=ImgRaw&r=0" : 
        (item.Place === "ITALY") ? "https://www.shutterstock.com/image-illustration/italian-flag-italy-vignetted-260nw-157513982.jpg" : 
        (item.Place === "GREECE") ? "https://th.bing.com/th/id/OIP.NpYvSPDlxiZI1Lte4bM1UQHaEo?pid=ImgDet&rs=1" : null}`} className="rounded-full h-[25px] w-[25px] " alt="."
      />
      </div>
     
    </div>

        </div>

    </div>

</div>



</div>
  ))
  }
  </div> */}


<div

 className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 m-3 gap-6 mx-auto w-4/5 p-2">
{
  products.filter((item) => item.Title.toLowerCase().includes(searchText.toLowerCase())
      ).filter(
    function MyFil(item) {
      if(country === "NONE" || country === ""){
        return products;
      }
     if((country !== "NONE") && item.Place === country) {
      return item;
     } 
    }
  ).filter(
    function MyFil(item) {
      if(brand === "NONE" || brand === ""){
        return products;
      }
     if((brand !== "NONE") && item.Brand === brand) {
      return item;
     } 
    }
  ).map(
    (item) => (
      <motion.div
       variants={TextContainer}
            whileInView="show"
            viewport={{ once: false, amount: 0.75 }}
      
      className="hover:shadow-2xl shadow-xl shadow-slate-200 hover:shadow-slate-300 m-2 rounded-md">
      <div className="flex flex-col m-3 ">
        <div className='relative'>
      <img src={item.img} alt={item.alt} className=" object-contain "/>
      
      <div className="  bg-orange text-sm rounded-lg text-white text-center absolute py-1 px-2 bottom-2 left-2 w-fit"> {item.Brand} </div>
      </div>
      <div className="text-left font-bold text-xl text-black my-1"> {item.Title} </div>
    <div className="flex flex-row justify-between items-center">
      <div>
      <div className=" text-sm text-left my-1 text-gray-500"> Origin : {item.Place} </div>
      
      
      {(item.Qt) ? <div className="flex flex-row justify-between">
      <div className=" text-sm text-left text-gray-500"> Package Size: {item.Qt} </div>
      {/* <MdProductionQuantityLimits 
      className="text-gray-500"
      fontSize={20}/> */}
      </div> : null}
      </div>
      <img
        src={`${(item.Place === "FRANCE") ? "https://th.bing.com/th/id/OIP.RPP275EzjhW01m70KN3J_AHaFj?pid=ImgDet&rs=1" : 
        (item.Place === "DENMARK") ? "https://images5.alphacoders.com/102/thumb-1920-1025675.jpg" : 
        (item.Place === "SPAIN") ? "https://th.bing.com/th/id/OIP.xVDCnvjiX8mkOeOhWUqgzAHaD3?pid=ImgDet&rs=1" :
        (item.Place === "UNITED KINGDOM") ? "https://2.bp.blogspot.com/-8A3QVbtpV_E/UPJ_z_9ItlI/AAAAAAAAFSE/zqzWc_DGS9I/s1600/Britain+flag+hd+wallpapers.jpg" : 
        (item.Place === "NETHERLANDS") ? "https://th.bing.com/th/id/R.7ca788dcce497a591283d8aa88034272?rik=RnFW3NN%2fVY1wfg&riu=http%3a%2f%2fwww.printableflags.net%2fwp-content%2fuploads%2f2017%2f04%2fflag-netherlands-netherlands-large-flag-eZQEtX.jpg&ehk=yktkqY1mKH2jKQ6L%2fAdQij5pkAHOPlMxbk46U2YsngY%3d&risl=&pid=ImgRaw&r=0" : 
        (item.Place === "ITALY") ? "https://www.shutterstock.com/image-illustration/italian-flag-italy-vignetted-260nw-157513982.jpg" : 
        (item.Place === "GREECE") ? "https://th.bing.com/th/id/OIP.NpYvSPDlxiZI1Lte4bM1UQHaEo?pid=ImgDet&rs=1" : 
        (item.Place === "IRAN") ? "https://images2.alphacoders.com/978/978784.jpg" : null}`} className="rounded-full h-[25px] w-[25px] " alt="."
      />
      </div>
     
    </div>
    </motion.div>
    )
  )
}

</div>










<div className="grid lg:grid-cols-3 gap-6 mx-auto w-4/5 md:grid-cols-3 sm:grid-cols-1 m-3 p-2 justify-around">
{
  choco.filter((item) => item.Title.toLowerCase().includes(searchText.toLowerCase())
      ).filter(
    function MyFil(item) {
      if(brand === "NONE" || brand === ""){
        return products;
      }
     if((brand !== "NONE") && item.Brand === brand) {
      return item;
     } 
    }
  ).filter(
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
            whileInView="show"
            viewport={{ once: false, amount: 0.75 }}
      
      className="hover:shadow-2xl shadow-xl shadow-slate-200 hover:shadow-slate-300 m-2 rounded-md">
      <div className="flex flex-col m-3 ">
        <div className='relative'>
      <img src={item.img} alt={item.alt} className=" object-contain "/>
      <div className="text-left font-bold text-xl text-black my-1"> {item.Title} </div>
      <div className="  bg-orange text-sm rounded-lg text-white text-center absolute py-1 px-2 bottom-[74px] left-2 w-fit"> {item.Brand} </div>
      </div>
    <div className="flex flex-row justify-between items-center">
      <div>
      <div className=" text-sm text-left my-1 text-gray-500"> Origin : {item.Place} </div>
      
      
      {(item.Qt) ? <div className="flex flex-row justify-between">
      <div className=" text-sm text-left text-gray-500"> Package Size: {item.Qt} </div>
      {/* <MdProductionQuantityLimits 
      className="text-gray-500"
      fontSize={20}/> */}
      </div> : null}
      </div>
      <img
        src={`${(item.Place === "FRANCE") ? "https://th.bing.com/th/id/OIP.RPP275EzjhW01m70KN3J_AHaFj?pid=ImgDet&rs=1" : 
        (item.Place === "DENMARK") ? "https://images5.alphacoders.com/102/thumb-1920-1025675.jpg" : 
        (item.Place === "SPAIN") ? "https://th.bing.com/th/id/OIP.xVDCnvjiX8mkOeOhWUqgzAHaD3?pid=ImgDet&rs=1" :
        (item.Place === "UNITED KINGDOM") ? "https://2.bp.blogspot.com/-8A3QVbtpV_E/UPJ_z_9ItlI/AAAAAAAAFSE/zqzWc_DGS9I/s1600/Britain+flag+hd+wallpapers.jpg" : 
        (item.Place === "NETHERLANDS") ? "https://th.bing.com/th/id/R.7ca788dcce497a591283d8aa88034272?rik=RnFW3NN%2fVY1wfg&riu=http%3a%2f%2fwww.printableflags.net%2fwp-content%2fuploads%2f2017%2f04%2fflag-netherlands-netherlands-large-flag-eZQEtX.jpg&ehk=yktkqY1mKH2jKQ6L%2fAdQij5pkAHOPlMxbk46U2YsngY%3d&risl=&pid=ImgRaw&r=0" : 
        (item.Place === "ITALY") ? "https://www.shutterstock.com/image-illustration/italian-flag-italy-vignetted-260nw-157513982.jpg" : 
        (item.Place === "GREECE") ? "https://th.bing.com/th/id/OIP.NpYvSPDlxiZI1Lte4bM1UQHaEo?pid=ImgDet&rs=1" :
        (item.Place === "IRAN") ? "https://images2.alphacoders.com/978/978784.jpg" : null}`} className="rounded-full h-[25px] w-[25px] " alt="."
      />
      </div>
     
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
