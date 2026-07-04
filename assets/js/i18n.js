/* ============================================
   i18n – Language Toggle  (DE / EN)
   Persists choice in localStorage.
   Usage: add data-i18n="key" to any element.
   ============================================ */
(function () {
    var STORAGE_KEY = 'lang';
    var DEFAULT     = 'de';

    var t = {
        de: {
            /* ---- Navigation ---- */
            'nav.allApps':    'Alle Apps',
            'nav.features':   'Features',
            'nav.gamemodes':  'Spielmodi',
            'nav.download':   'Download',
            'nav.support':    'Support',
            'nav.privacy':    'Datenschutz',
            'nav.terms':      'Nutzungsbedingungen',
            'nav.imprint':    'Impressum',
            'nav.54':         '54',
            'nav.dartscorer': 'DartScorer',
            'nav.schocken':   'Schocken',

            /* ---- Common buttons / labels ---- */
            'btn.downloadNow': 'Jetzt herunterladen',
            'btn.learnMore':   'Mehr erfahren',
            'btn.toAppPage':   'Zur App-Seite',
            'btn.appStore':    'App Store',
            'btn.googlePlay':  'Google Play',

            /* ---- Common support section ---- */
            'support.intro':   'Hast du Fragen, Feedback oder technische Probleme? Wir helfen gerne weiter!',
            'support.email':   'E-Mail:',
            'support.link':    'Support-Seite',
            'support.privacy': 'Datenschutzerklärung',
            'support.terms':   'Nutzungsbedingungen',
            'support.imprint': 'Impressum',

            /* ---- Index page ---- */
            'index.h1':            'Apps von Moritz Karrasch',
            'index.hero.h2':       'Spiele-Apps für iOS & Android',
            'index.hero.subtitle': 'Entdecke hochwertige Apps – entwickelt mit Leidenschaft für ein tolles Spielerlebnis.',
            'index.footer':        '© 2026 Moritz Karrasch. Alle Rechte vorbehalten.',

            /* index – FiftyFour card */
            'ff.card.h3':    '54 – Das Würfelspiel',
            'ff.card.claim': 'Das klassische Würfelspiel für unterwegs',
            'ff.card.f1':    'Lokaler & Online-Multiplayer',
            'ff.card.f2':    'Computer-Gegner mit 5 Schwierigkeitsstufen',
            'ff.card.f3':    'Spielerprofile & Statistiken',
            'ff.card.f4':    'Verschiedene Themes & Würfelfarben',

            /* index – DartScorer card */
            'ds.card.h3':    'DartScorer',
            'ds.card.claim': 'Dein digitales Dart-Scoreboard',
            'ds.card.f1':    '10 Spielmodi: X01, Cricket, Shanghai u.v.m.',
            'ds.card.f2':    'Computer-Gegner mit 5 Schwierigkeitsstufen',
            'ds.card.f3':    'Checkout-Vorschläge & Spielstatistiken',
            'ds.card.f4':    'Verschiedene Themes & Sound-Effekte',

            /* index – Schocken card */
            'sc.card.h3':    'Schocken – Das Würfelspiel',
            'sc.card.claim': 'Das klassische Kneipen-Würfelspiel',
            'sc.card.f1':    'Lokaler & Online-Multiplayer',
            'sc.card.f2':    'Computer-Gegner mit 5 Schwierigkeitsstufen',
            'sc.card.f3':    'Hausregeln: Jule, Schummeln, Mauern u.v.m.',
            'sc.card.f4':    'Detaillierte Wurf-Statistiken & Themes',

            /* ---- FiftyFour page ---- */
            'ff.h1':             '54 – Das Würfelspiel',
            'ff.hero.h2':        'Das klassische Würfelspiel',
            'ff.hero.subtitle':  'Erlebe den Nervenkitzel von 54 – dem zeitlosen Würfelspiel für unterwegs. Spiele gegen Freunde, Familie oder Computer-Gegner.',
            'ff.features.h2':    'Warum 54?',
            'ff.f1.h3': 'Einfach & Spaßig',       'ff.f1.p': 'Schnell zu lernen, schwer zu meistern. Das perfekte Spiel für zwischendurch.',
            'ff.f2.h3': 'Multiplayer',              'ff.f2.p': 'Spiele mit Freunden oder Familie – lokal am selben Gerät oder online per Join-Code.',
            'ff.f3.h3': 'Computer-Gegner',          'ff.f3.p': 'Spiele alleine gegen intelligente KI-Gegner mit 5 Schwierigkeitsstufen.',
            'ff.f4.h3': 'Personalisierbar',         'ff.f4.p': 'Wähle aus verschiedenen Würfelfarben und Designs – jeder Spieler mit eigenem Stil.',
            'ff.f5.h3': 'Statistiken',              'ff.f5.p': 'Verfolge deine Siege, Niederlagen und Würfel-Performance über alle Spiele hinweg.',
            'ff.f6.h3': 'Dark Mode',                'ff.f6.p': 'Mehrere Themes inklusive Dark Mode und atmosphärischem Tavern-Design.',
            'ff.steps.h2': "So funktioniert's",
            'ff.s1.h3': 'Spieler hinzufügen',  'ff.s1.p': 'Erstelle Profile für alle Mitspieler oder füge Computer-Gegner hinzu.',
            'ff.s2.h3': 'Würfeln',             'ff.s2.p': 'Würfle und sammle Punkte – aber Vorsicht vor der Sechs!',
            'ff.s3.h3': 'Taktieren',           'ff.s3.p': 'Sichere deine Punkte rechtzeitig oder riskiere einen weiteren Wurf.',
            'ff.s4.h3': 'Gewinnen',            'ff.s4.p': 'Erreiche als Erster 54 Punkte und gewinne das Spiel!',
            'ff.download.h2': 'Jetzt herunterladen',
            'ff.download.p':  '54 ist verfügbar für iOS und Android.',
            'ff.support.h2':  'Support & Kontakt',
            'ff.footer':      '© 2026 Moritz Karrasch – 54 Das Würfelspiel. Alle Rechte vorbehalten.',

            /* ---- DartScorer page ---- */
            'ds.h1':             'DartScorer',
            'ds.hero.h2':        'Dein digitales Dart-Scoreboard',
            'ds.hero.subtitle':  'DartScorer hilft dir, Dartspiele einfach und übersichtlich zu zählen. Mit 10 Spielmodi, Computergegnern, Checkout-Vorschlägen und detaillierten Statistiken.',
            'ds.features.h2':    'Features',
            'ds.f1.h3': '10 Spielmodi',          'ds.f1.p': 'X01, Cricket, Shanghai, Around the Clock, HalveIt, Shooter, Elimination und Highscore.',
            'ds.f2.h3': 'Computer-Gegner',       'ds.f2.p': 'Spiele alleine gegen KI-Gegner mit 5 Schwierigkeitsstufen – von Anfänger bis Profi.',
            'ds.f3.h3': 'Checkout-Vorschläge',   'ds.f3.p': 'Im X01-Modus zeigt dir die App in Echtzeit die besten Wege zum Checkout an.',
            'ds.f4.h3': 'Spielstatistiken',      'ds.f4.p': 'Verfolge deine Leistung mit detaillierten Statistiken für jeden Spielmodus.',
            'ds.f5.h3': 'Spielerprofile',        'ds.f5.p': 'Erstelle Profile für alle Mitspieler und verwalte ihre Statistiken über mehrere Spiele.',
            'ds.f6.h3': 'Themes & Sound',        'ds.f6.p': 'Mehrere Designs inklusive Dark Mode und Tavern-Optik. Inklusive Sound-Effekte und haptischem Feedback.',
            'ds.gamemodes.h2': 'Spielmodi',
            'ds.m1.h3': 'X01',                   'ds.m1.p': '301, 501, 701, 901 – mit konfigurierbaren Check-In/Check-Out-Regeln, Sets & Legs.',
            'ds.m2.h3': 'Cricket',               'ds.m2.p': 'Markiere die Zahlen 15–20 und Bull, um Punkte zu sammeln.',
            'ds.m3.h3': 'Around the Clock',      'ds.m3.p': 'Triff jede Zahl von 1 bis 20 der Reihe nach und schließe mit dem Bull ab.',
            'ds.m4.h3': 'Shanghai',              'ds.m4.p': 'Pro Runde zählt nur eine Zahl – erziele die höchste Gesamtpunktzahl.',
            'ds.m5.h3': 'HalveIt / Splitscore',  'ds.m5.p': 'Triff die vorgegebenen Ziele – oder dein Punktestand wird halbiert.',
            'ds.m6.h3': 'Shooter',               'ds.m6.p': 'Punkteduell auf einzelne Zielzahlen – wer trifft besser?',
            'ds.m7.h3': 'Elimination',           'ds.m7.p': 'Wer das Ziel verfehlt, fliegt raus – runden- oder wurfbasiert.',
            'ds.m8.h3': 'Highscore',             'ds.m8.p': 'Freies Scoring – erziele die höchste Gesamtpunktzahl.',
            'ds.steps.h2': "So funktioniert's",
            'ds.s1.h3': 'Spielmodus wählen',  'ds.s1.p': 'Wähle aus 10 verschiedenen Dart-Spielmodi deinen Favoriten.',
            'ds.s2.h3': 'Spieler hinzufügen', 'ds.s2.p': 'Erstelle Spielerprofile oder füge Computer-Gegner hinzu.',
            'ds.s3.h3': 'Spiel konfigurieren','ds.s3.p': 'Passe Regeln, Sets, Legs und Spieloptionen nach Wunsch an.',
            'ds.s4.h3': 'Spielen & Tracken',  'ds.s4.p': 'Gib deine Würfe ein und lass die App den Rest erledigen.',
            'ds.download.h2': 'Jetzt herunterladen',
            'ds.download.p':  'DartScorer ist verfügbar für iOS und Android.',
            'ds.support.h2':  'Support & Kontakt',
            'ds.footer':      '© 2026 Moritz Karrasch – DartScorer. Alle Rechte vorbehalten.',

            /* ---- Schocken page ---- */
            'sc.h1':             'Schocken – Das Würfelspiel',
            'sc.hero.h2':        'Das klassische Kneipen-Würfelspiel',
            'sc.hero.subtitle':  'Schock aus, Jule, Straße – erlebe Schocken wie am Stammtisch. Spiele gegen Freunde, Familie oder Computer-Gegner, offline am selben Gerät oder online per Join-Code.',
            'sc.features.h2':    'Warum Schocken?',
            'sc.f1.h3': 'Echtes Stammtisch-Gefühl',  'sc.f1.p': 'Deckel, Hälften und Finale – die klassischen Schocken-Regeln, originalgetreu umgesetzt im Tavern-Look.',
            'sc.f2.h3': 'Multiplayer',               'sc.f2.p': 'Spiele mit Freunden oder Familie – lokal am selben Gerät oder online per Join-Code bzw. QR-Code.',
            'sc.f3.h3': 'Computer-Gegner',           'sc.f3.p': 'Spiele alleine gegen KI-Gegner mit 5 Schwierigkeitsstufen, die Schocks jagen wie echte Mitspieler.',
            'sc.f4.h3': 'Hausregeln',                'sc.f4.p': 'Jule, Schummeln, Mauern, „Erster steht" und mehr – stelle die Regeln so ein, wie ihr sie kennt.',
            'sc.f5.h3': 'Statistiken',               'sc.f5.p': 'Verfolge Schocks, Generäle, Straßen, Handschock-Quote und mehr – für jeden Spieler einzeln.',
            'sc.f6.h3': 'Personalisierbar',          'sc.f6.p': 'Verschiedene Themes inklusive Holz-Optik und viele Würfelfarben – jeder Spieler mit eigenem Stil.',
            'sc.steps.h2': "So funktioniert's",
            'sc.s1.h3': 'Spieler hinzufügen', 'sc.s1.p': 'Erstelle Profile für alle Mitspieler oder füge Computer-Gegner hinzu.',
            'sc.s2.h3': 'Augen auf',           'sc.s2.p': 'Alle würfeln einmal – der beste Wurf beginnt das Spiel.',
            'sc.s3.h3': 'Schocks jagen',       'sc.s3.p': 'Bis zu drei Würfe pro Zug – wer den schlechtesten Wurf hat, kassiert die Deckel.',
            'sc.s4.h3': 'Finale',              'sc.s4.p': 'Wer beide Hälften verliert, hat verloren – sonst entscheidet das Finale!',
            'sc.download.h2': 'Jetzt herunterladen',
            'sc.download.p':  'Schocken ist verfügbar für Android – die iOS-Version folgt in Kürze.',
            'sc.support.h2':  'Support & Kontakt',
            'sc.footer':      '© 2026 Moritz Karrasch – Schocken Das Würfelspiel. Alle Rechte vorbehalten.',
        },

        en: {
            /* ---- Navigation ---- */
            'nav.allApps':    'All Apps',
            'nav.features':   'Features',
            'nav.gamemodes':  'Game Modes',
            'nav.download':   'Download',
            'nav.support':    'Support',
            'nav.privacy':    'Privacy',
            'nav.terms':      'Terms',
            'nav.imprint':    'Imprint',
            'nav.54':         '54',
            'nav.dartscorer': 'DartScorer',
            'nav.schocken':   'Schocken',

            /* ---- Common buttons / labels ---- */
            'btn.downloadNow': 'Download Now',
            'btn.learnMore':   'Learn More',
            'btn.toAppPage':   'View App',
            'btn.appStore':    'App Store',
            'btn.googlePlay':  'Google Play',

            /* ---- Common support section ---- */
            'support.intro':   "Got questions, feedback or technical issues? We're happy to help!",
            'support.email':   'Email:',
            'support.link':    'Support Page',
            'support.privacy': 'Privacy Policy',
            'support.terms':   'Terms of Use',
            'support.imprint': 'Imprint',

            /* ---- Index page ---- */
            'index.h1':            'Apps by Moritz Karrasch',
            'index.hero.h2':       'Gaming Apps for iOS & Android',
            'index.hero.subtitle': 'Discover high-quality apps – crafted with passion for a great gaming experience.',
            'index.footer':        '© 2026 Moritz Karrasch. All rights reserved.',

            /* index – FiftyFour card */
            'ff.card.h3':    '54 – The Dice Game',
            'ff.card.claim': 'The classic dice game for on the go',
            'ff.card.f1':    'Local & Online Multiplayer',
            'ff.card.f2':    'AI opponents with 5 difficulty levels',
            'ff.card.f3':    'Player profiles & statistics',
            'ff.card.f4':    'Various themes & dice colors',

            /* index – DartScorer card */
            'ds.card.h3':    'DartScorer',
            'ds.card.claim': 'Your digital dart scoreboard',
            'ds.card.f1':    '10 game modes: X01, Cricket, Shanghai & more',
            'ds.card.f2':    'AI opponents with 5 difficulty levels',
            'ds.card.f3':    'Checkout suggestions & game statistics',
            'ds.card.f4':    'Various themes & sound effects',

            /* index – Schocken card */
            'sc.card.h3':    'Schocken – The Dice Game',
            'sc.card.claim': 'The classic pub dice game',
            'sc.card.f1':    'Local & Online Multiplayer',
            'sc.card.f2':    'AI opponents with 5 difficulty levels',
            'sc.card.f3':    'House rules: Jule, Cheating, Blocking & more',
            'sc.card.f4':    'Detailed throw statistics & themes',

            /* ---- FiftyFour page ---- */
            'ff.h1':             '54 – The Dice Game',
            'ff.hero.h2':        'The Classic Dice Game',
            'ff.hero.subtitle':  'Experience the thrill of 54 – the timeless dice game for on the go. Play against friends, family or AI opponents.',
            'ff.features.h2':    'Why 54?',
            'ff.f1.h3': 'Simple & Fun',      'ff.f1.p': 'Quick to learn, hard to master. The perfect game for any occasion.',
            'ff.f2.h3': 'Multiplayer',       'ff.f2.p': 'Play with friends or family – locally on the same device or online via join code.',
            'ff.f3.h3': 'AI Opponents',      'ff.f3.p': 'Play solo against intelligent AI opponents with 5 difficulty levels.',
            'ff.f4.h3': 'Customizable',      'ff.f4.p': 'Choose from various dice colors and designs – each player with their own style.',
            'ff.f5.h3': 'Statistics',        'ff.f5.p': 'Track your wins, losses and dice performance across all games.',
            'ff.f6.h3': 'Dark Mode',         'ff.f6.p': 'Multiple themes including dark mode and an atmospheric tavern design.',
            'ff.steps.h2': 'How It Works',
            'ff.s1.h3': 'Add Players',    'ff.s1.p': 'Create profiles for all players or add AI opponents.',
            'ff.s2.h3': 'Roll the Dice',  'ff.s2.p': 'Roll and collect points – but beware of the six!',
            'ff.s3.h3': 'Strategize',     'ff.s3.p': 'Secure your points in time or risk another roll.',
            'ff.s4.h3': 'Win',            'ff.s4.p': 'Be the first to reach 54 points and win the game!',
            'ff.download.h2': 'Download Now',
            'ff.download.p':  '54 is available for iOS and Android.',
            'ff.support.h2':  'Support & Contact',
            'ff.footer':      '© 2026 Moritz Karrasch – 54 The Dice Game. All rights reserved.',

            /* ---- DartScorer page ---- */
            'ds.h1':             'DartScorer',
            'ds.hero.h2':        'Your Digital Dart Scoreboard',
            'ds.hero.subtitle':  'DartScorer helps you keep score for dart games easily and clearly. With 10 game modes, AI opponents, checkout suggestions and detailed statistics.',
            'ds.features.h2':    'Features',
            'ds.f1.h3': '10 Game Modes',           'ds.f1.p': 'X01, Cricket, Shanghai, Around the Clock, HalveIt, Shooter, Elimination and Highscore.',
            'ds.f2.h3': 'AI Opponents',            'ds.f2.p': 'Play solo against AI opponents with 5 difficulty levels – from beginner to pro.',
            'ds.f3.h3': 'Checkout Suggestions',   'ds.f3.p': 'In X01 mode, the app shows you the best checkout routes in real time.',
            'ds.f4.h3': 'Game Statistics',        'ds.f4.p': 'Track your performance with detailed statistics for each game mode.',
            'ds.f5.h3': 'Player Profiles',        'ds.f5.p': 'Create profiles for all players and manage their statistics across multiple games.',
            'ds.f6.h3': 'Themes & Sound',         'ds.f6.p': 'Multiple designs including dark mode and tavern look. Includes sound effects and haptic feedback.',
            'ds.gamemodes.h2': 'Game Modes',
            'ds.m1.h3': 'X01',                  'ds.m1.p': '301, 501, 701, 901 – with configurable check-in/check-out rules, sets & legs.',
            'ds.m2.h3': 'Cricket',              'ds.m2.p': 'Mark numbers 15–20 and Bull to score points.',
            'ds.m3.h3': 'Around the Clock',    'ds.m3.p': 'Hit each number from 1 to 20 in order and finish with the Bull.',
            'ds.m4.h3': 'Shanghai',             'ds.m4.p': 'Only one number counts per round – achieve the highest total score.',
            'ds.m5.h3': 'HalveIt / Splitscore','ds.m5.p': 'Hit the given targets – or your score gets halved.',
            'ds.m6.h3': 'Shooter',             'ds.m6.p': 'Point duel on individual target numbers – who scores better?',
            'ds.m7.h3': 'Elimination',         'ds.m7.p': "Miss the target and you're out – round- or throw-based.",
            'ds.m8.h3': 'Highscore',           'ds.m8.p': 'Free scoring – achieve the highest total score.',
            'ds.steps.h2': 'How It Works',
            'ds.s1.h3': 'Choose Game Mode', 'ds.s1.p': 'Pick your favorite from 10 different dart game modes.',
            'ds.s2.h3': 'Add Players',      'ds.s2.p': 'Create player profiles or add AI opponents.',
            'ds.s3.h3': 'Configure Game',   'ds.s3.p': 'Adjust rules, sets, legs and game options as you wish.',
            'ds.s4.h3': 'Play & Track',     'ds.s4.p': 'Enter your throws and let the app do the rest.',
            'ds.download.h2': 'Download Now',
            'ds.download.p':  'DartScorer is available for iOS and Android.',
            'ds.support.h2':  'Support & Contact',
            'ds.footer':      '© 2026 Moritz Karrasch – DartScorer. All rights reserved.',

            /* ---- Schocken page ---- */
            'sc.h1':             'Schocken – The Dice Game',
            'sc.hero.h2':        'The Classic Pub Dice Game',
            'sc.hero.subtitle':  'Schock aus, Jule, Straße – experience Schocken just like at the local pub. Play against friends, family or AI opponents, locally or online via join code.',
            'sc.features.h2':    'Why Schocken?',
            'sc.f1.h3': 'Authentic Pub Atmosphere', 'sc.f1.p': 'Cups, halves and finale – the classic Schocken rules, faithfully recreated in tavern style.',
            'sc.f2.h3': 'Multiplayer',              'sc.f2.p': 'Play with friends or family – locally on the same device or online via join code or QR code.',
            'sc.f3.h3': 'AI Opponents',             'sc.f3.p': 'Play solo against AI opponents with 5 difficulty levels who chase Schocks like real players.',
            'sc.f4.h3': 'House Rules',              'sc.f4.p': 'Jule, Cheating, Blocking, "First one pays" and more – set the rules the way you know them.',
            'sc.f5.h3': 'Statistics',               'sc.f5.p': 'Track Schocks, Generals, Streets, hand-Schock rate and more – individually for each player.',
            'sc.f6.h3': 'Customizable',             'sc.f6.p': 'Various themes including wood look and many dice colors – each player with their own style.',
            'sc.steps.h2': 'How It Works',
            'sc.s1.h3': 'Add Players',    'sc.s1.p': 'Create profiles for all players or add AI opponents.',
            'sc.s2.h3': 'Eyes Open',      'sc.s2.p': 'Everyone rolls once – the best roll starts the game.',
            'sc.s3.h3': 'Chase Schocks',  'sc.s3.p': 'Up to three rolls per turn – whoever has the worst roll gets the chips.',
            'sc.s4.h3': 'Finale',         'sc.s4.p': 'Whoever loses both halves has lost – otherwise the finale decides!',
            'sc.download.h2': 'Download Now',
            'sc.download.p':  'Schocken is available for Android – the iOS version is coming soon.',
            'sc.support.h2':  'Support & Contact',
            'sc.footer':      '© 2026 Moritz Karrasch – Schocken The Dice Game. All rights reserved.',
        }
    };

    function getLang() {
        return localStorage.getItem(STORAGE_KEY) || DEFAULT;
    }

    function applyLang(lang) {
        var dict = t[lang] || t[DEFAULT];
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });
        document.documentElement.lang = lang;
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    function setLang(lang) {
        localStorage.setItem(STORAGE_KEY, lang);
        applyLang(lang);
    }

    function init() {
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
        });
        applyLang(getLang());
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
