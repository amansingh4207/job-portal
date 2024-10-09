


// import React, { useState, useEffect, useRef } from 'react';
// import Header from "./components/Header";
// import JobCard from "./components/JobCard";
// import SearchBar from "./components/SearchBar";
// import './App.css';

// function App() {
//   const [jobData, setJobData] = useState([]);
//   const [filteredJobData, setFilteredJobData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [offset, setOffset] = useState(0);
//   const loader = useRef(null);

//   useEffect(() => {
//     fetchJobData();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (loader.current && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
//         fetchMoreData();
//       }
//     };

//     const throttleScroll = throttle(handleScroll, 200); // Throttling scroll event
//     window.addEventListener('scroll', throttleScroll);

//     return () => window.removeEventListener('scroll', throttleScroll);
//   }, [offset]);

//   const throttle = (func, limit) => {
//     let lastFunc;
//     let lastRan;
//     return function () {
//       const context = this;
//       const args = arguments;
//       if (!lastRan) {
//         func.apply(context, args);
//         lastRan = Date.now();
//       } else {
//         clearTimeout(lastFunc);
//         lastFunc = setTimeout(function () {
//           if (Date.now() - lastRan >= limit) {
//             func.apply(context, args);
//             lastRan = Date.now();
//           }
//         }, limit - (Date.now() - lastRan));
//       }
//     };
//   };

//   const fetchJobData = async () => {
//     setIsLoading(true);
//     const apiURL = "https://api.weekday.technology/adhoc/getSampleJdJSON";

//     try {
//       const response = await fetch(apiURL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           "limit": 10,
//           "offset": offset
//         })
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       if (data && Array.isArray(data.jdList)) {
//         setJobData(prevData => [...prevData, ...data.jdList]);
//         setFilteredJobData(prevData => [...prevData, ...data.jdList]);
//         setOffset(prevOffset => prevOffset + 10); // Increment offset for the next fetch
//       } else {
//         console.error("Invalid API response format:", data);
//       }
//     } catch (error) {
//       console.error("Error fetching job data:", error);
//     }
//     setIsLoading(false);
//   };

//   const fetchMoreData = () => {
//     if (!isLoading) {
//       fetchJobData();
//     }
//   };

//   const filterJobs = (criteria) => {
//     const filteredJobs = jobData.filter(job => {
//       return Object.keys(criteria).every(key => {
//         return !criteria[key] || (job[key] && job[key].toLowerCase().includes(criteria[key].toLowerCase()));
//       });
//     });
//     setFilteredJobData(filteredJobs);
//   };

//   return (
//     <div>
//       <Header />
//       <SearchBar fetchJobsCustom={filterJobs} />
//       <div className="job-card-container mx-5">
//         {filteredJobData.map((job, index) => (
//           <JobCard key={index} job={job} />
//         ))}
//         <div ref={loader} style={{ margin: "20px", textAlign: "center" }}>
//           {isLoading && <p>Loading...</p>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect, useRef } from 'react';
import Header from "./components/Header";
import JobCard from "./components/JobCard";
import SearchBar from "./components/SearchBar";
import './App.css';

function App() {
  const [jobData, setJobData] = useState([]);
  const [filteredJobData, setFilteredJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const loader = useRef(null);

  // Mock job data (you can replace this with real API data later)
  const mockJobData = [
    { id: 1, title: 'Software Engineer', company: 'TechCorp', location: 'Remote' },
    { id: 2, title: 'Frontend Developer', company: 'WebWorks', location: 'San Francisco' },
    { id: 3, title: 'Backend Engineer', company: 'DataSystems', location: 'New York' },
    { id: 4, title: 'Full Stack Developer', company: 'DevSolutions', location: 'Remote' },
    { id: 5, title: 'Product Manager', company: 'BizTech', location: 'Austin' },
    { id: 6, title: 'DevOps Engineer', company: 'CloudNet', location: 'Seattle' },
    { id: 7, title: 'UI/UX Designer', company: 'Creative Minds', location: 'Boston' },
    { id: 8, title: 'QA Tester', company: 'TestWorks', location: 'Los Angeles' },
    { id: 9, title: 'Mobile Developer', company: 'AppWorks', location: 'San Diego' },
    { id: 10, title: 'Data Scientist', company: 'AI Labs', location: 'Chicago' },
  ];

  useEffect(() => {
    fetchJobData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (loader.current && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        fetchMoreData();
      }
    };

    const throttleScroll = throttle(handleScroll, 200); // Throttling scroll event
    window.addEventListener('scroll', throttleScroll);

    return () => window.removeEventListener('scroll', throttleScroll);
  }, [offset]);

  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  const fetchJobData = async () => {
    setIsLoading(true);
    // Simulating an API call using setTimeout to fetch mock data
    setTimeout(() => {
      const newJobs = mockJobData.slice(offset, offset + 5); // Fetch 5 jobs at a time
      setJobData(prevData => [...prevData, ...newJobs]);
      setFilteredJobData(prevData => [...prevData, ...newJobs]);
      setOffset(prevOffset => prevOffset + 5); // Increment offset for the next fetch
      setIsLoading(false);
    }, 1000); // Simulate a 1 second delay
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




