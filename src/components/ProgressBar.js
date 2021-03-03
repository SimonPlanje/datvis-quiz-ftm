const ProgressBar = (props) => {
const {barWidth} = props;

const containerStyles = {
    height: 5,
    width: '100%',
    backgroundColor: 'transparent',
  }
const bar = {
    transition: 'width 1s ease-in-out',
    height: '100%',
    width: `${barWidth}%`,
    backgroundColor: "var(--ftm-red)",
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  return (
    <div style={containerStyles} className="ProgressBar">
        <div style={bar} className='bar'>
        </div>
    </div>
  );
}

export default ProgressBar