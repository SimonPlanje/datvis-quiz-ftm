import * as d3 from "d3"

async function fetchData(setDataState){

    if(localStorage.data){
        console.log('all clear')
        setDataState('finished')

        return
    }else{
        const fbData = "https://docs.google.com/spreadsheets/d/119KqNUnKmnSKvQazSW4hv84UF0GgB5hp8ti_n_G4YGU/export?format=csv"
    
        async function getData(name){
            const data = await d3.csv(name)
            return data
        }
    
        async function getAllData() {
                const eventData = await getData(fbData)


                localStorage.setItem("data", JSON.stringify(eventData))
                setDataState('finished')
        }
    
        getAllData().catch((err) => {
            console.log(err)
            console.log("handled!") 
        })
    }

} 

export default fetchData