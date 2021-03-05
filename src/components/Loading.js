import ftmLogo from '../images/ftmlogo.png'
import {RotateLoader} from 'react-spinners'

export default function Loading() {


  return (
    <div className="Loading">
        <RotateLoader />
        <img src={ftmLogo} alt='logo Follow the Money'></img>
      </div>
  );
}