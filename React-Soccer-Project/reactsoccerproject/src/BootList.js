import React from 'react';
import Boot from './Boot'

const BootList = ({ boots})=> {
    return (
        <div>
            {
                boots.map((boot, j) => {
                    return (
                        <Boot
                        key={j}
                        id = {boots[j].id}
                        name = {boots[j].name}
                        image = {boots[j].image}
                        />
                    )
                })
            }
        </div>
    )


}


export default BootList;