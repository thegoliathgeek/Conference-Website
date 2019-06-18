"use strict";

function homeClick() {
    allVisible();
    document.getElementById('headerId').innerHTML = `
     <div class="row">
            <div class="col-md-1">
                <img src="assets/sitlogo.png" class="rounded-circle" height="190px" width="190" alt="Logo">
            </div>
            <div class="col-md-9 headerfont bounceInUp animated">
                <h2 style="margin-left: 100px; margin-top: 25px;text-shadow: 2px 2px black">SIDDAGANGA INSTITUTE OF TECHNOLOGY</h2>
                <h3 style="margin-left: 200px; margin-top: 5px;text-shadow: 1px 1px black">An Autonomous Institute under VTU </h3>
                <h3 style="margin-left: 140px; margin-top: 5px;text-shadow: 1px 1px black">Approved by AICTE B.H Road Tumakuru 572103</h3>
            </div>
            <div>
                <img src="assets/swamiji.jpeg" class="rounded-circle" height="190px" width="190" alt="Logo">
            </div>
        </div>
    `;

    document.getElementById('dynamicrender').innerHTML = `
    <div>
    <div class="row">
    <img style="display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;" src="https://static.wixstatic.com/media/f38359_c68b7e3966dd4f7284e8d98d845a76f5~mv2.png/v1/fill/w_462,h_194,al_c,q_80,usm_0.66_1.00_0.01/signal-7.webp"/>
</div> <!--Image Row-->

<div class="row">

<div class="col-md-12">
<h4 class="text-center"  style="color: #630927; font-style: italic">International Conference on Communication, VLSI and Signal Processing on 4th - 5th</h4>
<h4 class="text-center" style="color: #630927; font-style: italic">September 2020</h4>
<h5 class="text-center" style="color: #630927">Submitting to  IEEE Explorer for possible inclusion in IEEE Explorer</h5>
<div class="text-center">
<button style="font-size: 15px" class="btn btn-primary fadeIn animated" onclick="keyDates()">Key Dates</button>
</div>
</div> <!--Text Column-->

</div>

<div>

</div>

<div class="row">
<div class="col-md-12">
<h5 style="color: #04267C">Welcome to ICCVSP-2020</h5>
<p style="text-align: justify;margin-top: 10px ;color: #396251">The 2nd edition of the International Conference on Communication, VLSI and Signal Processing (ICCVSP-2020) will be held at Electronics & Communication Engineering Department Siddaganga Institute of Technology Tumakuru-572103, India, on Jan 10th and 11th, 2020.  ICCVSP, shall provide a new forum for the world-class researchers to gather and share their research achievements, ideas and progress that is required to solve the future challenges that the VLSI, Communication and Signal Processing field face. In addition to a rich variety of regular technical sessions (Call for papers), the conference program will include plenary sessions featuring world-class speakers covering the most recent topics.</p>
</div>
</div>
</div>
    `;
}


function chiefPatrons() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');
    document.getElementById('headerId').innerHTML = `
    <div class="row" style="margin-top: 100px">
    <div class="col-12">
    <div class="text-center">
    <h4 style="color: #630927;">CHIEF PATRONS</h4>
</div>
</div>
</div>
    `;

    document.getElementById('dynamicrender').innerHTML = `
    <div class="row" style="margin-top: 30px; position:relative; z-index: -1000">
    <div class="col-md-12">
    <div class="text-center">
    <img src="https://static.wixstatic.com/media/f38359_6e8a954142d54c19a9b024e45f49ea71~mv2.jpg/v1/fill/w_167,h_250,al_c,q_80/shree-siddalinga-swami-m.webp"/>
    <h6 style="color: #04267C;margin-top: 20px "><b>Sri Sri Siddalinga Swamiji</b></h6>
    <h6 style="color: #04267C;margin-top: 5px "><b>President, Sree Siddaganga Education Society</b></h6>
    </div>
</div>
</div>
    `;
}


function patrons() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');
    document.getElementById('headerId').innerHTML = `
    <div class="row" style="margin-top: 100px">
    <div class="col-12">
    <div class="text-center">
    <h4 style="color: #630927;">PATRONS</h4>
</div>
</div>
</div>
    `;

    document.getElementById('dynamicrender').innerHTML = `
    <div class="row" style="margin-top: 30px; position:relative; z-index: -1000">
    <div class="col-md-12">
    <div class="text-center">
    <ul class="menu" style="color: #04267C;text-align: justify">
    <li>Sri T. K. Nanjundappa, Secretary, SSES, Tumkur</li>
    <li> Dr. M. N. Channabasappa, Director, SIT, Tumkur</li>
    <li>Dr.Shivakumaraiah, CEO, SIT, Tumkur</li>
    <li>Dr. K P. Shivananda, Principal, SIT, Tumkur</li>
</ul>
    </div>
</div>
</div>
    `;
}

