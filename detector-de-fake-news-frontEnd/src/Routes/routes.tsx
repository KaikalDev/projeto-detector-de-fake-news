import { Route, Routes } from 'react-router-dom'

import ChatBot from '../container/ChatBot'
import Detector from '../container/Detector'

const RoutesPages = () => (
  <Routes>
    <Route path="/" element={<ChatBot />} />
    <Route path="/DetectorFakeNews" element={<Detector />} />
  </Routes>
)

export default RoutesPages
