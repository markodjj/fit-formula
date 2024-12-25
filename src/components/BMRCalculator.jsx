// import React, { useState } from 'react';

// function BMRCalculator() {
 
//   const [age, setAge] = useState('');
//   const [weight, setWeight] = useState('');
//   const [height, setHeight] = useState('');
//   const [gender, setGender] = useState('male');
//   const [bmr, setBmr] = useState(null);


//   const calculateBMR = (event) => {
//     event.preventDefault();

//     let calculatedBMR;
//     if (gender === 'male') {
//       calculatedBMR = 10 * weight + 6.25 * height - 5 * age + 5;
//     } else {
//       calculatedBMR = 10 * weight + 6.25 * height - 5 * age - 161;
//     }

//     setBmr(calculatedBMR);
//   };

  

//   return (
//     <div className='relative'>
//       <h2>BMR Calculator</h2>
//       <form onSubmit={calculateBMR}>
//         <div>
//           <label>Age:</label>
//           <input 
//             type="number" 
//             value={age} 
//             onChange={(e) => setAge(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Weight (kg):</label>
//           <input 
//             type="number" 
//             value={weight} 
//             onChange={(e) => setWeight(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Height (cm):</label>
//           <input 
//             type="number" 
//             value={height} 
//             onChange={(e) => setHeight(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label>Gender:</label>
//           <select 
//             value={gender} 
//             onChange={(e) => setGender(e.target.value)}
//           >
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>
//         <button type="submit">Calculate BMR</button>
//       </form>

//       {bmr && (
//         <div>
//           <h3>Your BMR is: {bmr.toFixed(2)} calories/day</h3>
//         </div>
//       )}
//     </div>
//   );
// }

// export default BMRCalculator;
import React, { useState } from 'react';

function BMRCalculator() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [bmr, setBmr] = useState(null);

  const calculateBMR = (event) => {
    event.preventDefault();

    let calculatedBMR;
    if (gender === 'male') {
      calculatedBMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      calculatedBMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    setBmr(calculatedBMR);
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">BMR Kalkulator</h2>
        <form onSubmit={calculateBMR} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Pol *</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="male">Muški</option>
                <option value="female">Ženski</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Godine starosti *</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Visina (cm) *</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Težina (kg) *</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Izračunaj
          </button>
        </form>

        {bmr && (
          <div className="mt-6 p-4 bg-blue-100 border border-blue-300 rounded-md text-center">
            <p className="text-xl font-semibold text-blue-700">{bmr.toFixed(2)}</p>
            <p className="text-gray-700">BMR: Bazalni metabolizam</p>
          </div>
        )}

        <p className="mt-4 text-sm text-gray-500">
          * Kako bi izračunao realan broj kalorija koji treba da uneseš, nastavi dole sa unosom podataka.
        </p>
      </div>
    </div>
  );
}

export default BMRCalculator;
