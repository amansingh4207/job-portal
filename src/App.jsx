
import React, { useState, useEffect } from 'react';
import Header from "./components/Header"
import JobCard from "./components/JobCard"
import SearchBar from "./components/SearchBar"

function App() {
  const [jobData, setJobData] = useState([]);
  const [filteredJobData, setFilteredJobData] = useState([]);

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
        if (data && Array.isArray(data.jdList)) {
          setJobData(data.jdList); 
          setFilteredJobData(data.jdList); // Initialize filtered data with all jobs
        } else {
          console.error("Invalid API response:", data);
        }
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };
  
    fetchJobData();
  }, []);

  // Function to filter job data based on provided criteria
 // Function to filter job data based on provided criteria
const filterJobs = (criteria) => {
  const filteredJobs = jobData.filter(job => {
    // Assuming the criteria matches the structure of job objects
    return Object.keys(criteria).every(key => {
      // Check if job property exists and then apply toLowerCase
      return !criteria[key] || (job[key] && job[key].toLowerCase().includes(criteria[key].toLowerCase()));
    });
  });
  setFilteredJobData(filteredJobs);
};


  return (
    <div>
      <Header />
      <SearchBar fetchJobsCustom={filterJobs} /> {/* Pass the filter function */}
      <div>
        {filteredJobData.length > 0 ? (
          filteredJobData.map((job, index) => (
            <JobCard key={index} job={job} />
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
}

export default App;

