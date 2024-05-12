import photo1 from './images/photo1.jpg'
import photo2 from './images/photo2.jpg'
import photo3 from './images/photo3.jpg'
import photo4 from './images/photo4.jpg'
import '../home.css'
import Image from 'next/image'
 const Photos = () => {
  return (
    <div className='home-container'>
        <Image src={photo1} alt="animal1" style={{width:'300px',height:'300px'}}/>
        <Image src={photo2} alt="animal2" style={{width:'300px',height:'300px'}}/>
        <Image src={photo3} alt="animal3" style={{width:'300px',height:'300px'}}/>
        <Image src={photo4} alt="animal4" style={{width:'300px',height:'300px'}}/>
      
    </div>
  )
}
export default Photos;
