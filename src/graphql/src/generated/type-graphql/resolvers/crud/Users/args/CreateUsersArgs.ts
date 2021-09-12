import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersUncheckedCreateInput } from "../../../inputs/UsersUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUsersArgs {
  @TypeGraphQL.Field(_type => UsersUncheckedCreateInput, {
    nullable: false
  })
  data!: UsersUncheckedCreateInput;
}
