import React from 'react';
import "boxicons"

const obj = [
    {
        name: "Savings",
        color: "#f9c74f",

    },
    {
        name: "Invesment",
        color: "#f9c74f",

    },
    {
        name: "Expense",
        color: 'rgb(54,162,236)',

    },
]

const List = () => {
    return (
        <div className='flex flex-col py-6 gap-3'>
            <h1 className='py-4 text-md font-bold text-xl'>History</h1>
            {
                obj.map((v, i) => <Trasnsaction key={i} catagory={v} />)
            }
        </div>
    );
};


function Trasnsaction({ catagory }) {
    if (!catagory) return null
    return (
        <div className='item flex justify-center bg-gray-50 py-2 rounded-r ' style={{ borderRight: `8px solid ${catagory.color ?? "#e5e5e5"}` }}>
            <button className='px-3'><box-icon color={catagory.color ?? "#e5e5e5"} name="trash"></box-icon> </button>
            <span className='block w-full'>{catagory.name ?? ""} </span>
        </div>
    )
}
export default List;