function aboutTumakuru() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');
    document.getElementById('headerId').innerHTML = `
    <div class="row" style="margin-top: 100px">
    <div class="col-12">
    <div class="text-center">
    <h4 style="color: #630927;">ABOUT TUMAKURU</h4>
</div>
</div>
</div>
    `;

    document.getElementById('dynamicrender').innerHTML = `
    <div class="row" style="margin-top: 30px; position:relative; z-index: -1000">
    <div class="col-5">
    <p style="color: #04267C; text-align: justify">
    It is situated at a distance of 70 km (43 mi) northwest of City Corporation, also known as Shaikshanika Nagari (city of education) and Kalpatharu Nadu (land of coconut trees). Since 28 August 2010, Tumkur has been accorded the status of a Karnataka Tumkur (officially renamed as Tumakuru) is one of the industrial cities located in the state of along National Highway NH-4 and NH-206. It is the headquarters of the Tumkur district.

Tumkur hosts India's first mega food park, a project of the ministry of food processing. The India Food Park was inaugurated by Prime Minister Narendra Modi in September 2014

Tumkur is located at 13.34°N 77.1°E. It has an average elevation of 822 metres (2696 feet). The city has a station on the South Western railway, 43 m northwest from Bangalore, 130 km southeast from Chitradurga city and 130 km from Kolar City.
</p>
</div>
<div class="col-5">
<img src="https://static.wixstatic.com/media/f38359_28e1c607c49a44819f70073174735b98~mv2.jpg/v1/fill/w_454,h_342,al_c,q_80,usm_0.66_1.00_0.01/TUMK_JPG.webp"/>
</div>
</div>
    `;
}

function openMaps() {
    window.open('https://maps.app.goo.gl/Pr3zTi16xqUwkC6C6');
}

function advisoryCommitee() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');

    document.getElementById('headerId').innerHTML = `
     <div class="row" style="margin-top: 100px">
    <div class="col-12">
    <div class="text-center">
    <h4 style="color: #630927;">Advisory Committee Member</h4>
</div>
</div>
</div>
    `;

    document.getElementById('dynamicrender').innerHTML = `
    <div class="row">

        <div class="col-md-12" style="margin-top: 30px; position:relative; z-index: -1000">
      <table class="table">
      <thead>
        <tr>
        <th style="width: 16.66%" scope="col">Name</th>
        <th style="width: 16.66%" scope="col">Affliation</th>
</tr>
</thead>
<tbody>

<tr>
<td>Dr. Pallappa Venkataram</td>
<td>IISc, Bangalore</td>
</tr>


<tr>
<td>Dr. Jayanta Mukhopadhya</td>
<td>IIT Kharagpur</td>
</tr>


<tr>
<td>Dr. P. K. Bisawas</td>
<td>IIT Kharagpur</td>
</tr>


<tr>
<td>Dr. Nanditha Das Gupta</td>
<td>IIT Madras</td>
</tr>


<tr>
<td>Dr. C. Chandrashekhar</td>
<td>IIT Madras</td>
</tr>


<tr>
<td>Dr. S R M Prasanna</td>
<td>IIT Dharwad</td>
</tr>



<tr>
<td>Dr. Rajesh Hegde</td>
<td>IIT Kanpur</td>
</tr>


<tr>
<td>Dr. Roy P Pailey</td>
<td>IIT Guwahati</td>
</tr>


<tr>
<td>Dr. Samudravijaya</td>
<td>IIT Guwahati</td>
</tr>


<tr>
<td>Dr. Hasan Fleyeh</td>
<td>IIT Guwahati</td>
</tr>


<tr>
<td>Dr. Deepaknath Tandur</td>
<td>Dalarna University, Sweden</td>
</tr>


<tr>
<td>Dr. Arokiaswami Alphones</td>
<td>ABB Ltd., Bangalore</td>
</tr>


<tr>
<td>Dr. Sudeendra Koushik</td>
<td>Nanyang Technological university</td>

</tr>
</tbody>
</table>
</div>

   
</div>
    `;

}


