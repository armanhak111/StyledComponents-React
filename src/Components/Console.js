import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import Line from './Line'

const StyledConsole = styled.textarea`
background-color:black;
font-size:24px;
height:70vh;
width:100%;
border:none;
resize:none;
outline:none;
color:${props => props.color || props.theme.colors.primary}
`

const Console = ({color,...props})=>{
    const [lines,setLines] = useState(['C/Users/Hacking/001>'])

    const onKeyPress = e => {
        if(e.charCode == 13){
            setLines([...lines,"C/Users/Hacking/001>"])
        }
    }

    return(
        <Flex>
            <Flex direction ={'column'} margin = {'0px 10px'}>
                {lines.map(line => 
                    <Line color={color}>{line}</Line>
                    )}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props}/>
        </Flex>
    )
}

export default Console;



