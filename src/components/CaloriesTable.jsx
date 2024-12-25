// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function CaloriesTable() {
//   const [data, setData] = useState([]);
//   const {type} = useParams();
//   // const pathForFood = '../../public/groceries_data/' + type + '.json'
//   // // console.log(JSON.stringify(foodd, null, 2))
//   // useEffect(() => {
//   //   fetch(pathForFood)
//   //     .then(response => response.json())
//   //     .then(data => setData(data))
//   //     .catch(error => console.error('Error fetching the data:', error));
//   // }, [type]);
//   const [foods, setFoods] = useState([]);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/food');
//             setFoods(response.data);
//         } catch (error) {
//             console.error('Error fetching food data: ', error);
//         }
//     };

//     useEffect(()=>{
//         fetchData();
//     }, [type]);
//     // const filterFoodsByType = (type) => foods.filter((food) => food.type === type);

//     // const categories = ['Mlečni proizvod', 'Jaja', 'Meso', 'Povrće', 'Voće'];
//     const filterFoodsByType = (type) => {
//       return foods.filter((food) => food.type === type);
//     };
  
//     const filteredFoods = filterFoodsByType(type);

    
//   return (
//     <div>
//       <h2>Calories Table</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Namirnica (100 g)</th>
//             <th>kCal</th>
//             <th>Proteini</th>
//             <th>Ugljeni Hidrati</th>
//             <th>Masti</th>
//             <th>Vrsta</th>
//             <th>Makronutrijent</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredFoods.map((item, index) => (
//             <tr key={index}>
//               <td>{item.name}</td>
//               <td>{item.calories}</td>
//               <td>{item.protein}</td>
//               <td>{item.carbohydrates}</td>
//               <td>{item.fats}</td>
//               <td>{item.type}</td>
//               <td>{item.macronutrient}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CaloriesTable() {
  const [data, setData] = useState([]);
  const { type } = useParams();
  const [foods, setFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/food');
      setFoods(response.data);
    } catch (error) {
      console.error('Error fetching food data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  const filterFoodsByType = (type) => {
    return foods.filter((food) => food.type === type);
  };

  const filteredFoods = filterFoodsByType(type);

  // Filter the foods by search query
  const searchedFoods = filteredFoods.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedFoods.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(searchedFoods.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Tabela Kalorija</h2>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pretraga namirnica..."
            className=" p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Scrollable container */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 bg-gray-200">Namirnica (100 g)</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 bg-gray-200">kCal</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 bg-gray-200">Proteini</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 bg-gray-200">Ugljeni Hidrati</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 bg-gray-200">Masti</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 bg-gray-200">Vrsta</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 bg-gray-200">Makronutrijent</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700">{item.name}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{item.calories}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{item.protein}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{item.carbohydrates}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{item.fats}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{item.type}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{item.macronutrient}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaloriesTable;
