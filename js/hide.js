var onPress = false;

function aboutUsHide(){
    onPress = !onPress;
    if(onPress){
        document.getElementById('homebut').classList.add('hidden');
        document.getElementById('dropdownMenuButton2').classList.add('hidden');
        document.getElementById('dropdownMenuButton3').classList.add('hidden');
        document.getElementById('dropdownMenuButton4').classList.add('hidden');
        document.getElementById('dropdownMenuButton5').classList.add('hidden');
        document.getElementById('contactus').classList.add('hidden');
        document.getElementById('register').classList.add('hidden');
    } else{
        document.getElementById('homebut').classList.remove('hidden');
        document.getElementById('dropdownMenuButton2').classList.remove('hidden');
        document.getElementById('dropdownMenuButton3').classList.remove('hidden');
        document.getElementById('dropdownMenuButton4').classList.remove('hidden');
        document.getElementById('dropdownMenuButton5').classList.remove('hidden');
        document.getElementById('contactus').classList.remove('hidden');
        document.getElementById('register').classList.remove('hidden');
    }
}

function allVisible(){
    onPress = false;
    document.getElementById('homebut').classList.remove('hidden');
    document.getElementById('dropdownMenuButton1').classList.remove('hidden');
    document.getElementById('dropdownMenuButton2').classList.remove('hidden');
    document.getElementById('dropdownMenuButton3').classList.remove('hidden');
    document.getElementById('dropdownMenuButton4').classList.remove('hidden');
    document.getElementById('dropdownMenuButton5').classList.remove('hidden');
    document.getElementById('contactus').classList.remove('hidden');
    document.getElementById('register').classList.remove('hidden');
}

function committeeHide(){
    onPress = !onPress;
    if(onPress){
        document.getElementById('homebut').classList.add('hidden');
        document.getElementById('dropdownMenuButton1').classList.add('hidden');
        document.getElementById('dropdownMenuButton3').classList.add('hidden');
        document.getElementById('dropdownMenuButton4').classList.add('hidden');
        document.getElementById('dropdownMenuButton5').classList.add('hidden');
        document.getElementById('contactus').classList.add('hidden');
        document.getElementById('register').classList.add('hidden');
    } else{
        document.getElementById('homebut').classList.remove('hidden');
        document.getElementById('dropdownMenuButton1').classList.remove('hidden');
        document.getElementById('dropdownMenuButton3').classList.remove('hidden');
        document.getElementById('dropdownMenuButton4').classList.remove('hidden');
        document.getElementById('dropdownMenuButton5').classList.remove('hidden');
        document.getElementById('contactus').classList.remove('hidden');
        document.getElementById('register').classList.remove('hidden');
    }
}


function programHide() {
    onPress = !onPress;
    if(onPress){
        document.getElementById('homebut').classList.add('hidden');
        document.getElementById('dropdownMenuButton1').classList.add('hidden');
        document.getElementById('dropdownMenuButton2').classList.add('hidden');
        document.getElementById('dropdownMenuButton4').classList.add('hidden');
        document.getElementById('dropdownMenuButton5').classList.add('hidden');
        document.getElementById('contactus').classList.add('hidden');
        document.getElementById('register').classList.add('hidden');
    } else{
        document.getElementById('homebut').classList.remove('hidden');
        document.getElementById('dropdownMenuButton1').classList.remove('hidden');
        document.getElementById('dropdownMenuButton2').classList.remove('hidden');
        document.getElementById('dropdownMenuButton4').classList.remove('hidden');
        document.getElementById('dropdownMenuButton5').classList.remove('hidden');
        document.getElementById('contactus').classList.remove('hidden');
        document.getElementById('register').classList.remove('hidden');
    }
}


