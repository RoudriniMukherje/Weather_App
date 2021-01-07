const key ='34deb50eff82a3352ef6478aabe4e062'; 

//const baseURL='https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=34deb50eff82a3352ef6478aabe4e062';

// fetch(baseURL)
             //.then((data)=>{console.log('response' , data.json()) })
             //.catch((error)=>{console.log(error);});

const requestCity = async (city) => {
    const baseURL  = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}` ;

    //fetch call(promise call)
    const response = await fetch(baseURL + query);

    //promise data

    const data = await response.json();
    return data;

}



