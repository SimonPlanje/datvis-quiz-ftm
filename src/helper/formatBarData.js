import * as d3 from "d3"
import {  group, timeFormatDefaultLocale } from "d3"

async function formatBarData(quiz, dynamicAns, data1, dataState, data2, dynamicAnsMoney, setTotData){
    // const ImportedData = JSON.parse(localStorage.getItem('data'))

quiz.map((d,index)=>{
console.log(d.type)
    if(d.type === 'gokken'){
        const rawData = data2   
        console.log(rawData)
       fixNums(rawData)
   
       function fixNums(data){
         return data.map(d => d.midden = +d.midden)
       }
   
       const orderData = rawData.slice().sort((a, b) => d3.descending(a.midden, b.midden))    
       setTotData(orderData)
       console.log(orderData)
   
        dynamicAnsMoney.push([
            {'partij': orderData[0].partij,
            'check' : true,
            'id': orderData[0].partij
            },
            {'partij': orderData[1].partij,
            'check' : false,
            'id': orderData[1].partij
            },
            {'partij': orderData[2].partij,
            'check' : false,
            'id': orderData[2].partij
            },
        ])
       
      
   console.log(dynamicAnsMoney)
       
       }else if(d.type === 'scenario' ){
        const groupGender = group(data1, d=> d.gender).get(d.category.gender)
        const groupGeo = group(groupGender, d=> d.geo).get(d.category.geo)
        const groupAge = group(groupGeo, d=> d.age).get(d.category.age)
      
        const sortData = groupAge.slice().sort((a, b) => d3.descending(a.percentageTotaal, b.percentageTotaal))
        console.log(sortData)
    // setCorrectAns(sortData[0].partij)

    removeComma(sortData)
    fixNums(sortData)

    function removeComma(data){
      return data.map(d => d.percentageTotaal = d.percentageTotaal.replace(',', '.'))
    }

    function fixNums(data){
      return data.map(d => d.percentageTotaal = +d.percentageTotaal)
    }

    let cleanData = sortData
    
    dataState.push(cleanData)     
    
        dynamicAns.push([
            {'partij': cleanData[0].partij,
            'check' : true,
            'id': cleanData[0].partij
            },
            {'partij': cleanData[1].partij,
            'check' : false,
            'id': cleanData[1].partij
            },
            {'partij': cleanData[2].partij,
            'check' : false,
            'id': cleanData[2].partij
            },
        ])

      
    }else{console.log('kennsivraag')}

})

}

export default formatBarData