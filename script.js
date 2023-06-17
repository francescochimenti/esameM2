/* ! Esame */

const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

/*
Cerca lavori che corrispondono a titolo e località.
*/

function searchJob(jobTitle, jobLocation) {
  let results = {
    result: [],
    count: 0,
  };

  for (let i = 0; i < jobs.length; i++) {
    const title = jobs[i].title.toLowerCase();
    const location = jobs[i].location.toLowerCase();

    if (title.includes(jobTitle) && location.includes(jobLocation)) {
      results.result.push({
        title: jobs[i].title,
        location: jobs[i].location,
      });
      results.count++;
    }
  }
  return results;
}

/*
Raccoglie i valori di input, esegue la ricerca e mostra i risultati.
*/

function search() {
  const jobTitle = document.getElementById("jobTitleInput").value.toLowerCase();
  const jobLocation = document
    .getElementById("jobLocationInput")
    .value.toLowerCase();

  if (jobTitle.trim().length === 0 && jobLocation.trim().length === 0) {
    const nope = document.getElementById("results");
    const liNope = document.createElement("li");

    liNope.textContent = "Please enter at least one search criterion.";
    liNope.style.backgroundColor = "red";

    nope.innerHTML = "";
    liNope.classList.add("slide-in");
    nope.appendChild(liNope);
    return;
  }

  const results = searchJob(jobTitle, jobLocation);
  const resultsElement = document.getElementById("results");

  resultsElement.innerHTML = "";

  const p = document.createElement("p");
  p.textContent = "Number of jobs found: " + results.count;
  p.classList.add("slide-in", "counterP");
  resultsElement.appendChild(p);

  for (let i = 0; i < results.result.length; i++) {
    const li = document.createElement("li");

    li.textContent =
      results.result[i].title + " - " + results.result[i].location;

    li.classList.add("slide-in");
    li.style.animationDelay = `${i * 0.15}s`;

    resultsElement.appendChild(li);
  }
}

/* ! Navbar */

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

/* ! Bounce title */

window.onload = function () {
  let h1 = document.querySelector(".bounce");
  let text = h1.textContent;
  h1.textContent = "";

  for (let i = 0; i < text.length; i++) {
    let letter = document.createElement("span");
    if (text[i] === " ") {
      letter.innerHTML = "&nbsp;";
    } else {
      letter.textContent = text[i];
    }
    letter.style.animationDelay = `${0.1 * i}s`;
    letter.className = "bounce";
    h1.appendChild(letter);
  }
};