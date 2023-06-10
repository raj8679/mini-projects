import { Select } from '@chakra-ui/react'
import React from 'react'

const SelectOpt = (props) => {
   const{name,options} = props;
   console.log(options)
  return (
    <>
    <Select placeholder={name} w='200px'>
        {options.forEach((el)=> {
            return (
            <option value={el}>{el}</option>
            )
        })}
          
        </Select>
    </>
  )
}

export default SelectOpt