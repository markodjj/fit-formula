// import React, {useState} from 'react'


// function CaloriesCalculator(){
//     const [gender, setGedner] = useState('male');
//     const [age, setAge] = useState('');
//     const [height, setHeight] = useState('');
//     const [weight, setWeight] = useState('');
//     const [activityLevel, setActivityLevel] = useState('ne');
//     const [goal, setGoal] = useState('mrsavljenje');
//     const [caloriesResult, setCaloriesResult] = useState(null);

//     const genderCoef = {
//         'male': 5,
//         'female': -161
//     }

//     const activityCoef = {
//         'ne': 1.2,
//         'malo': 1.375,
//         'umereno': 1.55,
//         'veoma': 1.725,
//         'ekstremno': 1.9,
//     }

//     const goalCoef = {
//         'mrsavljenje': 0.85,
//         'Gojenje': 1.15,
//         'Odrzavanje': 1,
//     }
   
//     const calculateCalories = (event) => {
//         event.preventDefault();

//         let bmrCurr = 10 * weight + 6.25 * height - 5 * age + (genderCoef[gender]);
//         let currResult = bmrCurr * activityCoef[activityLevel] * goalCoef[goal];
     
//         setCaloriesResult(currResult)
//     }

//     return (
//         <div>
//              <form onSubmit={calculateCalories}>
//                 <div>
//                     <label>Godine starosti</label>
//                     <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
//                 </div>
//                 <div>
//                     <label>Visina</label>
//                     <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
//                 </div>
//                 <div>
//                     <label>Tezina</label>
//                     <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)}/>
//                 </div>
//                 <div>
//                     <label>Pol </label>
//                     <select value={gender} onChange={(e)=>setGedner(e.target.value)}>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label>Nivo aktivnosti </label>
//                     <select value={activityLevel} onChange={(e)=>setActivityLevel(e.target.value)}>
//                         <option value="ne">Neaktivan</option>
//                         <option value="malo">Malo Aktivan</option>
//                         <option value="umereno">Mereno Aktivan</option>
//                         <option value="veoma">Veoma Aktivan</option>
//                         <option value="ekstremno">Ekstremno Aktivan</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label>Cilj </label>
//                     <select value={goal} onChange={(e)=>setGoal(e.target.value)}>
//                         <option value="mrsavljenje">Mrsavljenje</option>
//                         <option value="Gojenje">Gojenje</option>
//                         <option value="Odrzavanje">Odrzavanje</option>
//                     </select>
//                 </div>
//                 <button type="submit">Calculate Calories</button>
//              </form>
//             {caloriesResult && (
//                 <h2>{caloriesResult}</h2>
//             )}
//         </div>
//     )
// }

// export default CaloriesCalculator
import React, { useState } from 'react';

function CaloriesCalculator() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('ne');
  const [goal, setGoal] = useState('mrsavljenje');
  const [caloriesResult, setCaloriesResult] = useState(null);

  const genderCoef = {
    male: 5,
    female: -161,
  };

  const activityCoef = {
    ne: 1.2,
    malo: 1.375,
    umereno: 1.55,
    veoma: 1.725,
    ekstremno: 1.9,
  };

  const goalCoef = {
    mrsavljenje: 0.85,
    Gojenje: 1.15,
    Odrzavanje: 1,
  };

  const calculateCalories = (event) => {
    event.preventDefault();

    const bmrCurr = 10 * weight + 6.25 * height - 5 * age + genderCoef[gender];
    const currResult = bmrCurr * activityCoef[activityLevel] * goalCoef[goal];

    setCaloriesResult(currResult);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Calories Calculator</h2>
        <form onSubmit={calculateCalories} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Age *</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Height (cm) *</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Weight (kg) *</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Gender *</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Activity Level *</label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="ne">Sedentary</option>
                <option value="malo">Lightly Active</option>
                <option value="umereno">Moderately Active</option>
                <option value="veoma">Very Active</option>
                <option value="ekstremno">Super Active</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Goal *</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="mrsavljenje">Slimming</option>
                <option value="Gojenje">Gaining</option>
                <option value="Odrzavanje">Maintenance</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Calculate Calories
          </button>
        </form>
        {caloriesResult && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800">
              Your Daily Calories: {caloriesResult.toFixed(2)} calories/day
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default CaloriesCalculator;
