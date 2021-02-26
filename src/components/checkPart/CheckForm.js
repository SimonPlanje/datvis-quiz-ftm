export default function CheckForm({answers}) {

  return (
    <div className="CheckForm" >
         <div className='button'>

<span >
<svg id="Artboard_2" data-name="Artboard â€“ 2" class="cls-1">
<rect class="cls-14" width="52" height="52"/>
<g id="Rectangle_116" data-name="Rectangle 116" class="cls-12">
<rect class="cls-15" width="52" height="52"/>
<rect class="cls-16" x="1" y="1" width="50" height="50"/>
</g>
<path id="Path_44" data-name="Path 44" class="cls-13" d="M0,0H36V36H0Z" transform="translate(8 8)"/>
<circle id="Ellipse_53" data-name="Ellipse 53" class="cls-14" cx="14" cy="14" r="14" transform="translate(12 12)"/>
</svg>

</span>
<span className={`is${answers.check}`}>
<svg id="Artboard_2" data-name="Artboard â€“ 2" class="cls-1">
<rect class="cls-3" width="52" height="52"/>
<path id="Path_43" data-name="Path 43" class="cls-2" d="M-3011.7,12604.991s11.39-7.488,12.615-5.355-11.808,14.413-7.713,13.893,24.095-19.039,24.095-15.975-24.095,25-24.095,28.232,19.814-14.014,24.095-15.29-6.976,10.194-6.976,10.194" transform="matrix(0.966, 0.259, -0.259, 0.966, 6184.751, -11378.36)"/>
</svg>

</span>
<button data-value={answers.answer} >{answers.answer}</button>
</div>
    </div>
  );
}
 