import * as d3 from "d3"
import { select, max, scaleBand, scaleLinear, axisBottom, axisLeft, group, scaleOrdinal, scaleSequential } from "d3"



export default function Barchart({ans, checkCounter}) {
  console.log(checkCounter)


//Formatting data---------------------------------------------------
const ImportedData = JSON.parse(localStorage.getItem('data'))
// console.log(ImportedData)

const groupGender = group(ImportedData, d=> d.gender).get('vrouw')
const groupGeo = group(groupGender, d=> d.geo).get('Groningen')
const groupAge = group(groupGeo, d=> d.age).get('25-34')

const sortData = groupAge.slice().sort((a, b) => d3.descending(a.percentageTotaal, b.percentageTotaal))

// sortData.map(item => item.percentageTotaal = item.percentageTotaal.replace('/,/', '.') )

removeComma(sortData)
fixNums(sortData)

function removeComma(data){
return data.map(d => d.percentageTotaal = d.percentageTotaal.replace(',', '.'))
}

function fixNums(data){
  return data.map(d => d.percentageTotaal = +d.percentageTotaal)
 }

const data = sortData
console.log(data)


//Create barchart--------------------------------------------------------

// set the dimensions and margins of the graph
const margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom

    // var myColor = d3.scaleOrdinal()
    // .domain(["GroenLinks", "PvdD", 'PvdA', "ChristenUnie", 'DENK', "D66", "CDA", "SGP", "FvD", "VVD", "SP", "50Plus"])
    // .range(["red", "grey", "grey", "grey", "grey", 'grey', "grey", "grey", "grey", "grey", 'grey', "grey"])

// console.log(myColor.domain())
// console.log(myColor.range())

// set the ranges
  const x = scaleBand()
    .range([0, width])
    .padding(0.1);

  const y = scaleLinear()
    .range([height, 0])


// append the svg object to the div
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
const svg = select(".barchartdiv").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", 
      "translate(" + margin.left + "," + margin.top + ")");

 // Scale the range of the data in the domains
 x.domain(data.map(d => d.partij))

 y.domain([0, max(data, d => d.percentageTotaal)])

 svg.selectAll('rect')
 .data(data)
.enter().append("rect")
 .attr("x", d => x(d.partij))
 .attr("width", x.bandwidth())
 .attr("y", d => y(d.percentageTotaal))
 .attr("height", d => height - y(d.percentageTotaal))
 .attr("fill", function(d,i){
    if(ans[checkCounter].antwoord === d.partij){
      return 'red'
    }else if(ans[checkCounter].ans === d.partij){
      return 'green'
    }else{
      return 'grey'
    }
 }  )

 console.log(ans)

   // add the x Axis
   svg.append("g")
   .attr("transform", "translate(0," + height + ")")
   .call(axisBottom(x));

   svg.selectAll('.domain').remove()
   svg.selectAll('.tick line').remove()

//OPTIONAL ADD Y AXIS (no need i think)
// add the y Axis
// svg.append("g")
//    .call(axisLeft(y));

  return (
    <div className="barchartdiv" width='100%' height={height} >
    </div>
  );
}
 