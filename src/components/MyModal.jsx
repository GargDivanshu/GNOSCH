import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {FiFilter} from 'react-icons/fi'
import products  from './../App';
import {RxCross1} from 'react-icons/rx'
import {IoMdDoneAll} from 'react-icons/io'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

export default function MyModal({setMyCountry, myCountry, myBrand, setMyBrand}) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function allFilter() {
    const countryFilter = (country) => {
      if(country !== "NONE"){
        return products;
      }  
      if(products.Place === country) {
         return products;
      }  
    }
  }

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

  function clearFilter() {
    setMyBrand("")
    setMyCountry("")
  }

  return (
    <div className="my-auto align-middle">
      
      <div className="flex flex-row text-sm font-bold align-middle my-auto mx-1 px-2">
      <span className="mx-1 my-auto"
      >Filter</span>
      <FiFilter
      fontSize={30}
      className="shadow-md border p-1 rounded-md cursor-pointer my-auto border-gray-500"
       onClick={openModal}/>
       </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

<div className=" mr-0">
<RxCross1 onClick={closeModal}
className="mr-0 text-xl"
/>
</div>

      <div className="  align-middle my-auto   font-semibold text-sm p-1 rounded-sm justify-evenly"
      onChange={allFilter}
      >
        Country
        
        <select 
        className=" bg-gray-100 border-gray-300 border-[1px] rounded-sm py-2 px-3 mx-2 justify-end align-middle"
        value={myCountry}
        onChange={(e) => {
          setMyCountry(e.target.value);
          console.log(myCountry);
        }}>

          <option className="p-2 bg-gray-100 hover:bg-gray-400" value="NONE">NONE</option>

          <option className="p-2 bg-gray-100 hover:bg-gray-400" value="DENMARK">DENMARK</option>

          <option className="p-2 bg-gray-100 hover:bg-gray-400" value="FRANCE">FRANCE</option>

          <option className="p-2 bg-gray-100 hover:bg-gray-400" value="GREECE">GREECE</option>

          <option className="p-2 bg-gray-100 hover:bg-gray-400" value="SPAIN">SPAIN</option>

          <option className="p-2 bg-gray-100 hover:bg-gray-400" value="UNITED KINGDOM">UK</option>

          <option className="p-2 bg-gray-100 hover:bg-gray-400" value="IRAN">IRAN</option>

          <option className="p-2 bg-gray-100 hover:bg-gray-400" value="ITALY">ITALY</option>

          <option className="p-2 bg-gray-100 hover:bg-gray-400" value="MALAYSIA">MALAYSIA</option>

          <option className="p-2 bg-gray-100 hover:bg-gray-400" value="NETHERLANDS">NETHERLANDS</option>
        </select>
      </div>


      <div className="align-middle my-auto font-semibold text-sm p-1 rounded-sm justify-evenly"
      onChange={allFilter}
      >
        Brand
        
        <select 
        className=" bg-gray-100 border-gray-300 border-[1px] rounded-sm py-2 px-3 mx-2 justify-end align-middle"
        value={myBrand}
        onChange={(e) => {
          setMyBrand(e.target.value);
          console.log(myBrand);
        }}>

          <option className="p-2 bg-gray-100 hover:bg-gray-400" value="NONE">NONE</option>

          {
            Brands.map(
              (item) => (
                <option className="p-2 bg-gray-100 hover:bg-gray-400" value={item.name}>{item.name}</option>
              )
            )
          }

        </select>
      </div>

<div className="flex">
      <button 
      onClick={clearFilter}
      className="mx-auto flex cursor-pointer my-2 shadow-lg p-2 rounded-xl border border-red-500 bg-red-200">
        <RxCross1
          fontSize={25}
        className="text-red-500 mx-2"
        /> Clear Filter
      </button>

      <button 
      onClick={clearFilter}
      className="mx-auto flex align-middle cursor-pointer my-2 shadow-lg p-2 rounded-xl border border-green-500 bg-green-200">
       <IoMdDoneAll
       onClick={closeModal}
       fontSize={25}
        className="text-green-500 mx-2"
       /> Done
      </button>
</div>

        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        
      </Modal>
    </div>
  );
}

// ReactDOM.render(<MyModal />);