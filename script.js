// main button 

let chats = document.getElementsByClassName("home-btn")[0];
let updates = document.getElementsByClassName("home-btn")[1];
let group = document.getElementsByClassName("home-btn")[2];
let calls = document.getElementsByClassName("home-btn")[3];

let icn_chat = document.getElementsByClassName("nav-icon")[0];
let icn_updates = document.getElementsByClassName("nav-icon")[1];
let icn_group = document.getElementsByClassName("nav-icon")[2];
let icn_calls = document.getElementsByClassName("nav-icon")[3];

let home_page = document.getElementsByClassName("home")[0];
let update_page = document.getElementsByClassName("home")[1];
let group_page = document.getElementsByClassName("home")[2];
let calls_page = document.getElementsByClassName("home")[3];
let navbar = document.getElementsByClassName("navbar")[0];

function homebtn() {
    chats.classList.add("navbar-font");
    updates.classList.remove("navbar-font");
    group.classList.remove("navbar-font");
    calls.classList.remove("navbar-font");
    icn_chat.classList.add("nav-icon-bg");
    icn_updates.classList.remove("nav-icon-bg");
    icn_group.classList.remove("nav-icon-bg");
    icn_calls.classList.remove("nav-icon-bg");
    home_page.hidden = false;
    update_page.hidden = true;
    group_page.hidden = true;
    calls_page.hidden = true;
    chat_more.classList.remove("max-height");
    search_toggle.classList.remove("max-height");
    chat_navbar.classList.remove("min-height");
};

function updatesbtn() {
    chats.classList.remove("navbar-font");
    updates.classList.add("navbar-font");
    group.classList.remove("navbar-font");
    calls.classList.remove("navbar-font");
    icn_chat.classList.remove("nav-icon-bg");
    icn_updates.classList.add("nav-icon-bg");
    icn_group.classList.remove("nav-icon-bg");
    icn_calls.classList.remove("nav-icon-bg");
    home_page.hidden = true;
    update_page.hidden = false;
    group_page.hidden = true;
    calls_page.hidden = true;
    update_more.classList.remove("max-height");
    update_navbar.classList.remove("min-height");
    updates_toggle.classList.remove("max-height");

}
function grouptn() {
    chats.classList.remove("navbar-font");
    updates.classList.remove("navbar-font");
    group.classList.add("navbar-font");
    calls.classList.remove("navbar-font");
    icn_chat.classList.remove("nav-icon-bg");
    icn_updates.classList.remove("nav-icon-bg");
    icn_group.classList.add("nav-icon-bg");
    icn_calls.classList.remove("nav-icon-bg");
    home_page.hidden = true;
    update_page.hidden = true;
    group_page.hidden = false;
    calls_page.hidden = true;
    group_more.classList.remove("max-height");

}
function callsbtn() {
    chats.classList.remove("navbar-font");
    updates.classList.remove("navbar-font");
    group.classList.remove("navbar-font");
    calls.classList.add("navbar-font");
    icn_chat.classList.remove("nav-icon-bg");
    icn_updates.classList.remove("nav-icon-bg");
    icn_group.classList.remove("nav-icon-bg");
    icn_calls.classList.add("nav-icon-bg");
    home_page.hidden = true;
    update_page.hidden = true;
    group_page.hidden = true;
    calls_page.hidden = false;
    call_more.classList.remove("max-height");
    call_navbar.classList.remove("min-height")
    call_search.classList.remove("max-height")

}

// chat search toggle
let chat_navbar = document.getElementsByClassName("home-nav")[0];
console.log(chat_navbar);
let search_toggle = document.getElementsByClassName("chat-search")[0];
// chat more toggle

let chat_more = document.getElementsByClassName("chat-more")[0];
console.log(chat_more);

function chat_moretoggle() {
    chat_more.classList.toggle("max-height")
}

function chat_searchToggle() {
    chat_navbar.classList.toggle("min-height")
    search_toggle.classList.toggle("max-height");
    chat_more.classList.remove("max-height");
}

// updates toggles 
let update_navbar = document.getElementsByClassName("home-nav")[1];
let updates_toggle = document.getElementsByClassName("updates-search")[0];
let update_more = document.getElementsByClassName("updates-more")[0];

function updates_searchtoggle() {
    update_navbar.classList.toggle("min-height")
    updates_toggle.classList.toggle("max-height");
    chat_more.classList.remove("max-height");
    update_more.classList.remove("max-height");
}

