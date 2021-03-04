import * as d3 from "d3"
import {  group } from "d3"

async function formatBarData(quiz, dynamicAns, setDynamicAns, fbData, dataState){
    // const ImportedData = JSON.parse(localStorage.getItem('data'))

quiz.map((d,index)=>{

    if(d.type === 'scenario'){
        const groupGender = group(fbData, d=> d.gender).get(d.category.gender)
        const groupGeo = group(groupGender, d=> d.geo).get(d.category.geo)
        const groupAge = group(groupGeo, d=> d.age).get(d.category.age)
      
        const sortData = groupAge.slice().sort((a, b) => d3.descending(a.percentageTotaal, b.percentageTotaal))

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

      
    }else{console.log('Dit is geen kennis vraag')}




})

}

export default formatBarData