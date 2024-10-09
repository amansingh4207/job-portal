


// import React, { useState } from 'react';

// function SearchBar(props) {
//   const [jobCriteria, setJobCriteria] = useState({
//     title: "",
//     location: "",
//     experience: "",
//     type: ""
//   });

//   const handleChange = (e) => {
//     setJobCriteria((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const search = async () => {
//     // Filter out empty criteria
//     const filteredCriteria = Object.fromEntries(
//       Object.entries(jobCriteria).filter(([key, value]) => value !== "")
//     );

//     // Pass filtered criteria to parent component
//     await props.fetchJobsCustom(filteredCriteria);
//   };

//   return (
//     <div className='flex flex-wrap gap-4 my-10 justify-center px-10'>
//       {/* Dropdowns for filtering */}
//       <select onChange={handleChange} name="title" value={jobCriteria.title} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
//         <option value="" disabled hidden>Job Role</option>
//         <option value="iOS Developer">iOS Developer</option>
//         <option value="Frontend Developer">Frontend Developer</option>
//         <option value="Backend Developer">Backend Developer</option>
//         <option value="Android Developer">Android Developer</option>
//         <option value="Developer Advocate">Developer Advocate</option>
//       </select>
//       <select onChange={handleChange} name="type" value={jobCriteria.type} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
//             <option value="" disabled hidden>Job Type</option>
//             <option value="Full Time">Full Time</option>
//             <option value="Part Time">Part Time</option>
//             <option value="Contract">Contract</option>
//         </select>
//         <select onChange={handleChange} name="location" value={jobCriteria.location} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
//             <option value="" disabled hidden>Location</option>
//             <option value="remote">remote</option>
//             <option value="mumbai">mumbai</option>
//             <option value="banglore">banglore</option>
//         </select>
//         <select onChange={handleChange} name="experience" value={jobCriteria.experience} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
//             <option value="" disabled hidden>Experience</option>
//             <option value="Fresher">Fresher</option>
//             <option value="Junior Level">Junior Level</option>
//             <option value="Mid Level">Mid Level</option>
//             <option value="Senior Level">Senior Level</option>
//         </select>
//       {/* Additional dropdowns for other filters */}
      
//       {/* Search button */}
//       <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
//     </div>
//   );
// }

// export default SearchBar;

import React, { useState } from 'react';

function SearchBar(props) {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
    experience: "",
    type: ""
  });

  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const search = async () => {
    // Filter out empty criteria
    const filteredCriteria = Object.fromEntries(
      Object.entries(jobCriteria).filter(([key, value]) => value !== "")
    );

    // Pass filtered criteria to parent component
    await props.fetchJobsCustom(filteredCriteria);
  };

  return (
    <div className='flex flex-wrap gap-4 my-10 justify-center px-10'>
      {/* Dropdowns for filtering */}
      <select onChange={handleChange} name="title" value={jobCriteria.title} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden>Job Role</option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>
      <select onChange={handleChange} name="type" value={jobCriteria.type} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden>Job Type</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select onChange={handleChange} name="location" value={jobCriteria.location} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden>Location</option>
        <option value="remote">Remote</option>
        <option value="mumbai">Mumbai</option>
        <option value="banglore">Bangalore</option>
      </select>
      <select onChange={handleChange} name="experience" value={jobCriteria.experience} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
        <option value="" disabled hidden>Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>

      {/* Search button */}
      <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
    </div>
  );
}

export default SearchBar;
