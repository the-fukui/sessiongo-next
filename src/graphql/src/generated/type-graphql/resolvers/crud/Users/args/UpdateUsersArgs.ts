import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersUncheckedUpdateInput } from "../../../inputs/UsersUncheckedUpdateInput";
import { UsersWhereUniqueInput } from "../../../inputs/UsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUsersArgs {
  @TypeGraphQL.Field(_type => UsersUncheckedUpdateInput, {
    nullable: false
  })
  data!: UsersUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: false
  })
  where!: UsersWhereUniqueInput;
}