function authorHide() {
    onPress = !onPress;
    if(onPress){
        document.getElementById('homebut').classList.add('hidden');
        document.getElementById('dropdownMenuButton1').classList.add('hidden');
        document.getElementById('dropdownMenuButton2').classList.add('hidden');
        document.getElementById('dropdownMenuButton3').classList.add('hidden');
        document.getElementById('dropdownMenuButton5').classList.add('hidden');
        document.getElementById('contactus').classList.add('hidden');
        document.getElementById('register').classList.add('hidden');
    } else{
        document.getElementById('homebut').classList.remove('hidden');
        document.getElementById('dropdownMenuButton1').classList.remove('hidden');
        document.getElementById('dropdownMenuButton2').classList.remove('hidden');
        document.getElementById('dropdownMenuButton3').classList.remove('hidden');
        document.getElementById('dropdownMenuButton5').classList.remove('hidden');
        document.getElementById('contactus').classList.remove('hidden');
        document.getElementById('register').classList.remove('hidden');
    }
}


function generalHide() {
    onPress = !onPress;
    if(onPress){
        document.getElementById('homebut').classList.add('hidden');
        document.getElementById('dropdownMenuButton1').classList.add('hidden');
        document.getElementById('dropdownMenuButton2').classList.add('hidden');
        document.getElementById('dropdownMenuButton3').classList.add('hidden');
        document.getElementById('dropdownMenuButton4').classList.add('hidden');
        document.getElementById('contactus').classList.add('hidden');
        document.getElementById('register').classList.add('hidden');
    } else{
        document.getElementById('homebut').classList.remove('hidden');
        document.getElementById('dropdownMenuButton1').classList.remove('hidden');
        document.getElementById('dropdownMenuButton2').classList.remove('hidden');
        document.getElementById('dropdownMenuButton3').classList.remove('hidden');
        document.getElementById('dropdownMenuButton4').classList.remove('hidden');
        document.getElementById('contactus').classList.remove('hidden');
        document.getElementById('register').classList.remove('hidden');
    }
}


function contactHide(){
    onPress = !onPress;
    if(onPress){
        document.getElementById('homebut').classList.add('hidden');
        document.getElementById('dropdownMenuButton1').classList.add('hidden');
        document.getElementById('dropdownMenuButton2').classList.add('hidden');
        document.getElementById('dropdownMenuButton3').classList.add('hidden');
        document.getElementById('dropdownMenuButton4').classList.add('hidden');
        document.getElementById('dropdownMenuButton5').classList.add('hidden');
        document.getElementById('register').classList.add('hidden');
    } else{
        document.getElementById('homebut').classList.remove('hidden');
        document.getElementById('dropdownMenuButton1').classList.remove('hidden');
        document.getElementById('dropdownMenuButton2').classList.remove('hidden');
        document.getElementById('dropdownMenuButton3').classList.remove('hidden');
        document.getElementById('dropdownMenuButton4').classList.add('hidden');
        document.getElementById('dropdownMenuButton5').classList.remove('hidden');
        document.getElementById('register').classList.remove('hidden');
    }
}

//
// function registerHide(){
//     onPress = !onPress;
//     if(onPress){
//         document.getElementById('homebut').classList.add('hidden');
//         document.getElementById('dropdownMenuButton1').classList.add('hidden');
//         document.getElementById('dropdownMenuButton2').classList.add('hidden');
//         document.getElementById('dropdownMenuButton3').classList.add('hidden');
//         document.getElementById('dropdownMenuButton4').classList.add('hidden');
//         document.getElementById('dropdownMenuButton5').classList.add('hidden');
//         document.getElementById('contactus').classList.add('hidden');
//     } else{
//         document.getElementById('homebut').classList.remove('hidden');
//         document.getElementById('dropdownMenuButton1').classList.remove('hidden');
//         document.getElementById('dropdownMenuButton2').classList.remove('hidden');
//         document.getElementById('dropdownMenuButton3').classList.remove('hidden');
//         document.getElementById('dropdownMenuButton4').classList.add('hidden');
//         document.getElementById('dropdownMenuButton5').classList.remove('hidden');
//         document.getElementById('contactus').classList.remove('hidden');
//     }
// }
