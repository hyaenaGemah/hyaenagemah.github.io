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
        id: 'beardgator',
        name: 'Beardgator',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/beardgator/gallery/202408.webp',  title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/beardgator/gallery/202409.webp',  title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/beardgator/gallery/202410.webp',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/beardgator/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/beardgator/gallery/202412.webp',  title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/beardgator/gallery/202412A.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/beardgator/gallery/202501.webp',  title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/beardgator/gallery/202502.webp',  title: 'Feb 2025 - Space Trade' },
            { src: './img/char/beardgator/gallery/202503.webp',  title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/beardgator/gallery/202504.webp',  title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/beardgator/gallery/202505.webp',  title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/beardgator/gallery/202506.webp',  title: 'Jun 2025 - Sports Trade' }
        ]
    },
    {
        id: 'bin',
        name: 'Bin ',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/bin/gallery/202408.webp',  title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/bin/gallery/202409.webp',  title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/bin/gallery/202410.webp',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/bin/gallery/202410A.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/bin/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/bin/gallery/202412.webp',  title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/bin/gallery/202501.webp',  title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/bin/gallery/202502.webp',  title: 'Feb 2025 - Space Trade' },
            { src: './img/char/bin/gallery/202504.webp',  title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/bin/gallery/202505.webp',  title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/bin/gallery/202505A.webp', title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/bin/gallery/202506.webp',  title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/bin/gallery/202506A.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/bin/gallery/202506B.webp', title: 'Jun 2025 - Sports Trade' },
        ]
    },
    {
        id: 'bobba',
        name: 'Bobba',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/bobba/gallery/202410.webp',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/bobba/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' }
        ]
    },
    {
        id: 'chimeraMutt',
        name: 'Micah/Jer',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/chimeraMutt/gallery/202408.webp',  title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/chimeraMutt/gallery/202409.webp',  title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/chimeraMutt/gallery/202410.webp',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/chimeraMutt/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/chimeraMutt/gallery/202412.webp',  title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/chimeraMutt/gallery/202501.webp',  title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/chimeraMutt/gallery/202502.webp',  title: 'Feb 2025 - Space Trade' },
            { src: './img/char/chimeraMutt/gallery/202504.webp',  title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/chimeraMutt/gallery/202504A.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/chimeraMutt/gallery/202505.webp',  title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/chimeraMutt/gallery/202505A.webp', title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/chimeraMutt/gallery/202505B.webp', title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/chimeraMutt/gallery/202505C.webp', title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/chimeraMutt/gallery/202505D.webp', title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/chimeraMutt/gallery/202505E.webp', title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/chimeraMutt/gallery/202505F.webp', title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/chimeraMutt/gallery/202506.webp',  title: 'Jun 2025 - Sports Trade' },
        ]
    },
    {
        id: 'chrisTwo',
        name: 'Chris Two',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/chrisTwo/gallery/202412.webp',  title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/chrisTwo/gallery/202502.webp',  title: 'Feb 2025 - Space Trade' },
            { src: './img/char/chrisTwo/gallery/202503.webp',  title: 'Mar 2025 - Beach Episode Trade' }
        ]
    },
    {
        id: 'cino',
        name: 'Cino Bear',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/cino/gallery/202409.webp',  title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/cino/gallery/202409A.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/cino/gallery/202409B.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/cino/gallery/202409C.gif',  title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/cino/gallery/202410.webp',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/cino/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/cino/gallery/202505.webp',  title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/cino/gallery/202505A.webp', title: 'Apr 2025 - TCG Trade' }
        ]
    },
    {
        id: 'dlegoh',
        name: 'Dlegoh',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: []
    },
    {
        id: 'eclair',
        name: 'Eclair',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/eclair/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/eclair/gallery/202412.gif',   title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/eclair/gallery/202412A.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/eclair/gallery/202501.webp',  title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/eclair/gallery/202501A.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/eclair/gallery/202502.webp',  title: 'Feb 2025 - Space Trade' },
            { src: './img/char/eclair/gallery/202503.webp',  title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/eclair/gallery/202504.webp',  title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/eclair/gallery/202505.webp',  title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/eclair/gallery/202505A.webp',  title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/eclair/gallery/202506.webp',  title: 'Jun 2025 - Sports Trade' }
        ]
    },
    {
        id: 'eonSquabs',
        name: 'Franklin (EonSquabs)',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/eonSquabs/gallery/202409.webp',  title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/eonSquabs/gallery/202409A.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/eonSquabs/gallery/202410.webp',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/eonSquabs/gallery/202410A.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/eonSquabs/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/eonSquabs/gallery/202412.webp',  title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/eonSquabs/gallery/202501.webp',  title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/eonSquabs/gallery/202503.webp',  title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/eonSquabs/gallery/202503A.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/eonSquabs/gallery/202505.webp',  title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/eonSquabs/gallery/202506.webp',  title: 'Jun 2025 - Sports Trade' }
        ]
    },
    {
        id: 'frito',
        name: 'Dragon Frito',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/frito/gallery/202408.webp',  title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/frito/gallery/202409.webp',  title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/frito/gallery/202410.webp',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/frito/gallery/202410A.gif',   title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/frito/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/frito/gallery/202412.webp',  title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/frito/gallery/202501.webp',  title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/frito/gallery/202502.webp',  title: 'Feb 2025 - Space Trade' },
            { src: './img/char/frito/gallery/202503.webp',  title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/frito/gallery/202504.webp',  title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/frito/gallery/202505.webp',  title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/frito/gallery/202505A.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/frito/gallery/202506.webp',  title: 'Jun 2025 - Sports Trade' }
        ]
    },
    {
        id: 'gluten',
        name: 'Gluten',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/gluten/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/gluten/gallery/202501.webp',  title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/gluten/gallery/202502.webp',  title: 'Feb 2025 - Space Trade' },
            { src: './img/char/gluten/gallery/202502A.webp',  title: 'Feb 2025 - Space Trade' },
            { src: './img/char/gluten/gallery/202505.webp',  title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/gluten/gallery/202506.webp',  title: 'Jun 2025 - Sports Trade' }
        ]
    },
    {
        id: 'gnomater',
        name: 'Arnold (Gnomater)',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/gnomater/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/gnomater/gallery/202504.webp',  title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/gnomater/gallery/202504A.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/gnomater/gallery/202505.webp',  title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/gnomater/gallery/202505A.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/gnomater/gallery/202505B.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/gnomater/gallery/202505C.webp', title: 'Apr 2025 - TCG Trade' }
        ]
    },
    {
        id: 'hyaenaGemah',
        name: 'Gemah Lazarus Hyaena',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/hyaenaGemah/gallery/202408.webp',  title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/hyaenaGemah/gallery/202409.webp',  title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/hyaenaGemah/gallery/202410.webp',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/hyaenaGemah/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/hyaenaGemah/gallery/202411A.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/hyaenaGemah/gallery/202412.webp',  title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/hyaenaGemah/gallery/202501.webp',  title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/hyaenaGemah/gallery/202501A.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/hyaenaGemah/gallery/202502.webp',  title: 'Feb 2025 - Space Trade' },
            { src: './img/char/hyaenaGemah/gallery/202503.webp',  title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/hyaenaGemah/gallery/202504.webp',  title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/hyaenaGemah/gallery/202506.webp',  title: 'Jun 2025 - Sports Trade' }
        ]
    },
    {
        id: 'joey',
        name: 'Joey',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/joey/gallery/202408.webp',  title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/joey/gallery/202410.webp',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/joey/gallery/202412.webp',  title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/joey/gallery/202501.webp',  title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/joey/gallery/202501A.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/joey/gallery/202502.webp',  title: 'Feb 2025 - Space Trade' },
            { src: './img/char/joey/gallery/202503.webp',  title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/joey/gallery/202504.webp',  title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/joey/gallery/202505.gif',  title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/joey/gallery/202506.webp',  title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/joey/gallery/202506A.webp', title: 'Jun 2025 - Sports Trade' }
        ]
    },
    {
        id: 'kaby',
        name: 'Kaby (Toucan Juice)',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/kaby/gallery/202408.webp',  title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/kaby/gallery/202409.webp',  title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/kaby/gallery/202410.webp',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/kaby/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/kaby/gallery/202501.webp',  title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/kaby/gallery/202502.webp',  title: 'Feb 2025 - Space Trade' },
            { src: './img/char/kaby/gallery/202503.webp',  title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/kaby/gallery/202504.webp',  title: 'Apr 2025 - High Fantasy Trade' }
        ]
    },
    {
        id: 'logan',
        name: 'Logan',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/logan/gallery/202502.webp',  title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/logan/gallery/202502A.webp', title: 'Mar 2025 - Beach Episode Trade' }
        ]
    },
    {
        id: 'manny',
        name: 'Manny Marz',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/manny/gallery/202409.webp',  title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/manny/gallery/202410.webp',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/manny/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/manny/gallery/202412.webp',  title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/manny/gallery/202501.webp',  title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/manny/gallery/202502.webp',  title: 'Feb 2025 - Space Trade' },
            { src: './img/char/manny/gallery/202502A.gif',  title: 'Feb 2025 - Space Trade' },
            { src: './img/char/manny/gallery/202505.webp',  title: 'Apr 2025 - TCG Trade' }
        ]
    },
    {
        id: 'marcus',
        name: 'Marcus Benpaws',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/marcus/gallery/202410.webp',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/marcus/gallery/202410A.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/marcus/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/marcus/gallery/202501.webp',  title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/marcus/gallery/202503.webp',  title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/marcus/gallery/202504.webp',  title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/marcus/gallery/202505.webp',  title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/marcus/gallery/202505A.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/marcus/gallery/202506.webp',  title: 'Jun 2025 - Sports Trade' }
        ]
    },
    {
        id: 'matt',
        name: 'Matt',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/matt/gallery/202410.webp',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/matt/gallery/202410A.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/matt/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/matt/gallery/202412.webp',  title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/matt/gallery/202501.webp',  title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/matt/gallery/202502.webp',  title: 'Feb 2025 - Space Trade' }
        ]
    },
    {
        id: 'mundo',
        name: 'Raymundo',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/mundo/gallery/202408.webp',  title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/mundo/gallery/202410.webp',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/mundo/gallery/202410A.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/mundo/gallery/202504.webp',  title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/mundo/gallery/202504A.webp', title: 'Apr 2025 - High Fantasy Trade' }
        ]
    },
    {
        id: 'platano',
        name: 'Platano Gringo',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/platano/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/platano/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' }
        ]
    },
    {
        id: 'rami',
        name: 'Ramitas',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/rami/gallery/202506.webp', title: 'Jun 2025 - Sports Trade' }
        ]
    },
    {
        id: 'rawphael',
        name: 'Abner',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/rawphael/gallery/202408.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/rawphael/gallery/202409.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/rawphael/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/rawphael/gallery/202502.webp', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/rawphael/gallery/202503.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/rawphael/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/rawphael/gallery/202505.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/rawphael/gallery/202506.webp', title: 'Jun 2025 - Sports Trade' }
        ]
    },
    {
        id: 'sloppypasta',
        name: 'Joel (SloppyPasta)',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/sloppypasta/gallery/202408.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/sloppypasta/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/sloppypasta/gallery/202505.webp', title: 'Apr 2025 - TCG Trade' }
        ]
    },
    {
        id: 'sol',
        name: 'Sol',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/sol/gallery/202408.webp',  title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/sol/gallery/202409.webp',  title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/sol/gallery/202410.webp',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/sol/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/sol/gallery/202412.webp',  title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/sol/gallery/202501.webp',  title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/sol/gallery/202501A.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/sol/gallery/202502.webp',  title: 'Feb 2025 - Space Trade' },
            { src: './img/char/sol/gallery/202503.webp',  title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/sol/gallery/202503A.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/sol/gallery/202504.webp',  title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/sol/gallery/202505.webp',  title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/sol/gallery/202506.webp',  title: 'Jun 2025 - Sports Trade' }
        ]
    },
    {
        id: 'styx',
        name: 'Bobbie (Styx)',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/styx/gallery/202408.webp',  title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/styx/gallery/202408A.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/styx/gallery/202410.gif',   title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/styx/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/styx/gallery/202412.webp',  title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/styx/gallery/202501.webp',  title: 'Jan 2025 - Criminal Activity Trade' }
        ]
    },
    {
        id: 'tato',
        name: 'Tato Gato',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/tato/gallery/202408.webp',  title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/tato/gallery/202409.webp',  title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/tato/gallery/202410.webp',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/tato/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/tato/gallery/202412.webp',  title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/tato/gallery/202501.webp',  title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/tato/gallery/202502.webp',  title: 'Feb 2025 - Space Trade' },
            { src: './img/char/tato/gallery/202503.webp',  title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/tato/gallery/202504.webp',  title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/tato/gallery/202504A.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/tato/gallery/202505.webp',  title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/tato/gallery/202505A.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/tato/gallery/202505B.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/tato/gallery/202506.webp',  title: 'Jun 2025 - Sports Trade' }
        ]
    },
    {
        id: 'tonne',
        name: 'Polytonne',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/tonne/gallery/202410.webp',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/tonne/gallery/202410A.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/tonne/gallery/202411.webp',  title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/tonne/gallery/202501.webp',  title: 'Jan 2025 - Criminal Activity Trade' }
        ]
    },
    {
        id: 'yeesht',
        name: 'Yeesht',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/yeesht/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' }
        ]
    },
    {
        id: 'zack',
        name: 'Zack',
        superlative: '[Insert your superlative here]',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/zack/gallery/202503.webp', title: 'Mar 2025 - Beach Episode Trade' }
        ]
    },
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