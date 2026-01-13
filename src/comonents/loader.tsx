import {Backdrop, Typography, CircularProgress} from '@mui/material';

const Loader = () => (
    <Backdrop
        sx={{
            color: '#7dc3ff',
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            display: 'flex',
            flexDirection: 'column',
            gap: 2
        }}
        open={true}
    >
        <CircularProgress
            size={50}
            thickness={4}
            sx={{color: '#2a9bff'}} // Колір під стиль твого тексту
        />
        <Typography variant="h6" sx={{color: '#2a9bff', fontWeight: 600}}>
            Loading ...
        </Typography>
    </Backdrop>
);

export default Loader;