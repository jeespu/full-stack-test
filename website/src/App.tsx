// App.tsx
import { useEffect, useState } from 'react'
import { User } from 'shared'
import axios from 'axios'

const App: React.FC = () => {

   const [user, setUser] = useState<User>()

   async function createUser(params: Partial<User>): Promise<User> {
      const user = await axios.post('/create-user', params)
      return User.fromJson(user.data)
   }

   useEffect(() => {
      const params = { id: '123', name: 'John Doe' }
      createUser(params).then(setUser)
   }, [])

   return (
      <p>{user?.name}</p>
   )

}

export default App
