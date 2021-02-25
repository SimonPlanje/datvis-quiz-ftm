import * as d3 from "d3"
import { select, max, scaleBand, scaleLinear, axisBottom, axisLeft } from "d3"

export default function Barchart() {

const ImportedData = JSON.parse(localStorage.getItem('data'))
console.log(ImportedData)

const groupGender = d3.group(ImportedData, d=> d.gender).get('vrouw')
const groupGeo = d3.group(groupGender, d=> d.geo).get('Groningen')
const groupAge = d3.group(groupGeo, d=> d.age).get('25-34')

const sortData = groupAge.slice().sort((a, b) => d3.descending(a.percentageTotaal, b.percentageTotaal))
const data = sortData

console.log(data)



  return (
    <div className="barchartdiv" width='100%'>
    </div>
  );
}
 