function technicalCommitee() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');

    document.getElementById('headerId').innerHTML = `
     <div class="row" style="margin-top: 100px">
    <div class="col-12">
    <div class="text-center">
    <h4 style="color: #630927;">Technical Advisory Committee</h4>
</div>
</div>
</div>
    `;

    document.getElementById('dynamicrender').innerHTML = `
    <div class="row">

        <div class="col-md-12" style="margin-top: 30px; position:relative; z-index: -1000">
        <table class="table table-unbordered">
        <thead>
        <tr>
        <th style="width: 16.66%" scope="col">Name</th>
        <th style="width: 16.66%" scope="col">Affliation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Dr. Rajashekhar S.</td>
<td>IEEE Execom Member</td>
</tr>

<tr>
<td>Dr. T. Srinivas.</td>
<td> Indian Institute of Science, Bangalore</td>
</tr>

<tr>
<td>Dr. K. Sreenivasa Rao. </td>
<td>Indian Institute of Technology Kharagpur</td>
</tr>


<tr>
<td>Dr. Suryakanth V Gangashetty. </td>
<td>Indian Institute of Information Technology Hyderabad</td>
</tr>

<tr>
<td>Dr. K. Srirama Murthy. </td>
<td>Indian Institute of Technology Hyderabad</td>
</tr>

<tr>
<td>Dr. Narendra N. P. </td>
<td>Alto University, Espoo, Finland</td>
</tr>

<tr>
<td>Dr. Deepak K T . </td>
<td>Indian Institute of Information Technology Dharwad</td>
</tr>


<tr>
<td>Dr. Anil Kumar Vuppala.</td>
<td> Indian Institute of Technology Hyderabad</td>
</tr>


<tr>
<td>Dr. Dileep A. D. </td>
<td>Indian Institute of Technology Mandi</td>
</tr>


<tr>
<td>Dr. Neelam Sinha. </td>
<td>Indian Institute of Technology Bangalore</td>
</tr>


<tr>
<td>Dr. Veena T. </td>
<td>National Institute of Technology, Goa</td>
</tr>


<tr>
<td>Dr. Nayeemullah Khan.</td>
<td>Vellore Institute of Technology, Chennai</td>
</tr>


<tr>
<td>Dr. Guruprasad. </td>
<td>Audience, Bangalore</td>
</tr>


<tr>
<td>Dr. Manjunath.</td>
<td>ISRO, Bangalore</td>
</tr>


<tr>
<td>Dr. Cyril Prasanna Raj. </td>
<td>MS Engineering College, Bangalore</td>
</tr>


<tr>
<td>Dr. Somashekhar Bhat.</td>
<td>MIT Manipal</td>
</tr>


<tr>
<td>Dr. P. G. Poonacha.</td>
<td>Indian Institute of Information Technology Bangalore</td>
</tr>


<tr>
<td>Dr. Vaishali V. Patil. </td>
<td>Indian Institute of Information Technology Pune</td>
</tr>


<tr>
<td>Dr. Shrikant S. Joshi.</td>
<td>Vishwakarma Information Technology, Pune</td>
</tr>


<tr>
<td>Dr. K. V. Suresh.</td>
<td> Siddaganga Institute of Technology, Tumkur</td>
</tr>


<tr>
<td>Dr. R. Srikantaswamy.</td>
<td> Siddaganga Institute of Technology, Tumkur</td>
</tr>


<tr>
<td>Dr. R. Kumaraswamy.</td>
<td> Siddaganga Institute of Technology, Tumkur</td>
</tr>


<tr>
<td>Dr. Veena Karjigi.</td>
<td> Siddaganga Institute of Technology, Tumkur</td>
</tr>

<tr>
<td>Dr. B. N. Shashikala.</td>
<td> Siddaganga Institute of Technology, Tumkur</td>
</tr>

<tr>
<td>Dr. Mallikarjun B.C.</td>
<td> Siddaganga Institute of Technology, Tumkur</td>
</tr>


<tr>
<td>Dr. V. M. Aparanji.</td>
<td> Siddaganga Institute of Technology, Tumkur</td>
</tr>


<tr>
<td>Dr. Seema Hegde.</td>
<td> Siddaganga Institute of Technology, Tumkur</td>
</tr>



<tr>
<td>Dr. B. T. Venkatesh Murthy.</td>
<td> Siddaganga Institute of Technology, Tumkur</td>
</tr>



<tr>
<td>Dr. K. Vishwanath.</td>
<td> Siddaganga Institute of Technology, Tumkur</td>
</tr>



<tr>
<td>Dr. K. C. Narasimha Murthy.</td>
<td> Siddaganga Institute of Technology, Tumkur</td>
</tr>

<tr>
<td>Dr. M. N. Sujatha.</td>
<td> Siddaganga Institute of Technology, Tumkur</td>
</tr>


<tr>
<td>Dr. T. N. Chandrika.</td>
<td> Siddaganga Institute of Technology, Tumkur</td>
</tr>


<tr>
<td>Dr. Sadashivappa.</td>
<td>R.V. College of Engineering, Bangalore</td>
</tr>

<tr>
<td>Dr. Prasanna Kumar M. K.</td>
<td>B M S College of Engineering, Bangalore</td>
</tr>

<tr>
<td>Dr. Aravind B.N.</td>
<td>Rajeev Institute of Technology, Hassan</td>
</tr>



</tbody>
</table>
</div>
</div>
    `;

}

