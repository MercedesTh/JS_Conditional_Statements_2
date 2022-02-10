// Aufgabe 1 Conditional Statements 2.2 Lev2_5 //

let bd = document.getElementById("bundeslandInfo");
let out = document.getElementById("bundeslandInfoErgebnis");

function check() {
    console.log("test1");

    let newBd = bd.value.toLowerCase();

    switch (newBd) {
        case "baden-württemberg":
            out.innerHTML = `<h1>Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt</h1>`;

            break;

        case "bayern":
            out.innerHTML = `<h1>Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt</h1>`;

            break;

        case "berlin":
            out.innerHTML = `<h1>Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt</h1>`;

            break;

        case "brandenburg":
            out.innerHTML = `<h1>Brandenburg hat 12,844 Mio Einwohner und München ist die Hauptstadt</h1>`;

            break;

        case "bremen":
            out.innerHTML = `<h1>Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt</h1>`;

            break;

        case "hamburg":
            out.innerHTML = `<h1>Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt</h1>`;

            break;

        case "hessen":
            out.innerHTML = `<h1>Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt</h1>`;

            break;

        case "mecklenburg-vorpommern":
            out.innerHTML = `<h1>Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt</h1>`;

            break;

        case "niedersachsen":
            out.innerHTML = `<h1>Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt</h1>`;

            break;

        case "nordrhein-Westfalen":
            out.innerHTML = `<h1>Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt</h1>`;

            break;

        case "rheinland-Pfalz ":
            out.innerHTML = `<h1>Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt</h1>`;

            break;

        case "saarland":
            out.innerHTML = `<h1>Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt</h1>`;

            break;

        case "sachsen":
            out.innerHTML = `<h1>Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt</h1>`;

            break;

        case "sachsen-anhalt":
            out.innerHTML = `<h1>Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt</h1>`;

            break;

        case "schleswig-holstein":
            out.innerHTML = `<h1>Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt</h1>`;

            break;

        case "schleswig-holstein":
            out.innerHTML = `<h1>Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt</h1>`;

            break;

        case "thüringen":
            out.innerHTML = `<h1>Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt</h1>`;

            break;

        default:
            out.innerHTML = `<h1>Ein solches Bundesland gibt es in Deutschland nicht.</h1>`;

            break;
    }
}