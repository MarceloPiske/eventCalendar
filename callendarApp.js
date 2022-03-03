let event_callendar;

document.addEventListener('drag', function(event) {
    
})

document.addEventListener('dragstart', e => {
    console.log("arrastei");
    event_callendar = e.target
})

document.addEventListener("dragover", e => {
    e.preventDefault();
}, false);

document.addEventListener("drop", function(event) {
    event.preventDefault();
    left_drop = event.target.getBoundingClientRect().left
    
    event_callendar.style.left = `${left_drop}px`

    events_only = document.getElementsByClassName('callendaAPP-PiskeEvent') 
    for (i in events_only){
        console.log(events_only[i]);
        /* if (event_callendar.style.rigth <= events_only[i].style.left) {
            console.log('menor');
        } */
        
    }
    
})
function createGridDay(day) {
    let grid_day = document.createElement('div')
    
    //grid_day.style.width = '20em'
    //grid_day.style.height = "100%" 
    //grid_day.style.borderLeft = "0.5px solid gray"
    //grid_day.style.borderBottom = "0.5px solid gray"
    //grid_day.
    //grid_day.style.textAlign = "center"
    //grid_day.style.backgroundColor = "white"
    grid_day.classList.add('callendarAPP-PiskeGridDay')
        //grid_day.style.display = "inline-block"
    let title_day = document.createElement('div')
    title_day.innerText = day
    title_day.classList.add('callendarAPP-PiskeTitleDay')
    //title_day.style.height = "20px"
    //title_day.style.borderTop = "0.5px solid gray"
    //title_day.style.borderBottom = "0.5px solid gray"
    
    grid_day.appendChild(title_day)
    let element = grid_day
    return element
}

function createEvent(params) {
    event_callendar = document.createElement('div')
    event_callendar.style.width = '100px'
    //event_callendar.style.height = '20px'
    event_callendar.style.backgroundColor = 'red'
    //event_callendar.style.position = 'absolute'
    //event_callendar.style.top = "30px"
    event_callendar.draggable = true
    event_callendar.classList.add('callendaAPP-PiskeEvent')
    return event_callendar
}

function drawnCallendar(params) {
    let interval_days = 31
    let callendar_body = document.createElement('div')
    //! css for callendar body
    callendar_body.style.width = "100%"
    callendar_body.style.height = "200px"
    callendar_body.style.backgroundColor = "gray"
    callendar_body.style.display = 'flex'
    for (let day = 1; day < interval_days+1; day++){
        //console.log(day);
        grid_day = createGridDay(day)
        
        event_callendar = createEvent()
        callendar_body.appendChild(grid_day)
        
    }
    callendar_body.appendChild(event_callendar)
    document.getElementById('local_calendar').appendChild(callendar_body)
}
drawnCallendar()
//console.log(document.styleSheets);
