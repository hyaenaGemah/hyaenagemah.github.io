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
        id: 'start',
        name: 'The Bronx Zoo Yearbook',
        superlative: 'Goodbye, Bronx Zoo High!',
        portraits: ['./img/groupshot.webp', './img/select.webp'],
        gallery: []
    },
    {
        id: 'beardgator',
        name: 'Beardgator',
        superlative: '"Best friends" -Joel',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/beardgator/gallery/202408.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/beardgator/gallery/202409.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/beardgator/gallery/202410.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/beardgator/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/beardgator/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/beardgator/gallery/202412A.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/beardgator/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/beardgator/gallery/202502.webp', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/beardgator/gallery/202503.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/beardgator/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/beardgator/gallery/202505.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/beardgator/gallery/202506.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/beardgator/portrait.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'chimeraMutt',
        name: 'Micah/Jer',
        superlative: '"Best boy pillow" -Marcus',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/chimeraMutt/gallery/202408.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/chimeraMutt/gallery/202409.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/chimeraMutt/gallery/202410.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/chimeraMutt/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/chimeraMutt/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/chimeraMutt/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/chimeraMutt/gallery/202502.webp', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/chimeraMutt/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/chimeraMutt/gallery/202504A.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/chimeraMutt/gallery/202505.webp', title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/chimeraMutt/gallery/202505A.webp', title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/chimeraMutt/gallery/202505B.webp', title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/chimeraMutt/gallery/202505C.webp', title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/chimeraMutt/gallery/202505D.webp', title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/chimeraMutt/gallery/202505E.webp', title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/chimeraMutt/gallery/202505F.webp', title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/chimeraMutt/gallery/202506.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/chimeraMutt/portrait.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'dlegoh',
        name: 'Diego',
        superlative: '"Most likely to be a freak" -Frito',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/dlegoh/portrait.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'eclair',
        name: 'Eclair',
        superlative: '"Most nice <em>(most likely to dig in their butt)</em> " -Abner',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/eclair/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/eclair/gallery/202412.gif',  title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/eclair/gallery/202412A.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/eclair/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/eclair/gallery/202501A.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/eclair/gallery/202502.webp', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/eclair/gallery/202503.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/eclair/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/eclair/gallery/202505.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/eclair/gallery/202505A.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/eclair/gallery/202506.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/eclair/portrait.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'gluten',
        name: 'Gluten',
        superlative: '"Best to get stuck in an elevator with" -Tato',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/gluten/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/gluten/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/gluten/gallery/202502.webp', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/gluten/gallery/202502A.webp', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/gluten/gallery/202505.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/gluten/gallery/202506.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/gluten/portrait.webp', title: 'Jul 2025 - Yearbook Trade' },
            { src: './img/char/gluten/gallery/202507.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'gnomater',
        name: 'Arnold (Gnomater)',
        superlative: '"Most likely to react violently to tummy being touched" -Joey',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/gnomater/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/gnomater/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/gnomater/gallery/202504A.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/gnomater/gallery/202505.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/gnomater/gallery/202505A.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/gnomater/gallery/202505B.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/gnomater/gallery/202505C.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/gnomater/portrait.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'hyaenaGemah',
        name: 'Gemah Lazarus Hyaena',
        superlative: '"Most likely to take someone to brazil <em>(most nice)</em>" -Beardgator',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/hyaenaGemah/gallery/202408.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/hyaenaGemah/gallery/202409.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/hyaenaGemah/gallery/202410.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/hyaenaGemah/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/hyaenaGemah/gallery/202411A.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/hyaenaGemah/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/hyaenaGemah/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/hyaenaGemah/gallery/202501A.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/hyaenaGemah/gallery/202502.webp', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/hyaenaGemah/gallery/202503.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/hyaenaGemah/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/hyaenaGemah/gallery/202506.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/hyaenaGemah/portrait.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'joey',
        name: 'Joey',
        superlative: '"Prettiest hair" -Gluten',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/joey/gallery/202408.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/joey/gallery/202410.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/joey/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/joey/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/joey/gallery/202501A.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/joey/gallery/202502.webp', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/joey/gallery/202503.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/joey/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/joey/gallery/202505.gif', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/joey/gallery/202506.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/joey/gallery/202506A.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/joey/portrait.webp', title: 'Jul 2025 - Yearbook Trade' },
            { src: './img/char/joey/gallery/202507.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'kaby',
        name: 'Kaby (Toucan Juice)',
        superlative: '"Most likely to lay an egg" -Manny',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/kaby/gallery/202408.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/kaby/gallery/202409.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/kaby/gallery/202410.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/kaby/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/kaby/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/kaby/gallery/202502.webp', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/kaby/gallery/202503.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/kaby/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/kaby/portrait.webp', title: 'Jul 2025 - Yearbook Trade' },
            { src: './img/char/kaby/gallery/202507.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'manny',
        name: 'Manny Marz',
        superlative: '"Mosty likely to get arrested at a waffle house" -Micah',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/manny/gallery/202409.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/manny/gallery/202410.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/manny/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/manny/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/manny/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/manny/gallery/202502.webp', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/manny/gallery/202502A.gif', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/manny/gallery/202505.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/manny/portrait.webp', title: 'Jul 2025 - Yearbook Trade' },
            { src: './img/char/manny/gallery/202507.webp', title: 'Jul 2025 - Yearbook Trade', video: './img/char/manny/gallery/202507.mp4' }
        ]
    },
    {
        id: 'marcus',
        name: 'Marcus Benpaws',
        superlative: '"Teacher who is most likely to <em>bear</em> with us" -Gemah',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/marcus/gallery/202410.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/marcus/gallery/202410A.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/marcus/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/marcus/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/marcus/gallery/202503.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/marcus/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/marcus/gallery/202505.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/marcus/gallery/202505A.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/marcus/gallery/202506.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/marcus/portrait.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'rami',
        name: 'Ramitas',
        superlative: '"Biggest sonichead" -Kaby',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/rami/gallery/202506.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/rami/gallery/202507.webp', title: 'Jul 2025 - Yearbook Trade' },
            { src: './img/char/rami/portrait.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'rawphael',
        name: 'Abner',
        superlative: '"Most down to party" -EonSquabs',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/rawphael/gallery/202408.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/rawphael/gallery/202409.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/rawphael/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/rawphael/gallery/202502.webp', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/rawphael/gallery/202503.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/rawphael/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/rawphael/gallery/202505.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/rawphael/gallery/202506.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/rawphael/portrait.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'sloppypasta',
        name: 'Joel (SloppyPasta)',
        superlative: '"Most likely to rescue a novice adventurer" -Arnold',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/sloppypasta/gallery/202408.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/sloppypasta/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/sloppypasta/gallery/202505.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/sloppypasta/portrait.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'sol',
        name: 'Sol',
        superlative: '"Most likely to sleep through graduation" -Rami',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/sol/gallery/202408.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/sol/gallery/202409.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/sol/gallery/202410.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/sol/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/sol/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/sol/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/sol/gallery/202501A.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/sol/gallery/202502.webp', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/sol/gallery/202503.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/sol/gallery/202503A.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/sol/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/sol/gallery/202505.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/sol/gallery/202506.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/sol/portrait.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'tato',
        name: 'Tato Gato',
        superlative: '"Best baker" -Diego',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/tato/gallery/202408.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/tato/gallery/202409.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/tato/gallery/202410.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/tato/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/tato/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/tato/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/tato/gallery/202502.webp', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/tato/gallery/202503.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/tato/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/tato/gallery/202504A.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/tato/gallery/202505.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/tato/gallery/202505A.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/tato/gallery/202505B.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/tato/gallery/202506.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/tato/portrait.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'bin',
        name: 'Bin ',
        superlative: '"Best driver" -Eclair',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/bin/gallery/202408.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/bin/gallery/202409.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/bin/gallery/202410.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/bin/gallery/202410A.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/bin/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/bin/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/bin/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/bin/gallery/202502.webp', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/bin/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/bin/gallery/202505.webp', title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/bin/gallery/202505A.webp', title: 'Jun 2025 - TCG Trade' },
            { src: './img/char/bin/gallery/202506.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/bin/gallery/202506A.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/bin/gallery/202506B.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/bin/portrait.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'eonSquabs',
        name: 'Franklin (EonSquabs)',
        superlative: '"Most likely to join a cult" -Sol',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/eonSquabs/gallery/202409.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/eonSquabs/gallery/202409A.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/eonSquabs/gallery/202410.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/eonSquabs/gallery/202410A.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/eonSquabs/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/eonSquabs/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/eonSquabs/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/eonSquabs/gallery/202503.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/eonSquabs/gallery/202503A.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/eonSquabs/gallery/202505.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/eonSquabs/gallery/202506.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/eonSquabs/portrait.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'frito',
        name: 'Dragon Frito',
        superlative: '"Most likely to start a cult" -Bin',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/frito/gallery/202408.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/frito/gallery/202409.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/frito/gallery/202410.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/frito/gallery/202410A.gif',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/frito/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/frito/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/frito/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/frito/gallery/202502.webp', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/frito/gallery/202503.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/frito/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/frito/gallery/202505.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/frito/gallery/202505A.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/frito/gallery/202506.webp', title: 'Jun 2025 - Sports Trade' },
            { src: './img/char/frito/portrait.webp', title: 'Jul 2025 - Yearbook Trade' }
        ]
    },
    {
        id: 'separator'
    },
    {
        id: 'bobba',
        name: 'Bobba',
        superlative: '"Slurping, rather than spilling the tea"',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/bobba/gallery/202410.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/bobba/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' }
        ]
    },
    {
        id: 'chrisTwo',
        name: 'Chris Two',
        superlative: '"Chill as always"',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/chrisTwo/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/chrisTwo/gallery/202502.webp', title: 'Feb 2025 - Space Trade' },
            { src: './img/char/chrisTwo/gallery/202503.webp', title: 'Mar 2025 - Beach Episode Trade' }
        ]
    },
    {
        id: 'cino',
        name: 'Cino Bear',
        superlative: '"Taking it easier this time..."',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/cino/gallery/202409.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/cino/gallery/202409A.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/cino/gallery/202409B.webp', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/cino/gallery/202409C.gif', title: 'Sep 2024 - Mecha Trade' },
            { src: './img/char/cino/gallery/202410.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/cino/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/cino/gallery/202505.webp', title: 'Apr 2025 - TCG Trade' },
            { src: './img/char/cino/gallery/202505A.webp', title: 'Apr 2025 - TCG Trade' }
        ]
    },
    {
        id: 'logan',
        name: 'Logan (Yado)',
        superlative: '"Asserting dominance!?"',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/logan/gallery/202502.webp', title: 'Mar 2025 - Beach Episode Trade' },
            { src: './img/char/logan/gallery/202502A.webp', title: 'Mar 2025 - Beach Episode Trade' }
        ]
    },
    {
        id: 'matt',
        name: 'Matt',
        superlative: '"Simply fabulous"',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/matt/gallery/202410.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/matt/gallery/202410A.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/matt/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/matt/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/matt/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' },
            { src: './img/char/matt/gallery/202502.webp', title: 'Feb 2025 - Space Trade' }
        ]
    },
    {
        id: 'mundo',
        name: 'Raymundo',
        superlative: '"Backstabbing in Souls games when you\'re not looking"',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/mundo/gallery/202408.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/mundo/gallery/202410.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/mundo/gallery/202410A.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/mundo/gallery/202504.webp', title: 'Apr 2025 - High Fantasy Trade' },
            { src: './img/char/mundo/gallery/202504A.webp', title: 'Apr 2025 - High Fantasy Trade' }
        ]
    },
    {
        id: 'platano',
        name: 'Platano Gringo',
        superlative: '"Tales have that he appears every blue moon..."',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/platano/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/platano/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' }
        ]
    },
    {
        id: 'styx',
        name: 'Bobbie (Styx)',
        superlative: '"Crashing in from the sea!"',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/styx/gallery/202408.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/styx/gallery/202408A.webp', title: 'Aug 2024 - Pokemon Trade' },
            { src: './img/char/styx/gallery/202410.gif',  title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/styx/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/styx/gallery/202412.webp', title: 'Dec 2024 - Winter Trade' },
            { src: './img/char/styx/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' }
        ]
    },
    {
        id: 'tonne',
        name: 'Polytonne',
        superlative: '"Playing a sweet tune"',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/tonne/gallery/202410.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/tonne/gallery/202410A.webp', title: 'Oct 2024 - Halloween Trade' },
            { src: './img/char/tonne/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' },
            { src: './img/char/tonne/gallery/202501.webp', title: 'Jan 2025 - Criminal Activity Trade' }
        ]
    },
    {
        id: 'yeesht',
        name: 'Yeesht',
        superlative: '"Looking bright as usual"',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/yeesht/gallery/202411.webp', title: 'Nov 2024 - Music Albums Trade' }
        ]
    },
    {
        id: 'zack',
        name: 'Zack',
        superlative: '"Last but not the least"',
        portraits: ['portrait.webp', 'select.webp'],
        gallery: [
            { src: './img/char/zack/gallery/202503.webp', title: 'Mar 2025 - Beach Episode Trade' }
        ]
    }
];

