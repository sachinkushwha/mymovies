export const Profile=()=>{
    const user = localStorage.getItem('logedinuser');
    return<>
    <h1>{user}</h1>
    </>
}