function studentOutreach() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');

    document.getElementById('headerId').innerHTML = `
     <div class="row" style="margin-top: 100px">
    <div class="col-12">
    <div class="text-center">
    <h4 style="color: #630927;">Advisory Committee Member</h4>
</div>
</div>
</div>
    `;

    document.getElementById('dynamicrender').innerHTML = `
    <div class="row">

        <div class="col-md-12" style="margin-top: 30px; position:relative; z-index: -1000">
       <table class="table">
        <thead>
        <tr>
        <th style="width: 16.66%" scope="col">Name</th>
        <th style="width: 16.66%" scope="col">Affliation</th>
</tr>
</thead>
<tbody>

<tr>
<td>Indranil Sarkar</td>
<td>Technology Specialist, Fish and Richardson, Boston, USA</td>
</tr>

<tr>
<td>Deepak Dasalukunte</td>
<td>Lantiq Communications, India Pvt. Ltd.</td>
</tr>


<tr>
<td>Bhanuprakash Venakatesh</td>
<td>Honeywell Technology Solutions, Bangalore</td>
</tr>


<tr>
<td>Akhilesh</td>
<td>Arizona State University, Tempe</td>
</tr>


<tr>
<td>Vikas R Shivaprabhu</td>
<td>Senior Software Engineer, Blackmagic Design, Colorado Springs, Colorado</td>
</tr>


<tr>

</tr>


</tbody>
</table>
     
</div>


</div>
    `;


}


function program() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');

    document.getElementById('headerId').innerHTML = `
     <div class="row" style="margin-top: 100px">
    <div class="col-12">
    <div class="text-center">
    <h4 style="color: #630927;">Speakers</h4>
</div>
</div>
</div>
    `;

    document.getElementById('dynamicrender').innerHTML = `
    <div class="row">
    <div class="col-md-16">
    <div class="text-center">
    <h1>To be updated soon</h1>
</div>
</div>
</div>
    `;
}


function callForPapers() {
    allVisible();

    document.getElementById('homebut').classList.remove('active');

    document.getElementById('headerId').innerHTML = `
     <div class="row" style="margin-top: 100px">
    <div class="col-12">
    <div class="text-center">
    <h4 style="color: #630927;">Call for papers</h4>
</div>
</div>
</div>
    `;

    document.getElementById('dynamicrender').innerHTML = `
    <div class="row" style="margin-top: 20px; position: relative; z-index: -1000">
        <p style="color: #04267C; text-align: justify"><b>Prospective authors are invited to submit technical papers of 
        their previously unpublished work. Detailed information about the electronic paper submission process can be 
        found in the FOR PARTICIPANTS or PAPER SUBMISSION section. All presented papers will be submitted to the IEEE 
        for possible inclusion in IEEEXplore. Topics of interest include, but are not limited to</b></p>
    </div>
    
<div class="row" style="margin-top: 20px">

<div class="col-sm-4 col-md-4 col-lg-4">
<h6 style="color: #630927">Track 1</h6>
<h5 style="color: #630927">Communication</h5>

<ul style="font-size: 15px;">
<li>Information Theory and Coding</li>
<li>Wireless and Broadband Communication</li>
<li>RF and Microwave Communication</li>
<li>Satellite Communication</li>
<li>Antenna Theory and Propagation</li>
<li>Cognitive Radio</li>
<li>Cooperative Communication</li>
</ul>
</div>
<!--COl 1-->


<div class="col-sm-4 col-md-4 col-lg-4">
<h6 style="color: #630927">Track 2</h6>
<h5 style="color: #630927">VLSI</h5>
<ul style="font-size: 15px;">
<li>Analog design and mixed signal IC Design</li>
<li>Prototyping, Validation, Verification, Modeling and Simulation.</li>
<li>System-on-Chip Design</li>
<li>Deep Submicron Design and Modeling Issues, New Devices and MEMS</li>
<li>CAD and Tools, Testability and Design for Test</li>
</ul>
</div>
<style>
li{
color: #04267C;
}
</style>

<!--Col 2-->
<div class="col-sm-4 col-md-4 col-lg-4">
<h6 style="color: #630927">Track 3</h6>
<h5 style="color: #630927">Signal Proccesing</h5>
<ul style="font-size: 15px">
<li>Image and Video Processing</li>
<li>Speech and Audio Processing</li>
<li>Computer Vision</li>
<li>Biomedical Signal Processing</li>
<li>Compressive Sensing</li>
<li>Design and Implementation of Signal Processing Systems</li>
</ul>
</div>
</div>

<!--Col 3-->

`;

}


