// api/create-user/post
import { User, userSchema } from "shared"

export async function createUser() {

   const body: User = { id: 'id', name: 'name' }

   const { id, name } = await userSchema.validate<User>(body)

   console.log(id, name)

   return { id, name } as User

}
