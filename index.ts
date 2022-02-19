// Import stylesheets
import { Person } from './person';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

let person = new Person(30, 'Neymar', 'Dos Santos', 'Jr');

appDiv.innerHTML = `
<h1>Aula 02</h1>
<div>nome: ${person.getFullName()}</div>
<div>ano em que nasceu: ${person.getBirthdayYear()}</div>
`;
