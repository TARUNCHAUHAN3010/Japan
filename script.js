const jobs = fetch("https://www.arbeitnow.com/api/job-board-api");
 const data = jobs.then(res => res.json()).then(data => console.log(data));

 //let company = data.target.company_name

//let title = document.getElementsByClassName ("jobtitle");
 let loca = document.getElementById('loc');
 loca.innerHTML = data.target.location