function submitPaper() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');

    document.getElementById('headerId').innerHTML = `
     <div class="row" style="margin-top: 100px">
    <div class="col-12">
    <div class="text-center">
    <h4 style="color: #630927;">Paper Submission</h4>
</div>
</div>
</div>
    `;

    document.getElementById('dynamicrender').innerHTML = `
    <div class="row" style="margin-top: 50px; position: relative; z-index: -1000">
    <div class="col-md-12">
    <div class="text-center">
    <h2 style="color: #630927; z-index: -1">Submission through easy chair</h2>
</div>
</div>
</div>
<div class="row" style="margin-top: 30px">
<div class="col-md-12">
<div class="text-center">
<!--<a href="https://docs.google.com/forms/d/1R1Oh6L4ckbh_vJs2evM14UoKgMcmht9EGI7UJvd7EQo/edit" class="btn btn-outline-success">GO</a>-->
<h3 style="color: #630927">To be updated</h3>
</div>
</div>
</div>
    `;

}


function publication() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');

    document.getElementById('headerId').innerHTML = `
     <div class="row" style="margin-top: 100px">
    <div class="col-12">
    <div class="text-center">
    <h4 style="color: #630927;">Publication</h4>
</div>
</div>
</div>
    `;

    document.getElementById('dynamicrender').innerHTML = `
    <div class="row" style="margin-top: 50px; position: relative; z-index: -1000">
    <div class="col-md-12">
    <div class="text-center">
    <h2 style="color: #630927">To be updated</h2>
</div>
</div>
</div>

    `;

}

function keyDates() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');

    document.getElementById('headerId').innerHTML = `
<style>
li{
color: #04267C;
font-size: 20px;
}
</style>
     <div class="row" style="margin-top: 100px">
    <div class="col-12">
    <div class="text-center">
    <h4 style="color: #630927;">Key Dates</h4>
</div>
</div>
</div>
    `;

    document.getElementById('dynamicrender').innerHTML = `
    <div class="row" style="margin-top: 50px; position: relative; z-index: -1000">
    <div class="col-md-12">
    <div class="text-center">
    <ul style="text-align: justify">
    <li>Submission Portal Opens: 1st February 2020</li>
    <li>Full Paper Submission Deadline: 15th March 2020</li>
    <li>Acceptance/Rejection Notification: 15th June 2020</li>
<li>Camera-Ready Paper due: 15th July 2020</li>
 <li>Registration opens: 1st August 2020</li>
</ul>
</div>
</div>
</div>

    `;
}


function accomodation() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');

    document.getElementById('headerId').innerHTML = `
<style>
li{
color: #04267C;
font-size: 20px;
}
</style>
     <div class="row" style="margin-top: 100px">
    <div class="col-12">
    <div class="text-center">
    <h4 style="color: #630927;">Accomodation</h4>
</div>
</div>
</div>
    `;

    document.getElementById('dynamicrender').innerHTML = `
    <div class="row" style="margin-top: 50px; position: relative; z-index: -1000">
    <div class="col-md-12">
    <div class="text-center">
    <h2 style="color: #630927">To be updated soon</h2>
</div>
</div>
</div>

    `;
}

function contactUs() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');

    document.getElementById('headerId').innerHTML = `
<style>
li{
color: #04267C;
font-size: 20px;
}
</style>
     <div class="row" style="margin-top: 100px">
    <div class="col-12">
    <div class="text-center">
    <h4 style="color: #630927;">Contact Us</h4>
</div>
</div>
</div>
    `;

    document.getElementById('dynamicrender').innerHTML = `
<style>
li{
color: #04267C;
font-size: 20px;
list-style-type: none;
}
</style>
    <div class="row" style="margin-top: 50px; position: relative; z-index: -1000">
    <div class="col-md-12">
    <!--<div class="text-center">-->
    <h2 style="color: #630927">Reach Us</h2>
    <ul style="text-align: justify">
    <li>Dr. Veena Karjigi</li>
    <li>Associate professor, Department of ECE</li>
    <li>SIT, Tumkur</li>
    <li>Ph- 9481489700</li>
    <li>Mail ID- veena.karjigi@sit.ac.in</li>
</ul>
<!--</div>-->
</div>
</div>

    `;
}
