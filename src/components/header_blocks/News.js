import React from "react"
import { motion } from "framer-motion";
import MultimediaComponent from "../HTML 5 API/MultimediaComponent";
import FakeApiComponent from "../HTML 5 API/FakeApiComponent";

const News = () => {
  return (
    <motion.div style={{width:'100%',height:'auto',display:'flex',flexDirection:"column",alignItems:'center'}}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.9,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeatDelay: 1
    }}
    
    >
      
      <MultimediaComponent />
      <FakeApiComponent />
    </motion.div>
  )
};

export default News;
