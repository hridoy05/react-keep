import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import SwipeDrawer from '../../components/SwipeDrawer/SwipeDrawer';
import Notes from '../../components/Notes/Notes';
import Archives from '../../components/archive/Archives';
import DeleteNotes from '../../components/Delete/DeleteNotes';


//components


const Home = () => {
    return (
        <Box style={{ display: 'flex', width: '100%' }}>
            <Router>
                <SwipeDrawer />
                <Routes>        
                    <Route path='/' element={<Notes/>} />
                    <Route path='/archive' element={<Archives />} />
                    <Route path='/delete' element={<DeleteNotes/>} />
                </Routes>
            </Router>
        </Box>
    )
}

export default Home;