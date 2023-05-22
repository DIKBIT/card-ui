import React from 'react'
import "./card.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import AlarmIcon from '@mui/icons-material/Alarm';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

const card = () => {
  return (
    <div className='container'>
        <div className='heading'>
             <p className='heading-title'>Select a category to get Started !</p>
        

        </div>

        <div className='card-section'>
            <div className='card-pile1'>
                <div className='pile1'>

                
                    <Card className='card'>
                        <CardContent className='card-icon' >
                        <CheckroomIcon/>

                        </CardContent>

                        <CardContent className='card-content' >
                        <p>{"Clothes"}</p>
                        <p>{"123 Available Products"}</p>
                        

                        </CardContent>

                        

                
      
        

        
        
        
      
                    </Card>

                    <Card className='card'>
                        <CardContent className='card-icon' >
                        <BusinessCenterIcon/>


                        </CardContent>

                        <CardContent className='card-content' >
                        <p>{"Purse"}</p>
                        <p>{"165 Available Products"}</p>
                        

                        </CardContent>

                
      
        

        
        
        
      
                    </Card>

                    <Card className='card'>
                        <CardContent  className='card-icon'>
                        <RollerSkatingIcon/>

                        </CardContent>
                        <CardContent className='card-content' >
                        <p>{"Shoes"}</p>
                        <p>{"198 Available Products"}</p>
                        

                        </CardContent>

                
      
        

        
        
        
      
                    </Card>
                </div>

            </div>

            <div className='card-pile2'>
                <div className='pile2'>
                    <Card className='card'>
                        <CardContent className='card-icon'>
                        <AddModeratorIcon/>

                        </CardContent>

                        <CardContent className='card-content' >
                        <p>{"Medicines"}</p>
                        <p>{"180 Available Products"}</p>
                        

                        </CardContent>

                    </Card>
                    <Card className='card'>
                        <CardContent className='card-icon'>
                        <AlarmIcon/>

                        </CardContent>

                        <CardContent className='card-content' >
                        <p>{"Clock"}</p>
                        <p>{"923 Available Products"}</p>
                        

                        </CardContent>

                    </Card>
                    <Card className='card'>
                        <CardContent className='card-icon'>
                        <AirplanemodeActiveIcon/>

                        </CardContent>

                        <CardContent className='card-content' >
                        <p>{"Flight"}</p>
                        <p>{"183 Available Products"}</p>
                        

                        </CardContent>

                    </Card>
            
                

                </div>

                

            </div>

        </div>
      
    </div>
  )
}

export default card
