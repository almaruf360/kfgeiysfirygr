import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const data = [
  { name: 'A1', value: 57 },
  { name: 'A2', value: 58 },
  { name: 'A3', value: 53 },
  { name: 'A4', value: 59 },
  { name: 'A5', value: 47 },
  { name: 'A6', value: 30 },
  { name: 'A7', value: 59 },
  { name: 'A8', value: 36 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF66CC', '#993399', '#6699CC', '#FFCC33'];


const Statistics = () => {
    return (
        
            <div>
                <Navbar></Navbar>
                 <div  className='grid grid-cols-1 justify-items-center'>
                 <h1 className="text-4xl  text-black font-extrabold pt-8 text-center ">
        Assignment Marks Statistics
      </h1>
<PieChart width={400} height={500} className='mx-auto'>
                
                <Pie
                 data={data}
                 dataKey="value"
                 nameKey="name"
                 cx="50%"
                 cy="50%"
                 outerRadius={150}
                 fill="#8884d8"
                 label
               >
                 {data.map((entry, index) => (
                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry.name} />
                 ))}
               </Pie>
               <Tooltip formatter={(value, name) => [value, name]} />
             </PieChart>
                 </div>
             <Footer></Footer>
            </div>
       
    );
};

export default Statistics;