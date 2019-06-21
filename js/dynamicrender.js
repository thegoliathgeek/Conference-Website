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
<p style="text-align: justify;margin-top: 10px ;color: #396251">The 2nd edition of the International Conference on Communication, VLSI and Signal Processing (ICCVSP-2020) will be held at Electronics & Communication Engineering Department Siddaganga Institute of Technology Tumakuru-572103, India, on Sep 4th and 5th, 2020.  ICCVSP, shall provide a new forum for the world-class researchers to gather and share their research achievements, ideas and progress that is required to solve the future challenges that the VLSI, Communication and Signal Processing field face. In addition to a rich variety of regular technical sessions (Call for papers), the conference program will include plenary sessions featuring world-class speakers covering the most recent topics.</p>
</div>
</div>
</div>
    `;
}


function chiefPatrons() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');
    document.getElementById('headerId').innerHTML = `
    
    `;

    document.getElementById('dynamicrender').innerHTML = `

    `;
}


function patrons() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');
    document.getElementById('headerId').innerHTML = `

    `;

    document.getElementById('dynamicrender').innerHTML = `
   
    `;
}

function aboutTumakuru() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');
    document.getElementById('headerId').innerHTML = `
   
    `;

    document.getElementById('dynamicrender').innerHTML = `
   
    `;
}

function openMaps() {
    window.open('https://maps.app.goo.gl/Pr3zTi16xqUwkC6C6');
}

function advisoryCommitee() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');

    document.getElementById('headerId').innerHTML = `
   
    `;

    document.getElementById('dynamicrender').innerHTML = `
    
    `;

}


function technicalCommitee() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');

    document.getElementById('headerId').innerHTML = `
     
    `;

    document.getElementById('dynamicrender').innerHTML = `
   
    `;

}

function studentOutreach() {
    allVisible();
    document.getElementById('homebut').classList.remove('active');

    document.getElementById('headerId').innerHTML = `
    
    `;

    document.getElementById('dynamicrender').innerHTML = `
  
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
     
    `;

    document.getElementById('dynamicrender').innerHTML = `
   

<!--Col 3-->

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