const selectContainer = document.getElementById('selector');

characters.forEach(char => {
    if (char.id !== 'separator') {
        const btn = document.createElement('button');
        btn.classList.add('charBtn');
        btn.type = 'button';
        btn.innerHTML = char.id === 'start' ?
            `<img src="${char.portraits[1]}" style="border: none; border-radius: 8px;" height="64" width="64" />` :
            `<img src="./img/char/${char.id}/${char.portraits[1]}" style="border: none; border-radius: 8px;" height="64" width="64" />`;
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
            port.src = char.id === 'start' ? char.portraits[0] : `./img/char/${char.id}/${char.portraits[0]}`;
            port.alt = char.name;

            // Gallery behavior
            const gallery = document.getElementById('charGallery');
            gallery.innerHTML = '';
            
            for (let i = 0; i < char.gallery.length; i++) {
                if (char.gallery[i].video) {
                    gallery.innerHTML += `<a class="a-picture" title="${char.gallery[i].title} (Animated)" onclick="showVideo('${char.gallery[i].video}')">
                        <img src="${char.gallery[i].src}" alt="${char.gallery[i].title}" />
                    </a>`;
                } else {
                    gallery.innerHTML += `<a class="a-picture" href="${char.gallery[i].src}" title="${char.gallery[i].title}">
                        <img src="${char.gallery[i].src}" alt="${char.gallery[i].title}" />
                    </a>`;
                }
            }

            if (char.gallery.length === 0) {
                gallery.innerHTML = char.id === 'start' ?
                    `<div style="font-size: 24px; text-align: left; color: #127f60; padding: 16px;">
                        <ul>
                            <li>General idea and stuff: Beardgator &amp; Cino Bear
                            <li>Website: HyaenaGemah</li>
                            <li>Background animation: MannyMarz</li>
                            <li>Songs from: Ihatovo Monogatari Arranged Soundtrack</li>
                            <li>Special thanks: Everyone who participated in the trades that happened as of August, 2024 to now (July, 2025)!
                        </ul>
                        <br/>
                        <p style="padding-left: 28px;">Copyrighted content were used under fair-use, with no commercial content intended. This site was built just for fun!</p>
                    </div>` :
                    '<span style="font-size: 24px;">No previous pictures were found</span>'
            }

            new SimpleLightbox({
                elements: '#charGallery a',

            });

            // Sound behavior
            const sfxSel = document.getElementById('sfxClick');
            sfxSel.pause();
            sfxSel.currentTime = 0;
            sfxSel.play();
        };
        selectContainer.append(btn);
    } else {
        const lineBreak = document.createElement('br');
        selectContainer.append(lineBreak);
    }
    
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

const showVideo = (src) => {
    SimpleLightbox.open({
        content: `<div style="height: 900px; width: 1600px;">
            <video width="1600" height="900" controls>
                <source type="video/mp4" src="${src}">
            </video>
        </div>`
    });
};

// Main
showVideo('./img/Art_trade_logo_FINAL.mp4');
