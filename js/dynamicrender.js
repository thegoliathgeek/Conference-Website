"use strict";

function homeClick() {

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
