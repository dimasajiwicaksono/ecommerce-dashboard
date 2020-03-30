import React from 'react';
import { Card, Progress, Typography} from 'antd'

function CardContentCenter({from}) {

    // const { Title } = Typography

    return (
        <div>
            <Card hoverable 
                title= {
                    from === 'purchase' ? `${from.toUpperCase()} RATE` :
                    from === 'checkout' ?  `${from.toUpperCase()} RATE` :
                    from === 'abandoned' ?  `${from.toUpperCase()} RATE` : null
                } 
                style={{paddingTop:0}}>
                    <Progress type='dashboard' percent={15} strokeWidth={10}/>
            </Card>
        </div>
    )
}



export default CardContentCenter
