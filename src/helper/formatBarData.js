import * as d3 from "d3"
import {  group } from "d3"

async function formatBarData(quiz, dynamicAns, setDynamicAns, data){
    // const ImportedData = JSON.parse(localStorage.getItem('data'))

quiz.map((d,index) =>{
console.log(d)
    if(d.type === 'scenario'){
        const groupGender = group(data, d=> d.gender).get(d.category.gender)
        const groupGeo = group(groupGender, d=> d.geo).get(d.category.geo)
        const groupAge = group(groupGeo, d=> d.age).get(d.category.age)
      
        const sortData = groupAge.slice().sort((a, b) => d3.descending(a.percentageTotaal, b.percentageTotaal))
        console.log(sortData)
        
        dynamicAns.push([
            {'partij': sortData[0].partij,
            'check' : true
            },
            {'partij': sortData[1].partij,
            'check' : false
            },
            {'partij': sortData[2].partij,
            'check' : false
            },
        ])

      
      console.log(dynamicAns)
    }else{console.log('error')}




})

}

export default formatBarData