function updates_moretoggle() {
    update_more.classList.toggle("max-height");
}


// group toggle 
let group_more = document.getElementsByClassName("group_more")[0];

function Group_moretoggle() {
    group_more.classList.toggle("max-height");
}

// calls toggle 

let call_search = document.getElementsByClassName("calls-search")[0];
let call_more = document.getElementsByClassName("calls-more")[0];
let call_navbar = document.getElementsByClassName("home-nav")[3];
function calls_searchtoggle() {
    call_navbar.classList.toggle("min-height");
    call_more.classList.remove("max-height");
    call_search.classList.toggle("max-height");
};

function calls_moretoggle() {
    call_more.classList.toggle("max-height");
}
let audio_call_ram = document.getElementsByClassName("audio-call-ram")[0];
let audio_logo = document.getElementsByClassName("audio-logo")[0];
let audion_name = document.getElementById("audion-name");
let ringing = document.getElementById("audio-calling");
function audiocalltoggle_ram() {
    audio_call_ram.classList.add("audio-call-max");
    audio_logo.innerHTML = `<div class="rk-pic"><img src="file/ram ji.jpg" alt=""></div>`
    calls_page.classList.add("min-height");
    navbar.classList.add("min-height");
    audion_name.innerHTML = "lord Ram";
    ringing.innerHTML = "Calling"
    let a = setTimeout(function xyz() {
        ringing.innerHTML = "Ringing"
        audio.play();
    }, 2000);
};
function callcut() {
    audio_call_ram.classList.remove("audio-call-max");
    calls_page.classList.remove("min-height");
    navbar.classList.remove("min-height");

};

function audiocalltoggle_papa() {
    audio_call_ram.classList.add("audio-call-max");
    calls_page.classList.add("min-height");
    audio_logo.innerHTML = `<div class="rk-pic"><img src="file/.jpg" alt=""></div>`
    navbar.classList.add("min-height");
    audion_name.innerHTML = "Papa";
    ringing.innerHTML = "Calling"
    let a = setTimeout(function xyz() {
        ringing.innerHTML = "Ringing"
        audio.play();
    }, 2000);


}
function audiocalltoggle_Shiv() {
    audio_call_ram.classList.add("audio-call-max");
    audio_logo.innerHTML = `<div class="rk-pic"><img src="file/lord shiva.png" alt=""></div>`
    calls_page.classList.add("min-height");
    navbar.classList.add("min-height");
    audion_name.innerHTML = "Lord Shiv"
    ringing.innerHTML = "Calling"
    let a = setTimeout(function xyz() {
        ringing.innerHTML = "Ringing"
        audio.play();
    }, 2000);
}
function audiocalltoggle_lakhan() {
    audio_call_ram.classList.add("audio-call-max");
    audio_logo.innerHTML = `<div class="rk-pic"><img src="file/lakshaman ji.jpg" alt=""></div>`
    calls_page.classList.add("min-height");
    navbar.classList.add("min-height");
    audion_name.innerHTML = "lakshaman";
    ringing.innerHTML = "Calling"
    let a = setTimeout(function xyz() {
        ringing.innerHTML = "Ringing"
        audio.play();
    }, 2000);
}
function audiocalltoggle_hanuman() {
    audio_call_ram.classList.add("audio-call-max");
    audio_logo.innerHTML = `<div class="rk-pic"><img src="file/hanuman ji.png" alt=""></div>`
    calls_page.classList.add("min-height");
    navbar.classList.add("min-height");
    audion_name.innerHTML = "Hanuman";
    ringing.innerHTML = "Calling"
    let a = setTimeout(function xyz() {
        ringing.innerHTML = "Ringing"
        audio.play();
    }, 2000);
}
function audiocalltoggle_durga() {
    audio_call_ram.classList.add("audio-call-max");
    audio_logo.innerHTML = `<div class="rk-pic"><img src="file/ma durga.jpg" alt=""></div>`
    calls_page.classList.add("min-height");
    navbar.classList.add("min-height");
    audion_name.innerHTML = "Ma Durga";
    ringing.innerHTML = "Calling"
    let a = setTimeout(function xyz() {
        ringing.innerHTML = "Ringing"
        audio.play();
    }, 2000);
}
function audiocalltoggle_Lakshmi() {
    audio_call_ram.classList.add("audio-call-max");
    audio_logo.innerHTML = `<div class="rk-pic"><img src="file/lakshami jii.jpg" alt=""></div>`
    calls_page.classList.add("min-height");
    navbar.classList.add("min-height");
    audion_name.innerHTML = "Ma Lakshmi";
    ringing.innerHTML = "Calling"
    let a = setTimeout(function xyz() {
        ringing.innerHTML = "Ringing"
        audio.play();
    }, 2000);
}
function audiocalltoggle_krishna() {
    audio_call_ram.classList.add("audio-call-max");
    audio_logo.innerHTML = `<div class="rk-pic"><img src="file/krishana ji.jpg" alt=""></div>`
    calls_page.classList.add("min-height");
    navbar.classList.add("min-height");
    audion_name.innerHTML = "Lord Krishna";
    ringing.innerHTML = "Calling"
    let a = setTimeout(function xyz() {
        ringing.innerHTML = "Ringing"
        audio.play();
    }, 2000);
}

