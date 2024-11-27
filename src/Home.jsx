
import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from './context'
const Home = () => {
  const {openSidebar,openModal}=useGlobalContext();
  return <main className='home-container'>
    <button onClick={openSidebar} className='toggle-button'>
      <FaBars />
     </button>
     <button onClick={openModal} className='show-btn'>
      Show Modal
     </button>
  </main>
};

export default Home;