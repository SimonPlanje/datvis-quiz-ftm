import * as d3 from "d3"
import { select, max, scaleBand, scaleLinear, axisBottom, axisLeft, group} from "d3"
import { useEffect } from "react"



export default function BarChart({ans, checkCounter, quiz, setCorrectAns, correctAns, plotData}) {



  select('.barchartdiv').selectAll('svg').remove()

  useEffect(() => {


  let count = quiz[checkCounter].indextype;
  let data = '';
  let yValue = '';

  if(quiz[checkCounter].type === 'gokken'){
    data = plotData
    yValue = d.midden
  }else if(quiz[checkCounter].type === 'scenario'){
    data = plotData[count]
  }
    const vw = document.querySelector('.CheckAns').offsetWidth

    //Create barchart--------------------------------------------------------
    if(data){

      // set the dimensions and margins of the graph
        const margin = {top: 0, right: 0, bottom: 80, left: 0},
          width = vw - margin.left - margin.right,
          height = 150 - margin.top - margin.bottom


      // set the ranges
      const x = scaleBand()
        .range([0, width])
        .padding(0.1);

      // set the ranges
      const x2 = scaleBand()
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
      console.log(data)
      x.domain(data.map(d => d.partij))
      x2.domain(data.map(d => d.partij))


      y.domain([0, max(data, d => d.percentageTotaal)])

svg.selectAll('rect').data(data)
      .enter().append("rect")
      .attr("x", d => x(d.partij))
      .attr("width", x.bandwidth())
      .attr("y", d => y(d.percentageTotaal))
      .attr("height", d => height - y(d.percentageTotaal))
      .attr("fill", function(d){
          if(ans[checkCounter].antwoord === d.partij){
            return 'var(--ftm-red)'
          }else if(correctAns === d.partij){
            return 'green'
          }else{
            return 'var(--form-grey)'
          }
        })
    
    
      
      // add the x Axis
      svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(axisBottom(x));

      svg.selectAll('text')
          .attr("y", 0)
      .attr("x", 9)
      .attr("dy", ".35em")
      .attr("transform", "rotate(90)")
      .style("text-anchor", "start");

      svg.selectAll('.domain').remove()
      svg.selectAll('.tick line').remove()

      //OPTIONAL ADD Y AXIS (no need i think)
      // add the y Axis
      // svg.append("g")
      //    .call(axisLeft(y));

      // svg.append('g')
      //   .call(axisBottom(x2))
      //   .y(function(d){
      //     console.log(d)
      //   })
    }
  });

  return(
    <div className="barchartdiv" width='100%' >
    </div>
  )
}
