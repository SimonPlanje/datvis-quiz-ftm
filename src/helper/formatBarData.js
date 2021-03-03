import * as d3 from "d3"
import {  group } from "d3"

function formatBarData(quiz, currentQuestion, dynamicAns, setDynamicAns){

  const ImportedData = JSON.parse(localStorage.getItem('data'))

  const nextQuestionIndex = currentQuestion+1

  if(nextQuestionIndex < quiz.length){
    if(quiz[nextQuestionIndex].type === 'scenario'){
        dynamicAns.splice(0, dynamicAns.length)
        const groupGender = group(ImportedData, d=> d.gender).get(quiz[nextQuestionIndex].category.gender)
        const groupGeo = group(groupGender, d=> d.geo).get(quiz[nextQuestionIndex].category.geo)
        const groupAge = group(groupGeo, d=> d.age).get(quiz[nextQuestionIndex].category.age)
      
        const sortData = groupAge.slice().sort((a, b) => d3.descending(a.percentageTotaal, b.percentageTotaal))
    
        dynamicAns.push(
            {'partij': sortData[0].partij,
            'check' : true
            },
            {'partij': sortData[1].partij,
            'check' : false
            },
            {'partij': sortData[2].partij,
            'check' : false
            },
            )
      
      console.log(sortData)
    }
  }

 

//   removeComma(sortData)
//   fixNums(sortData)

//   function removeComma(data){
//     return data.map(d => d.percentageTotaal = d.percentageTotaal.replace(',', '.'))
//   }

//   function fixNums(data){
//     return data.map(d => d.percentageTotaal = +d.percentageTotaal)
//   }

//   const data = sortData

//   console.log(data)

}

export default formatBarData