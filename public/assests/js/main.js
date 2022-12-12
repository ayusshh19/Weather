console.log('ayush shukla')
const cityname=document.getElementById('Cityname')
const submitbtn=document.getElementById('submitbtn')
const getday=document.getElementById('day')
const dates=document.getElementById('currentdata')
const city_name=document.getElementById('city_name')
const tempareture=document.getElementById('temperature')
const months=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
const weekdays=['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY']
const currentdate=new Date()
const icons=document.getElementById('iconclass')
const lower =document.getElementById('lower')
const getinfo=async (event)=>{
    let rightdate=weekdays[currentdate.getDay()]
    let leftdate=`${currentdate.getDay()} ${months[currentdate.getMonth()]}`
    getday.innerHTML=rightdate;
    dates.innerHTML=leftdate;
    if(cityname.value===''){
        city_name.innerHTML='please enter city name'
    }
    else{
        try{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&units=metric&appid=ffa1ee7a2745ddb4ed32f38f8410e486`
        const response=await fetch(url)
        const alldata=await response.json()
        city_name.innerHTML=alldata.name
        tempareture.innerHTML=alldata.main.temp
        if(alldata.weather[0].main=='Clouds'){
            icons.removeAttribute('class')
            icons.classList.add('fa-solid')
            icons.classList.add('fa-cloud')
            lower.style.color='white'
            
        }
        else if(alldata.main.temp<10){
            icons.removeAttribute('class')
            icons.classList.add('fa-solid')
            icons.classList.add('fa-snowflake')
            lower.style.color='#45aaf2'
        }
        else if(alldata.weather[0].main=='Rain'){
            icons.removeAttribute('class')
            icons.classList.add('fa-solid')
            icons.classList.add('fa-cloud-rain')
            lower.style.color='#45aaf2'
        }
        else{
            icons.removeAttribute('class')
            icons.classList.add('fa-solid')
            icons.classList.add('fa-sun')
            lower.style.color='yellow'
        }
        }
        catch(e){
            city_name.innerHTML=`Enter proper city name!!!  ${e}`
        }
    }
   
}
submitbtn.addEventListener('click',getinfo)