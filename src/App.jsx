import React, { useState, useEffect } from 'react';
import Header from "./components/Header"
import JobCard from "./components/JobCard"
import SearchBar from "./components/SearchBar"




function App() {

  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "limit": 10,
            "offset": 0
          })
        });
        const data = await response.json();
        // Assuming API response is an object with 'jobs' property containing the array of job objects
        if (data && Array.isArray(data.jdList)) {
          setJobData(data.jdList); 
        } else {
          console.error("Invalid API response:", data);
        }
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };
  
    fetchJobData();
  }, []);
  


  return (
    <div>
     
      <Header />
      <SearchBar/>
      

      <div>
      {jobData ? (
        jobData.map((job, index) => (
          <JobCard key={index} job={job} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
    
    </div>
  )
}

export default App
