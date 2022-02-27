export default{
    generateUser: (user) => {
        const data = typeof user !== 'undefined' ? controlUsers(user) 
            : {email: 'fulano@qa.com', password: 'teste' };
        return data;
    }
   
}  


const controlUsers = (user) => {
    switch(user){
    case 'valid':
        return  {
            email: 'fulano@qa.com', 
            password: 'teste' 
        }
    case 'invalid':
        return {
            email: 'invalido@gmail.com',
            password: '12qasdcz21'
        }
    }
}