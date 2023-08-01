//New page
function nextpage(page) {
    document.getElementById('circle1').style.animation = "nextPage 0.4s linear"
    setTimeout(function() {
        document.getElementById('circle2').style.animation = "nextPage 0.4s linear"
    }, 30);
    setTimeout(function() {
        document.getElementById('circle3').style.opacity = 1
        document.getElementById('circle3').style.width = '10000px'
        document.getElementById('circle3').style.height = '10000px'
    }, 430);
    setTimeout(function() {
        window.location.href = page;
    }, 430);
    
    
}

//On load
function onload() {
    document.getElementById('circle2').style.animation = "onLoad 0.4s linear"
    setTimeout(function() {
        document.getElementById('circle1').style.animation = "onLoad 0.4s linear"
    }, 30);
}

//Header On Load

let currentURL = window.location.href;
if (currentURL.indexOf("home.html") === -1) {
    document.getElementById("header").innerHTML = 
    `
    <div id="navBar">
    <div id="leftHeader">
    <img src="images/Logo.png" id="logo" />
    The Econ Marketplace
    </div>
    <input id="hamburgerCheckbox" type="checkbox" name="" id="" />
    <div id="rightHeader">
    <nav>
    <ul>
    <li>
    <a onclick="nextpage('home.html')" class="headerLink">Home</a>
    </li>
    <li>
    <a onclick="nextpage('projects.html')" class="headerLink">Projects</a>
    </li>
    <li>
    <a onclick="nextpage('articles.html')" class="headerLink">Articles</a>
    </li>
    <li>
    <a onclick="nextpage('about.html')" class="headerLink">About</a>
    </li>
    </ul>
    </nav>
    </div>
    <div id="hamburger">
    <span class="line line1"></span>
    <span class="line line2"></span>
    <span class="line line3"></span>
    </div>
    </div>
    <div></div>
    <span id="message">ABOUT</span>
    `;
    if (currentURL.indexOf("projects.html") > -1) {
        document.getElementById("message").innerHTML = "PROJECTS";
    } else if (currentURL.indexOf("articles.html") > -1) {
        document.getElementById("message").innerHTML = "ARTICLES";
    } else if (currentURL.indexOf("about.html") > -1) {
        document.getElementById("message").innerHTML = "ABOUT";
    };
};


//Footer On Load
document.getElementById("footer").innerHTML = `
<div id="footerContent">
<div class="footerCard">
<div class="footerCardTitle">Contact</div>
<div class="footerCardContent">About</div>
<div class="footerCardContent">Number</div>
</div>
<div class="footerCard">
<div class="footerCardTitle">Company</div>
<div class="footerCardContent">Work Here</div>
<div class="footerCardContent">Legal</div>
<div class="footerCardContent">Privacy Policy</div>
<div class="footerCardContent">Terms of Service</div>
<div class="footerCardContent">Cookie Settings</div>
</div>
<div class="footerCard">
<div class="footerCardTitle">Connection</div>
<div class="footerCardContent">Subscribe to get the latest news</div>
<form>
<input type="email" id="email" name="email" placeholder="Type Your Email Here!"/>
<button type="submit" id="submit">Subscribe</button>
</form>
</div>
</div>
<div id="footerCopyright">
<div id="footerLogo">
<img src="images/Logo.png"/>
</div>
<div id="footerTitle">The Econ Marketplace</div>
<div id="footerSocials">
<div href="#" class="fa fa-google"></div>
<div href="#" class="fa fa-facebook"></div>
<div href="#" class="fa fa-twitter"></div>
<div href="#" class="fa fa-instagram"></div>
</div>
<hr>
<div id="footerCopyrights">
Copyright Placeholder All rights reserved.
</div>
</div>
`


//Resized function






//navBar Code
let links = document.querySelectorAll(".headerLink");
let lines = document.querySelectorAll(".line")
let navbar = document.getElementById("navBar");
let message = document.getElementById("headerMessage");
let beforeLinkColor = "rgb(255, 255, 255);"

if (currentURL.indexOf("home.html") === -1) {
    for (let link of links) {
        link.style.color = "white";
    };
    for (let line of lines) {
        line.style.background = "#5f6162";
    };
};




window.addEventListener("scroll", () => {
    if (window.innerWidth > 768) {

        if (window.scrollY > 0) {
            try {
                message.style.animation = "biggerMessage 0.5s cubic-bezier(.7,-0.04,.44,1.58)"
                setTimeout(function() {
                    message.remove()
                }, 500);
            } catch(error) {
                
            }
        }
        if (window.scrollY > 828.799) {
            navbar.style.animation = "";
            navbar.style.position = "fixed"
            navbar.style.animation = "navBarColor 0.3s linear";
            setTimeout(function() {
                navbar.style.backgroundColor = "rgb(170, 202, 176)"
            }, 300);
            if (currentURL.indexOf("home.html") === -1) {
                for (let link of links) {
                    link.style.color = "black";
                }
            }
            
            navbar.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"
        } else {
            
            if (currentURL.indexOf("home.html") === -1) {
                for (let link of links) {
                    link.style.color = "rgb(255, 255, 255)";
                }
            }
            navbar.style.animation = "navBarColorFadeOut 0.2s linear";
            setTimeout(function() {
                navbar.style.position = "absolute"
                navbar.style.backgroundColor  = "#00000000"
            }, 200);
            
        }
    } else {
        if (window.scrollY > 0) {
            try {
                message.style.animation = "biggerMessage 0.5s cubic-bezier(.7,-0.04,.44,1.58)"
                setTimeout(function() {
                    message.remove()
                }, 500);
            } catch(error) {
                
            }
        }
        if (window.scrollY > 70) {
            navbar.style.animation = "";
            navbar.style.position = "fixed"
            navbar.style.animation = "navBarColor 0.3s linear";
            setTimeout(function() {
                navbar.style.backgroundColor = "rgb(170, 202, 176)"
            }, 300);
            if (currentURL.indexOf("home.html") === -1) {
                for (let link of links) {
                    link.style.color = "black";
                }
            }
            
            navbar.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"
        } else {
            if (currentURL.indexOf("home.html") === -1) {
                for (let link of links) {
                    link.style.color = "rgb(255, 255, 255)";
                }
            }
            navbar.style.animation = "navBarColorFadeOut 0.3s linear";
            setTimeout(function() {
                navbar.style.position = "absolute"
                navbar.style.backgroundColor  = "#00000000"
            }, 300);
            
        }
    }
});

//Footer vars

const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
const footer = document.getElementById("footer");
var updatedHeight = height;
var heightInPx = updatedHeight.toString() + "px";
footer.style.top = heightInPx;