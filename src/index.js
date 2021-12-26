import './styles/style.scss';
import PageLayout from './components/Layout/index';
import Button from './components/Button/index';

const app = document.querySelector('#app');

const btnSkateboard = Button('skate', 'skateboard', false, '', 'Skateboard');
const btnSkate = Button('skate', 'skateboard', true, './custom', 'Skateboard');
app.appendChild(PageLayout);
app.appendChild(btnSkateboard);
app.appendChild(btnSkate);
