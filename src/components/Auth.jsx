import React from 'react';
import '../css/Auth.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Text,
    Link,
    Input,
    Button
  } from '@chakra-ui/react';

const PasswordInput = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <InputGroup size='md'>
        <Input
            pr='4.5rem'
            variant={'outline'}
            type={show ? 'text' : 'password'}
            placeholder='You can do better than "password123"'
        />
        <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
            </Button>
        </InputRightElement>
        </InputGroup>
    )
}

export const Login = () => {
  return  <>
    <FormControl>
        <FormLabel htmlFor="name"></FormLabel>
        <input name='name' type="text" />
        <FormLabel htmlFor="name"></FormLabel>
        <input name='name' type="text" />
    </FormControl>
    </>
}

export const Register = () => {
    
    return <>
        <form>
            <Text textAlign={'center'} fontSize={'xx-large'} color={'white'}>Create Account</Text>
            <FormLabel color={'white'} htmlFor="name">Name</FormLabel>
            <Input variant='outline' bg={'white'} placeholder='John Doe' />
            <FormLabel color={'white'} htmlFor="email">Email</FormLabel>
            <Input variant='outline' bg={'white'} placeholder='example@email.com' />
            <FormLabel color={'white'} htmlFor="password">Password</FormLabel>
            <Input variant='outline' bg={'white'} placeholder='You can do better than "password123".' />
            <FormLabel color={'white'} htmlFor="confPassword">Confirm Password</FormLabel>
            <Input variant='outline' bg={'white'} placeholder='You can do better than "password123".' />
            <button className='primary' >Next</button>
            <Button variant='link' color={'white'}>Log In</Button>
        </form>

        <footer>
            <Text textAlign={'center'} fontSize={'x-large'}>By clicking Login, you agree to the <Link href='dne' color={'blue'} textDecoration={'underline'}>terms and <br/> conditions</Link> and <Link href='dne' color={'blue'} textDecoration={'underline'}>privacy policy</Link>.</Text>
        </footer>
    </>
};