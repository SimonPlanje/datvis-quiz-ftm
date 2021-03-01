import { render } from "@testing-library/react";
import * as d3 from "d3"
import { select, max, scaleBand, scaleLinear, axisBottom, axisLeft, group, merge } from "d3"
import { useEffect } from "react"



export default function BarChart({ans, checkCounter, quiz}) {

  useEffect(() => {

    //Formatting data---------------------------------------------------
    const ImportedData = JSON.parse(localStorage.getItem('data'))

    const groupGender = group(ImportedData, d=> d.gender).get(quiz[checkCounter].category.gender)
    const groupGeo = group(groupGender, d=> d.geo).get(quiz[checkCounter].category.geo)
    const groupAge = group(groupGeo, d=> d.age).get(quiz[checkCounter].category.age)

    const sortData = groupAge.slice().sort((a, b) => d3.descending(a.percentageTotaal, b.percentageTotaal))

    removeComma(sortData)
    fixNums(sortData)

    function removeComma(data){
      return data.map(d => d.percentageTotaal = d.percentageTotaal.replace(',', '.'))
    }

    function fixNums(data){
      return data.map(d => d.percentageTotaal = +d.percentageTotaal)
    }

    const data = sortData


    //Create barchart--------------------------------------------------------
    if(data){
      // set the dimensions and margins of the graph
      const margin = {top: 0, right: 0, bottom: 20, left: 0},
          width = 300 - margin.left - margin.right,
          height = 200 - margin.top - margin.bottom


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

      const rect = svg.selectAll('rect').data(data)
      rect
      .enter().append("rect")
      .attr("x", d => x(d.partij))
      .attr("width", x.bandwidth())
      .attr("y", d => y(d.percentageTotaal))
      .attr("height", d => height - y(d.percentageTotaal))
      .attr("fill", function(d){
          if(ans[checkCounter].antwoord === d.partij){
            return 'var(--ftm-red)'
          }else if(ans[checkCounter].ans === d.partij){
            return 'green'
          }else{
            return 'var(--form-grey)'
          }
        })
        .merge(rect)
        .attr("fill", function(d){
          if(ans[checkCounter].antwoord === d.partij){
            return 'var(--ftm-red)'
          }else if(ans[checkCounter].ans === d.partij){
            return 'green'
          }else{
            return 'var(--form-grey)'
          }
        })
        rect
        .exit().remove()
    

      
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
    }
  });

  return(
    <div className="barchartdiv" width='100%' >
    </div>
  )
}
