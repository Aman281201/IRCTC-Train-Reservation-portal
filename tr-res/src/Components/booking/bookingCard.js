import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TrainClass from './TrainClass';
const BookingCard = (props) => {


    const card = (
        <React.Fragment>
            <CardContent>

                <Typography variant="h5" component="div"  style={{fontSize : "30px",fontWeight: 500}} >
                    Train Name
                </Typography>



                <div className='flex justify-between items-center mt-3'>
                    <div className='flex justify-between items-center' >
                        <Typography sx={{ mb: 1.5 }} style={{ fontSize: "18px",paddingRight:"5px" }} color="text.secondary">
                            Start Station |
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} style={{ fontSize: "18px",paddingRight:"5px" }} color="text.secondary">
                            Train Arrival Time |
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} style={{ fontSize: "18px",paddingRight:"5px" }} color="text.secondary">
                            Arrival Date 
                        </Typography>
                    </div>

                    <div className='flex justify-between items-center' >
                        <Typography sx={{ mb: 1.5 }} style={{ fontSize: "18px",paddingRight:"5px" }} color="text.secondary">
                            End Station |
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} style={{ fontSize: "18px",paddingRight:"5px" }} color="text.secondary">
                            Train Arrival Time |
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} style={{ fontSize: "18px",paddingRight:"5px" }} color="text.secondary">
                            Arrival Date 
                        </Typography>
                    </div>

                  

                </div>
                <TrainClass/>


              
            </CardContent>
            <CardActions>
                <Button size="small">BOOK NOW</Button>
            </CardActions>
        </React.Fragment>

    );
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );

}
export default BookingCard;