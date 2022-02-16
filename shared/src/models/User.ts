// shared/models/User.ts
import * as Joi from '@hapi/joi'
import 'joi-extract-type'

// Define schema
export const createUserSchema = Joi.object({
   id: Joi.string().uuid().required(),
   name: Joi.string(),
})

// Extract type from schema
type UserType = Joi.extractType<typeof createUserSchema>

// Create & export class
export class User implements UserType {

   constructor (
      public id: string,
      public name: string,
   ) {}

   static fromJson(json: UserType): User {
      const { id, name } = json
      return new User(id, name)
   }

}
