
class Country
{
    Name;

    Language;

    Greeting;

    Colors;

    constructor(name, language, greeting, colors)
    {
        this.Name = name;

        this.Language = language;

        this.Greeting = greeting;

        this.Colors = colors;
    }

}

let countries = 
[
new Country('United States of America','Murican', 'Howdy there, World!', ['Red', 'White', 'Blue']), 
new Country('Ukraine','Ukrainian', 'Pryvit Svit!', ['Yellow', 'Blue']), 
new Country('Romania', 'Romanian', 'Salut Lume!', ['Blue', 'Yellow', 'Red']), 
new Country('China', 'Chinese(Mandarin)', 'Nǐ hǎo shìjiè!', ['Red', 'Yellow']), 
new Country('Italy','Italian', 'Ciao mondo!', ['Green', 'White', 'Red']), 
new Country('Australia', 'Aussie', 'Gday World!', ['Blue', 'White', 'Red']), 
new Country('Ethiopia', 'Amharic', 'Selami Li‘uli!', ['Green', 'Yellow', 'Red']), 
new Country('Brazil',  'Portuguese', 'Ola Mundo!', ['Green', 'Yellow', 'Blue']), 
new Country('Empire of Antarctica', 'Antarctican', 'Olleh Dlrow', ['Red', 'Black'])
];

function DisplayCountry(input)
{
    list = document.getElementById('listInfo');

    countryInput = countries.find(element => element.Name === input);

    if(countryInput === undefined)
    {
        list.innerHTML = "<center><li>I'm sorry, that country isn't in our database. Please try again!</li></center>";
    } 
    else if(countryInput.Colors.length === 2)
    {
        
        list.innerHTML = `<center><li>Name: ${countryInput.Name}</li><li>Language: ${countryInput.Language}</li><li>Example: ${countryInput.Greeting}</li><li>Colors: ${countryInput.Colors[0]}, ${countryInput.Colors[1]}</li></center>`;
    } 
    else 
    {
        list.innerHTML = `<center><li>Name: ${countryInput.Name}</li><li>Language: ${countryInput.Language}</li><li>Example: ${countryInput.Greeting}</li><li>Colors: ${countryInput.Colors[0]}, ${countryInput.Colors[1]}, ${countryInput.Colors[2]}</li></center>`;
    }

    DisplayColors(countryInput);

    DisplayFlag(countryInput);
}

function DisplayColors(countryInput)
{
    section1 = document.getElementById('section1');
    section2 = document.getElementById('section2');
    section3 = document.getElementById('section3');

    if(countryInput.Colors.length === 2) 
    {
        section1.style.backgroundColor = countryInput.Colors[0];
        section2.style.backgroundColor = "";
        section3.style.backgroundColor = countryInput.Colors[1];
    } 
    else 
    {
        section1.style.backgroundColor = countryInput.Colors[0];
        section2.style.backgroundColor = countryInput.Colors[1];
        section3.style.backgroundColor = countryInput.Colors[2];
    }

}

function DisplayFlag(countryInput) 
{
    container = document.getElementById('img-container');

    if(container.childNodes.length !== 0)
    {
        container.innerHTML = '';
    }

    const image = document.createElement('img');
    image.src = `${countryInput.Name}.webp`;

    if(countryInput.Name === 'Empire of Antarctica')
    {
        image.style.height = '35px';
        image.style.width = '60px';
    }

    container.appendChild(image);
}
