
const Planner = ({onDragOver,dates, onDragDrop}) => {
 

  return (
    dates &&
    dates.map((date, index) => (
      <div className="flex items-center flex-col mt-[2rem] py-1 border shadow-lg" key={index}>
        <h1 className="bg-gray-500 w-full text-center ">{date.date}</h1>
        {date &&
          date.slots.map((slot, indexTwo) => (
            <div dropable="true" className="w-full" onDragOver={e=> onDragOver(e)} onDrop={e=>onDragDrop(e,index,indexTwo)}  key={indexTwo}>
              <div className=" border shadow-lg ">
              <h3 className="text-center hover:bg-gray-800">{slot.name}</h3>
              <div className="flex flex-col justify-start w-full">
                <p className="py-2">Customer Name: <span className="pl-5">{slot.customers && slot.customers.customerName}</span></p>
                <p className="py-2">Customer Location: <span className="pl-5">{slot.customers && slot.customers.customerLocation}</span></p>
                <p className="py-2">DropOff Location: <span className="pl-5">{slot.customers && slot.customers.dropOffLocation}</span></p>
              </div>
              </div>
            </div>
          ))}
      </div>
    ))
    // <ul >
    //     {slot.map((e,index)=>{
    //         return <li dropable="true" onDragOver={e=> onDragOver(e)} onDrop={e=>onDragDrop(e)} className="flex items-center flex-col mt-[2rem] py-1 border shadow-lg"  key={index}>{e.name}</li>
    //     })}
    // </ul>
   
  );
};

export default Planner;

