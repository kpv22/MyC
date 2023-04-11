import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/slices/users/thunks'
import { useEffect } from 'react'


export const ReduxComponent = () => {

  const {users = [],isLoading,page} = useSelector((store) => store.users)
  const dispatch =useDispatch()

  useEffect(() => {
    console.log(users)
    
  }, [users]);

  const handleGetUsers = async() => {
   dispatch( getUsers())
    
  }

  return (
    <>
    <div>
      <button onClick={handleGetUsers}>get users</button>
    </div>
    
    </>
  )
}
