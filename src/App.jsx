
import React, { useState, useEffect, useRef } from 'react';
import Header from "./components/Header"
import JobCard from "./components/JobCard"
import SearchBar from "./components/SearchBar"
import './App.css';

function App() {
  const [jobData, setJobData] = useState([]);
  const [filteredJobData, setFilteredJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const loader = useRef(null);

  useEffect(() => {
    fetchJobData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (loader.current && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchMoreData();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  const fetchJobData = async () => {
    setIsLoading(true);
    const apiURL = import.meta.env.VITE_API_KEY;
    try {
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "limit": 10,
          "offset": offset
        })
      });
      const data = await response.json();
      if (data && Array.isArray(data.jdList)) {
        setJobData(prevData => [...prevData, ...data.jdList]);
        setFilteredJobData(prevData => [...prevData, ...data.jdList]);
        setOffset(prevOffset => prevOffset + 10); // Increment offset for the next fetch
      } else {
        console.error("Invalid API response:", data);
      }
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
    setIsLoading(false);
  };

  const fetchMoreData = () => {
    if (!isLoading) {
      fetchJobData();
    }
  };

  const filterJobs = (criteria) => {
    const filteredJobs = jobData.filter(job => {
      return Object.keys(criteria).every(key => {
        return !criteria[key] || (job[key] && job[key].toLowerCase().includes(criteria[key].toLowerCase()));
      });
    });
    setFilteredJobData(filteredJobs);
  };

  return (
    <div>
      <Header />
      <SearchBar fetchJobsCustom={filterJobs} />
      <div className="job-card-container mx-5">
        {filteredJobData.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
        <div ref={loader} style={{ margin: "20px", textAlign: "center" }}>
          {isLoading && <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
}

export default App;








