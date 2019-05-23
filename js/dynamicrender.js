"use strict";

function homeClick() {
    allVisible();
    document.getElementById('headerId').innerHTML = `
     <div class="row">
            <div class="col-md-1">
                <img src="assets/sitlogo.png" class="rounded-circle" height="190px" width="190" alt="Logo">
            </div>
            <div class="col-md-9 headerfont bounceInUp animated">
                <h2 style="margin-left: 100px; margin-top: 25px">SIDDAGANGA INSTITUTE OF TECHNOLOGY</h2>
                <h3 style="margin-left: 200px; margin-top: 5px">An Autonomous Institute under VTU </h3>
                <h3 style="margin-left: 140px; margin-top: 5px">Approved by AICTE B.H Road Tumakuru 572103</h3>
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
<h4 class="text-center"  style="color: #630927; font-style: italic">International Conference on Communication, VLSI and Signal Processing on 10th - 11th</h4>
<h4 class="text-center" style="color: #630927; font-style: italic">January 2020</h4>
<h5 class="text-center" style="color: #630927">Submitting to  IEEE Explorer for possible inclusion in IEEE Explorer</h5>
<div class="text-center">
<button type="button" style="font-size: 15px" class="btn btn-primary fadeIn animated">Key Dates</button>
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
    <ul class="menu" style="color: #04267C;">
    <li>Sri T. K. Nanjundappa, Secretary, SSES, Tumkur Dr. M. N. </li>
    <li>Channabasappa, Director, SIT, Tumkur Dr.</li>
    <li>Shivakumaraiah, CEO, SIT, Tumkur</li>
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

        <div class="col-5" style="margin-top: 30px; position:relative; z-index: -1000">
        <h3 style="color: #630927">Name</h3>
        <ul>
        <li>Dr. Pallappa Venkataram</li>
        <li>Dr. Jayanta Mukhopadhya</li>
        <li>Dr. P. K. Bisawas</li>
        <li>Dr. Nanditha Das Gupta</li>
        <li>Dr. C. Chandrashekhar</li>
        <li>Dr. S R M Prasanna</li>
        <li>Dr. Rajesh Hegde</li>
        <li>Dr. Roy P Pailey</li>
        <li>Dr. Samudravijaya</li>
        <li>Dr. Hasan Fleyeh</li>
        <li>Dr. Deepaknath Tandur</li>
        <li>Dr. Arokiaswami Alphones</li>
        <li>Dr. Sudeendra Koushik</li>
        
        
</ul>
</div>

    <div class="col-5" style="margin-top: 30px; position:relative; z-index: -1000">
    <h3 style="color: #630927">Affliation</h3>
        <ul>
        <li>IISc, Bangalore</li>
        <li>IIT Kharagpur</li>
        <li>IIT Kharagpur</li>
        <li>IIT Madras</li>
        <li>IIT Madras</li>
        <li>IIT Dharwad</li>
        <li>IIT Kanpur</li>
        <li>IIT Guwahati</li>
        <li>IIT Guwahati</li>
        <li>Dalarna University, Sweden</li>
        <li>ABB Ltd., Bangalore</li>
        <li>Nanyang Technological university</li>
        <li>Chairman, IEEE Bangalore Section</li>
        
        
</ul>
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

        <div class="col-5" style="margin-top: 30px; position:relative; z-index: -1000">
        <h3 style="color: #630927">Name</h3>
        <ul>
        <li>Dr. K. Sreenivasa Rao</li>
        <li>Dr. K. Srirama Murthy</li>
        <li>Dr. Suryakanth  V Gangashetty</li>
        <li>Dr. Dileep A. D.</li>
        <li>Dr. Veena T.</li>
        <li>Dr. Deepak K T</li>
        <li>Dr. Narendra N. P.</li>
        <li>Dr. Nayeemullah Khan</li>
        <li>Dr. Guruprasad</li>
        <li>Dr. Cyril Prasanna Raj</li>
        <li>Dr. Anil Kumar Vuppala</li>
        <li>Dr. Somashekhar Bhat</li>
        <li>Dr. Neelam Sinha</li>
        <li>Dr. P.G. Poonacha</li>
        <li>Dr. Vaishali V. Patil</li>
        <li>Manjunath</li>
        
        
</ul>
</div>

    <div class="col-5" style="margin-top: 30px; position:relative; z-index: -1000">
    <h3 style="color: #630927">Affliation</h3>
        <ul>
        <li>IIT Kharagpur</li>
        <li>IIT Hyderabad</li>
        <li>IIIT Hyderabad</li>
        <li>IIT Mandi</li>
        <li>NIT Goa</li>
        <li>IIT Dharwad</li>
        <li>Aalto University, Espoo, Finland</li>
        <li>VIT, Chennai</li>
        <li>Audience, Bangalore</li>
        <li>MS Engineering College, Bangalore</li>
        <li>IIIT, Hyderabad</li>
        <li>MIT, Manipal</li>
        <li>IIIT, Bangalore</li>
        <li>IIIT, Bangalore</li>
        <li>IIIT, Pune</li>
        <li>ISRO, Banglore</li>
        
        
</ul>
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

        <div class="col-5" style="margin-top: 30px; position:relative; z-index: -1000">
        <h3 style="color: #630927">Name</h3>
        <ul>
        <li>Indranil Sarkar</li>
        <li>Deepak Dasalukunte</li>
        <li>Bhanuprakash Venakatesh</li>
        <li>Akhilesh</li>
        <li>Vikas R Shivaprabhu</li>
       
        
        
</ul>
</div>

    <div class="col-5" style="margin-top: 30px; position:relative; z-index: -1000">
    <h3 style="color: #630927">Affliation</h3>
        <ul>
        <li>Technology Specialist, Fish and Richardson, Boston, USA</li>
        <li>Lantiq Communications, India Pvt. Ltd.</li>
        <li>Honeywell Technology Solutions, Bangalore</li>
        <li>Arizona State University, Tempe</li>
        <li>Senior Software Engineer, Blackmagic Design, Colorado Springs, Colorado</li>

        
</ul>
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

<div class="col-4">
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


<div class="col-4">
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
<div class="col-4">
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
    <h2 style="color: #630927">Click GO to submit your paper</h2>
</div>
</div>
</div>
<div class="row" style="margin-top: 30px">
<div class="col-md-12">
<div class="text-center">
<a href="https://docs.google.com/forms/d/1R1Oh6L4ckbh_vJs2evM14UoKgMcmht9EGI7UJvd7EQo/edit" class="btn btn-outline-success">GO</a>
</div>
</div>
</div>
    `;

}


function publication(){
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
    <li>Submission Portal Opens: 1st September 2019</li>
    <li>Full Paper Submission Deadline: 15th October 2019</li>
    <li>Acceptance/Rejection Notification: 15th November 2019
 Camera-Ready Paper due: 30th November 2019</li>
 <li>Registration opens: 1st December 2019</li>
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
