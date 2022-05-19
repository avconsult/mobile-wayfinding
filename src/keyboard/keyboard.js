const searchResults = document.getElementById('search-results');
const poiList = document.getElementById('search-list');
const searchBar = document.getElementById("search-bar");

const resultsList = [
    {name: "Power Studio", vid: "power"},
    {name: "Yoga Studio", vid: "yoga"},
    {name: "Pilates Studio", vid: "pilates"},
    {name: "Cycling Dome", vid: "cyclingdome"},
    {name: "Private Gyms", vid: "vipgym"},
    {name: "Encore Juice Bar", vid: "juicebar"},
    {name: "Gym Hall", vid: "gymlower"},
    {name: "Male Locker Room", vid: "malelocker"},
    {name: "Male Prayer Area", vid: "maleprayer"},
    {name: "Female Area", vid: "femalelocker"},
    {name: "Hair Salon", vid: "hairsalon"},
    {name: "Barber Shop", vid: "barbershop"},
    {name: "Female Wet Area", vid: "femalewetarea"},
    {name: "Male Wet Area", vid: "malewetarea"},
    {name: "Male Spa", vid: "malespa"},
    {name: "Female Spa", vid: "femalespa"},
    {name: "Encore Tea Lounge", vid: "tealounge"},
    {name: "Pool & Tennis", vid: "swimmingpool"},
    {name: "Encore Restaurant", vid: "restaurant"},
    {name: "Cigar Lounge", vid: "cigarlounge"},
    {name: "CORE X", vid: "corex"},
    {name: "Bootcamp", vid: "bootcamp"},
];

let event = new Event('oninput', {});

const Keyboard = {

    elements: {
        main: null,
        keysContainer: null,
        closeButton: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        //  CREATE MAIN ELEMENTS
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");
        this.elements.closeButton = document.createElement("div");

        //  SETUP MAIN ELEMENTS
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.closeButton.classList.add("closebutton");
        this.elements.closeButton.innerText = 'x';

        this.elements.closeButton.addEventListener("click", () => this.close());

        this.elements.keysContainer.appendChild(this._createKeys(
            !window.location.pathname.includes('arab')
        ));

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        //   ADD TO DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        this.elements.main.appendChild(this.elements.closeButton);
        const footerSection = document.getElementById("bottom-menu");
        footerSection.appendChild(this.elements.main);

        //   AUTOMATICALLY USE WITH ELTS WITH use-keyboard CLASS
        document.querySelectorAll(".use-keyboard-input").forEach(elt =>
            elt.addEventListener("focus", () => {
                this.open(elt.value, currentValue => {
                    elt.value = currentValue;
                })
            }));
        document.querySelectorAll(".use-keyboard-input-onclick").forEach(elt =>
            elt.addEventListener("click", () => {
                searchBar.focus();
                this.open(searchBar.value, currentValue => {
                    searchBar.value = currentValue;

                })
            }));
    },

    _createKeys(isEnglish) {
        //    CREATE DOM FRAGMENTS
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",

            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",

            "a", "s", "d", "f", "g", "h", "j", "k", "l",

            "z", "x", "c", "v", "b", "n", "m", "done",

            "space"
        ]; // Removed for now: "caps", ",", ".", "?",
        const keyLayoutArab = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",

            "ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "د",

            "ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ط",

            "ئ", "ء", "ؤ", "ر", "لا", "ى", "ة", "و", "ز", "ظ", "done",

            "space"
        ]; // Removed for now: ",", ".", "?",
        //    CREATE HTML FOR ICON
        const createIconHTML = (icon_name) => {
            return `<img src="media/${icon_name}.png" class="keyboard-img" </img>`;
        }

        let activeKeyLayout = isEnglish ? keyLayout : keyLayoutArab;

        activeKeyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "l", "p", "ط", "done", "د"].indexOf(key) !== -1;

            // ADD ATTRIBUTES
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");
                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });
                    break;
                // Removed enter for now since no sentences case insensitive search
                // case "caps":
                //     keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                //     keyElement.innerHTML = createIconHTML("keyboard_capslock");
                //     keyElement.addEventListener("click", () => {
                //         this._toggleCapsLock();
                //         keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                //     });
                //     break;
                // Removed enter for now since no sentences
                // case "enter":
                //     keyElement.classList.add("keyboard__key--wide");
                //     keyElement.innerHTML = createIconHTML("keyboard_return");
                //     keyElement.addEventListener("click", () => {
                //         this.properties.value += "/n";
                //         this._triggerEvent("oninput");
                //     });
                //     break;
                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    // keyElement.innerHTML = createIconHTML("space_bar");
                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });
                    break;
                case "done":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("check_circle");
                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                    });
                    break;

                default:
                    keyElement.textContent = key.toLowerCase();
                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    })
                    break;
            }

            fragment.appendChild(keyElement);
            if (insertLineBreak)
                fragment.appendChild(document.createElement("br"));

        });

        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
        searchBar.dispatchEvent(new Event('input'));
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;
        console.log(this.properties.capsLock);
        for (const key of this.elements.keys) {
            if (key.childElementCount === 0)
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
        searchResults.style.display = 'block';
        searchResults.classList.add('animate__fadeInRight');
        // const listItems = document.getElementsByClassName('text-list-container');
        // for (let i = 0; i < listItems.length; i++){
        //     listItems.item(i).style.display = 'none';
        // }
        poiList.style.display = 'none';
    },

    close() {
        searchBar.value = "";
        searchPois();
        this.properties.value = ""; // reset the value
        this.eventHandlers.onclose = onclose;
        this.eventHandlers.oninput = oninput;
        this.elements.main.classList.add("keyboard--hidden");
        searchResults.style.display = 'none';
        poiList.style.display = 'block';
        poiList.classList.add('animate__fadeInLeft');
    },

};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});

const resultContainer = document.getElementById('results-list');
function searchPois() {
    if (searchInput.value.length > 1) {
        for (let i = 0; i < resultsList.length; i++) {
            if (resultsList[i].name.toLowerCase().includes(searchInput.value.toLowerCase())) {
                if (!document.getElementById(resultsList[i].name.replaceAll(' ', ''))) {
                    let listElt = document.createElement("li");
                    listElt.innerText = resultsList[i].name;
                    listElt.id = resultsList[i].name.replaceAll(' ', '');
                    listElt.addEventListener('click', () => playvideo(resultsList[i].vid, false));
                    resultContainer.appendChild(listElt);
                }
            } else {
                if (document.getElementById(resultsList[i].name.replaceAll(' ', ''))) {
                    document.getElementById(resultsList[i].name.replaceAll(' ', '')).remove();
                }
            }
        }
    } else {
        while (resultContainer.firstChild) {
            resultContainer.removeChild(resultContainer.firstChild);
        }
    }
}
