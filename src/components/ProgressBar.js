import React from 'react'
import {Line} from '@tiaanduplessis/react-progressbar'

const ProgressBar = () => {

    return (
        <>
        <Line
          progress={100/100}
          strokeWidth={4}
          easing='easeInOut'
          color={'black'}
          trailColor='#37b7d2'
          svgStyle={{
            display: 'block',
            width: '100%',
            'max-height': '0.3em',
            'border-radius': '0px'
          }}
        />
        </>
    )
}

export default ProgressBar
