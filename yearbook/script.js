/**
 * Script for the Character Select web applet(?)
 * HyaenaGemah 2025 - Based on a tutorial by MooICT: https://www.mooict.com/make-a-character-selection-project-using-html-css-and-javascript/
 */

const bgmList = [
    "./audio/bgm1.ogg",
    "./audio/bgm2.ogg"
];

const characters = [
    {
        name: "King",
        superlative: "Most likely to chain a suplex after a hug",
        portrait: "./img/char/port_king.webp",
        button: "./img/char/sel_king.webp"
    },
    {
        name: "Parasoul",
        superlative: "Competitive fighting game star",
        portrait: "./img/char/port_parasoul.webp",
        button: "./img/char/sel_parasoul.webp"
    },
    {
        name: "Josuke Higashikata",
        superlative: "Feeling freshest after, like christmas morning",
        portrait: "./img/char/port_josuke.png",
        button: "./img/char/sel_josuke.png"
    },
    {
        name: "Lae'zel",
        superlative: "Put in detention for calling people \"Istik\"",
        portrait: "./img/char/port_laezel.png",
        button: "./img/char/sel_laezel.png"
    }
];

const selectContainer = document.getElementById("selector");

characters.forEach(char => {
    const btn = document.createElement("button");
    btn.classList.add("charBtn");
    btn.type = "button";
    btn.innerHTML = `<img src="${char.button}" style="border: none; border-radius: 8px;" height="64" width="64" />`;
    btn.onmouseenter = () => {
        const sfxHov = document.getElementById("sfxHover");
        sfxHov.pause();
        sfxHov.currentTime = 0;
        sfxHov.play();
    };
    btn.onclick = () => {
        document.getElementById("charName").innerHTML = char.name;
        document.getElementById("charSuperlative").innerHTML = char.superlative;
        const port = document.getElementById("charPortrait");
        port.src = char.portrait;
        port.alt = char.name;
        const sfxSel = document.getElementById("sfxClick");
        sfxSel.pause();
        sfxSel.currentTime = 0;
        sfxSel.play();
    };
    selectContainer.append(btn);
});

const bgmPlayer = document.getElementById("bgmusic");
bgmPlayer.volume = 0.2;
bgmPlayer.addEventListener("ended", () => {
    const nextSong = bgmList.pop();
    bgmPlayer.pause();
    bgmPlayer.src = nextSong;
    bgmPlayer.load();
    bgmPlayer.play();
    bgmList.unshift(nextSong);
});