/**
 * Script for the Character Select web applet(?)
 * HyaenaGemah 2025 - Based on a tutorial by MooICT: https://www.mooict.com/make-a-character-selection-project-using-html-css-and-javascript/
 */

const bgmList = [
    './audio/bgm1.ogg',
    './audio/bgm2.ogg'
];

const characters = [
    {
        id: 'hyaenaGemah',
        name: 'Gemah Lazarus Hyaena',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/hyaenaGemah/gallery/202408.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/hyaenaGemah/gallery/202409.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/hyaenaGemah/gallery/202410A.gif', title: 'Oct 2024 - Halloween Trade #1' },
            { src: './img/char/hyaenaGemah/gallery/202410B.gif', title: 'Oct 2024 - Halloween Trade #1' },
            { src: './img/char/hyaenaGemah/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/hyaenaGemah/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/hyaenaGemah/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/hyaenaGemah/gallery/202502.webp', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/hyaenaGemah/gallery/202503.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/hyaenaGemah/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/hyaenaGemah/gallery/202506.webp', title: 'Jun 2025 - Sports Trade' }
        ]
    }
];

const selectContainer = document.getElementById('selector');

characters.forEach(char => {
    const btn = document.createElement('button');
    btn.classList.add('charBtn');
    btn.type = 'button';
    btn.innerHTML = `<img src="./img/char/${char.id}/${char.portraits[1]}" style="border: none; border-radius: 8px;" height="64" width="64" />`;
    btn.onmouseenter = () => {
        const sfxHov = document.getElementById('sfxHover');
        sfxHov.pause();
        sfxHov.currentTime = 0;
        sfxHov.play();
    };
    btn.onclick = () => {
        // Portrait section behavior
        document.getElementById('charName').innerHTML = char.name;
        document.getElementById('charSuperlative').innerHTML = char.superlative;
        const port = document.getElementById('charPortrait');
        port.src = `./img/char/${char.id}/${char.portraits[0]}`;
        port.alt = char.name;

        // Gallery behavior
        const gallery = document.getElementById('charGallery');
        gallery.innerHTML = '';
        
        for (let i = 0; i < char.gallery.length; i++) {
            gallery.innerHTML += `<a class="a-picture" href="${char.gallery[i].src}" title="${char.gallery[i].title}">
                <img src="${char.gallery[i].src}" alt="${char.gallery[i].title}" />
            </a>`;
        }

        new SimpleLightbox({elements: '#charGallery a'});

        // Sound behavior
        const sfxSel = document.getElementById('sfxClick');
        sfxSel.pause();
        sfxSel.currentTime = 0;
        sfxSel.play();
    };
    selectContainer.append(btn);
});

const bgmPlayer = document.getElementById('bgmusic');
bgmPlayer.volume = 0.2;
bgmPlayer.addEventListener('ended', () => {
    const nextSong = bgmList.pop();
    bgmPlayer.pause();
    bgmPlayer.src = nextSong;
    bgmPlayer.load();
    bgmPlayer.play();
    bgmList.unshift(nextSong);
});