// contat list section 

let contact_list = document.getElementsByClassName("contact-list")[0];

function contact_list_toggle() {
    contact_list.classList.toggle("audio-call-max")
    home_page.classList.toggle("min-height");
    navbar.classList.toggle("min-height");
}
//  music section

let audio = document.getElementById("audio_file");
// contact page section

let chat_page = document.getElementsByClassName("chat-page")[0];
let chat_page_name = document.getElementById("chat-page-name");
let chat_logo = document.getElementById("chat-page-logo");


function contact_raja() {
    chat_page.classList.toggle("audio-call-max")
    contact_list.classList.toggle("audio-call-max");
    chat_logo.innerHTML = `<div class="rk-pic"><img src="file/rk-creation.png" alt=""></div>`
    // chat_logo.innerHTML = "<b>rr</b>"
    chat_page_name.innerHTML = "Raja (You)";
}
function back_on() {
    chat_page.classList.toggle("audio-call-max")
    contact_list.classList.toggle("audio-call-max")

}
function contact_papa() {
    chat_page.classList.toggle("audio-call-max")
    contact_list.classList.toggle("audio-call-max")
    chat_page_name.innerHTML = "papa"
    chat_logo.innerHTML = `<div class="rk-pic"><img src="file/" alt=""></div>`
}

function contact_ram() {
    chat_page.classList.toggle("audio-call-max")
    contact_list.classList.toggle("audio-call-max")
    chat_page_name.innerHTML = "Lord Ram"
    chat_logo.innerHTML = `<div class="rk-pic"><img src="file/ram ji.jpg" alt=""></div>`
}
function contact_durga() {
    chat_page.classList.toggle("audio-call-max")
    contact_list.classList.toggle("audio-call-max")
    chat_page_name.innerHTML = "Ma Durga"
    chat_logo.innerHTML = `<div class="rk-pic"><img src="file/ma durga.jpg" alt=""></div>`
}
function contact_hanuman() {
    chat_page.classList.toggle("audio-call-max")
    contact_list.classList.toggle("audio-call-max")
    chat_page_name.innerHTML = "Hanuman"
    chat_logo.innerHTML = `<div class="rk-pic"><img src="file/hamuman ji.png" alt=""></div>`
}
function contact_lakshaman() {
    chat_page.classList.toggle("audio-call-max")
    contact_list.classList.toggle("audio-call-max")
    chat_page_name.innerHTML = "lakshaman"
    chat_logo.innerHTML = `<div class="rk-pic"><img src="file/lakshaman ji.jpg" alt=""></div>`
}
function contact_shiv() {
    chat_page.classList.toggle("audio-call-max")
    contact_list.classList.toggle("audio-call-max")
    chat_page_name.innerHTML = "Lord shiv"
    chat_logo.innerHTML = `<div class="rk-pic"><img src="file/lord shiva.png" alt=""></div>`
}
function contact_lakshami() {
    chat_page.classList.toggle("audio-call-max")
    contact_list.classList.toggle("audio-call-max")
    chat_page_name.innerHTML = "Lakshami"
    chat_logo.innerHTML = `<div class="rk-pic"><img src="file/lakshami jii.jpg" alt=""></div>`
}
function contact_krishana() {
    chat_page.classList.toggle("audio-call-max")
    contact_list.classList.toggle("audio-call-max")
    chat_page_name.innerHTML = "Lord Krishna"
    chat_logo.innerHTML = `<div class="rk-pic"><img src="file/krishana ji.jpg" alt=""></div>`
}