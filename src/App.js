import { useState,useEffect } from "react";
import Planner from "./component/planner.component";
import Table from "./component/table";



function App() {

  const [dates, setDates] = useState(null);
  const [sql, setSql] = useState([]);
  


  const populateDates = () => {
    const initDates = [];
    for (let i = 0; i < 15; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const fullDate = `${day} / ${month} / ${year}`;
      const planner = {
        date: fullDate,
        slots: [
          {
            id: 1,
            name: "slot 1",
          },
          {
            id: 2,
            name: "slot 2",
          },
          {
            id: 3,
            name: "slot 3",
          },
          {
            id: 4,
            name: "slot 4",
          },
        ],
      };

      initDates.push(planner);
    }
    setDates(initDates);
  };

  useEffect(() => {
    populateDates();
    // eslint-disable-next-line
  }, []);

  
  const customer = [
    { 
        customerId:1,
        customerName:"John",
        customerLocation:"Lagos",
        dropOffLocation:"Anambra"
    },
    { 
        customerId:2,
        customerName:"Mary",
        customerLocation:"Lagos",
        dropOffLocation:"Ibadan"
    },
    { 
        customerId:3,
        customerName:"Peter",
        customerLocation:"Abuja",
        dropOffLocation:"Lagos"
    },
    { 
        customerId:4,
        customerName:"Paul",
        customerLocation:"Warri",
        dropOffLocation:"Jos"
    },
    { 
        customerId:5,
        customerName:"Alexes",
        customerLocation:"Osun",
        dropOffLocation:"Lagos"
    },
]



    const [table] = useState(customer)

    const dragStart = (e, id) => {
      console.log("started");
        e.dataTransfer.clearData();
        e.dataTransfer.setData("tableId", id)
      };

    const onDragOver = (e)=>{
      e.preventDefault();
      console.log("dragover");
    }

    const onDragDrop = (e,index,indexTwo)=> {
      console.log("u have droped");
      e.preventDefault();
      let transferTableId = e.dataTransfer.getData("tableId")
      const find = customer.find(e=> e.customerId === +transferTableId)
      console.log(find,"hhh");
      let newDate = [...dates][index].slots[indexTwo]
      newDate.customers = find
      const rios = dates.map(e=> e.slotsindexTwo !== newDate.id ? e : newDate) 
      setDates(rios);
      setSql([...sql,{date:[...dates][index].date,slot:[...dates][index].slots[indexTwo]}])
      console.log(sql);
    }



  return (
   
     <div className="grid grid-cols-2 gap-4">
      <div>
        <Table table={table} dragStart={dragStart}/>
      </div>
      <div  className="h-[35rem] overflow-scroll">
          <Planner table={table} dragStart={dragStart}  onDragOver={onDragOver} onDragDrop={onDragDrop} dates={dates}/>
      </div>
    </div>
  
  );
}

export default App;
