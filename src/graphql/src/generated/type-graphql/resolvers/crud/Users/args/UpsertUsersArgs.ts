import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersUncheckedCreateInput } from "../../../inputs/UsersUncheckedCreateInput";
import { UsersUncheckedUpdateInput } from "../../../inputs/UsersUncheckedUpdateInput";
import { UsersWhereUniqueInput } from "../../../inputs/UsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUsersArgs {
  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: false
  })
  where!: UsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersUncheckedCreateInput, {
    nullable: false
  })
  create!: UsersUncheckedCreateInput;

  @TypeGraphQL.Field(_type => UsersUncheckedUpdateInput, {
    nullable: false
  })
  update!: UsersUncheckedUpdateInput;
}
