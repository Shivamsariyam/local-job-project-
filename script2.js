// script2.js

// Sample job data
const jobs = [
  {
    company: "CallHub Services",
    location: "Dewas",
    address: "45, IT Park, Dewas",
    openings: "Customer Support Rep",
    tel: "9876543218",
    education: "Intermediate or Higher"
    },
  {
    company: "Sharma Enterprises",
    location: "Bhopal",
    address: "56, Nehru Colony, Bhopal",
    openings: "Office Assistant",
    education: "Intermediate or Higher"
    },
  {
    company: "Creative Studio",
    location: "Ujjain",
    address: "2nd Floor, City Center Mall, Ujjain",
    openings: "Graphic Designer",
    education: "Diploma"
    },

  {
    company: "LocalMart",
    location: "Sehore",
    address: "22, Circular Road, Sehore",
    openings: "Delivery Associate",
    education: "High School"
    },

  {
    company: "Saharanpur Electronics",
    location: "Indore",
    address: "Shop No. 12, Main Market, Sarai Road, Indore",
    openings: "Sales Executive",
    education: "High School"
    },

  {
    company: "Mittal & Sons Finance",
    location: "Harda",
    address: "15/A, Gandhi Chowk, Harda",
    openings: "Accountant",
    education: "Bachelor’s"
    },

  {
    company: "ABC Solutions",
    location: "Hoshangabad",
    address: "Plot No. 101, Industrial Area, Hoshangabad",
    openings: "Data Entry Operator",
    education: "8th Pass"
    },

  {
    company: "Gupta Agro Products",
    location: "Jabalpur",
    address: "19, Agriculture Market, Nakur, Jabalpur",
    openings: "Field Sales Manager",
    education: "Bachelor’s"
    },

  {
    company: "City Hospital",
    location: "Dhar",
    address: "21/B, Civil Lines, Dhar",
    openings: "Receptionist",
    education: "High School"
    },

  {
    company: "Shishu Mandir School",
    location: "Khandwa",
    address: "Plot No. 5, Shastri Nagar, Khandwa",
    openings: "Teacher",
    education: "Bachelor’s"
    }
];

// Function to get URL parameters
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    district: params.get("district"),
    education: params.get("education")
  };

}

// Function to filter and display jobs
function displayJobs() {
  const { district, education } = getQueryParams();
  const jobList = document.getElementById("job-list");
  jobList.innerHTML = ""; // Clear existing jobs

  const filteredJobs = jobs.filter(job =>
    job.location.toLowerCase() === district.toLowerCase() &&
    (education === "all" || job.education === education)
  );

  if (filteredJobs.length > 0) {
    filteredJobs.forEach(job => {
      const jobCard = document.createElement("div");
      jobCard.classList.add("job-card");
      jobCard.innerHTML = `
                <div class="jobDiv">
                    <strong>${job.company}</strong><br>
                    Location: ${job.location}
                    <br>
                    Address: ${job.address}
                    <br>
                    Openings: ${job.openings}
                    <br>
                    Education: ${job.education}
                </div>
                <div class="contact-buttons">
                    <a href="tel:91999999999" taget="_blank"><img class="contact" src="/image/BLUE TICK ICON-1.png"></a>
                    
                    <a href="https://api.whatsapp.com/send/?phone=9891137111&text&type=phone_number&app_absent=0&text=Hello%2C%20I%20need%20blood%20donor.%20Can%20you%20donate%3F
" taget="_blank"> <img class="contact" src="image/GREEN CALL ICON.png"/></a>
                </div>
            `;
      jobList.appendChild(jobCard);
    });
  } else {
    jobList.innerHTML = "<p>No jobs found for your criteria.</p>";
  }
}




displayJobs();