
console.log("Welcome to the Community Portal");

window.onload = function(){
    alert("Page fully loaded");

    const savedEvent = localStorage.getItem("preferredEvent");

    if(savedEvent){
        document.getElementById("eventType").value = savedEvent;
    }
};

// Event Data

const events = [
    {
        name:"Music Festival",
        date:"2026-06-15",
        seats:50,
        category:"Music"
    },

    {
        name:"Frontend Workshop",
        date:"2026-07-10",
        seats:25,
        category:"Workshop"
    },

    {
        name:"Sports Meet",
        date:"2026-08-01",
        seats:0,
        category:"Sports"
    }
];

// Render Events

const container = document.getElementById("eventContainer");

events.forEach(event => {

    if(event.seats > 0){

        const card = document.createElement("div");
        card.className = "col-md-4";

        card.innerHTML = `
            <div class="eventCard">
                <h3>${event.name}</h3>
                <p>Date: ${event.date}</p>
                <p>Seats: ${event.seats}</p>
                <button class="btn btn-primary register-btn">
                    Register
                </button>
            </div>
        `;

        container.appendChild(card);
    }
});

// Character Count

document.getElementById("feedback").addEventListener("keyup", function(){

    document.getElementById("charCount").innerText =
        this.value.length;
});

// Form Submit

document.getElementById("registrationForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const eventType =
        document.getElementById("eventType").value;

    localStorage.setItem("preferredEvent", eventType);

    document.getElementById("outputMessage")
        .innerText = "Registration Successful!";
});

// Video Event

function videoReady(){

    document.getElementById("videoMessage")
        .innerText = "Video ready to play";
}

// Clear Storage

function clearPreferences(){

    localStorage.clear();
    sessionStorage.clear();

    alert("Preferences Cleared");
}

// Geolocation

function findNearbyEvents(){

    const output =
        document.getElementById("locationOutput");

    navigator.geolocation.getCurrentPosition(

        position => {

            output.innerHTML =
                `Latitude: ${position.coords.latitude}
                 <br>
                 Longitude: ${position.coords.longitude}`;
        },

        error => {

            output.innerHTML =
                "Location access denied or timeout.";
        },

        {
            enableHighAccuracy:true,
            timeout:5000
        }
    );
}

// jQuery Example

$(document).ready(function(){

    $("#registerBtn").click(function(){

        $(".eventCard").fadeOut(500).fadeIn(500);
    });
});
