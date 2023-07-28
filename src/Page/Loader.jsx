import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'


const Loader = () => {
    const tablet = useMediaQuery({
        query: '(min-width: 768px)'
      })
    const bgVAriant = {
        open: {y: '150%', transition: {duration: tablet?1:2}},
        closed: {y: "-100%", transition: {duration: .7}}
    }
  return (
      <motion.div
      initial='closed'
      animate='open'
      variants={bgVAriant}
      
      className="bg-card-bg h-screen w-full absolute top-0 left-0 z-50"></motion.div>
  )
}

export default Loader
