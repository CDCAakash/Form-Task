import { useState } from "react";
import Navbar from "./components/Navbar";
import ContactInfo from "./components/ContactInfo";
import OtherDetails from "./components/OtherDetails";
import EventDetails from "./components/EventDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="flex ">

    <div className="flex-col" >
    <ContactInfo />
      <EventDetails />
    </div>

    <div className="w-[200%] flex-initial " >
      
    <OtherDetails />
    </div>
   
      </div>
      <Footer />
    </>
  );
}

export default App;
