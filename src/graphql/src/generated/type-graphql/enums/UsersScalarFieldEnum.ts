import * as TypeGraphQL from "type-graphql";

export enum UsersScalarFieldEnum {
  id = "id",
  email = "email",
  name = "name"
}
TypeGraphQL.registerEnumType(UsersScalarFieldEnum, {
  name: "UsersScalarFieldEnum",
  description: undefined,
});
