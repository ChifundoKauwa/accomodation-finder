const Dashboard = [];
renderDashboard();
function renderDashboard(){


let meHTML = '';
for(i = 0; i < Dashboard.length; i++){
    const Dashboard = Dashboard[i];
    const html = '<p>!${Dashboard}</p>';
    DashboardHTML += html;
}
console.log(DashboardHTML);
Document.querySelector('.js-location-input')
.innerHTML = DashboardHTML
}
function addDashboard (){
const inputelement = document.querySelector('.js-location-input');
const location = inputelement.value;
Dashboard.push(Dashboard);
console.log(Dashboard);
inputelement.value = '';
renderDashboard();    
}
