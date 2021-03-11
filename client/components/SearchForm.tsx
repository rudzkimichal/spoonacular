
import {useState, useEffect} from 'react'
import { Flex, Spacer, Heading, FormControl, Input, Button } from '@chakra-ui/react'

const SearchForm = () => {

  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <Flex direction='column' h='50vh' w='50vw'>
      <Heading size='4xl'>Spoonacular</Heading>
      <Spacer />
        <FormControl onSubmit={handleSubmit}>
          <Input value={value} onChange={handleChange} placeholder="Search" size ="md" variant="outline" />
        </FormControl>
      <Spacer />
      <Button type='submit' colorScheme="teal" variant="solid" size="md">Search ingredients</Button>
      </Flex>
  )
}

export default SearchForm
