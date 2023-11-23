import React from 'react';
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
        <FormControl bg={'#191919'} width={'800px'} m={'60px auto'} padding={'30px 175px'}>
            <Text textAlign={'center'} fontSize={'xx-large'} color={'white'}>Create Account</Text>
            <FormLabel color={'white'} htmlFor="name">Name</FormLabel>
            <Input variant='outline' bg={'white'} placeholder='John Doe' />
            <FormLabel color={'white'} htmlFor="email">Email</FormLabel>
            <Input variant='outline' bg={'white'} placeholder='example@email.com' />
            <FormLabel color={'white'} htmlFor="password">Password</FormLabel>
            <Input variant='outline' bg={'white'} placeholder='You can do better than "password123".' />
            <FormLabel color={'white'} htmlFor="confPassword">Confirm Password</FormLabel>
            <Input variant='outline' bg={'white'} placeholder='You can do better than "password123".' />
            <Button bg={'#ea9e4a'} m={'auto'}>Next</Button>
            <Button variant='link' color={'white'}>Log In</Button>
        </FormControl>

        <footer>
            <Text textAlign={'center'} fontSize={'x-large'}>By clicking Login, you agree to the <Link href='dne' color={'blue'} textDecoration={'underline'}>terms and <br/> conditions</Link> and <Link href='dne' color={'blue'} textDecoration={'underline'}>privacy policy</Link>.</Text>
        </footer>
    </>
};