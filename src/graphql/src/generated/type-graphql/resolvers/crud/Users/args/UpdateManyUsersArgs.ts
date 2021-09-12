import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersUncheckedUpdateManyInput } from "../../../inputs/UsersUncheckedUpdateManyInput";
import { UsersWhereInput } from "../../../inputs/UsersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUsersArgs {
  @TypeGraphQL.Field(_type => UsersUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: UsersUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => UsersWhereInput, {
    nullable: true
  })
  where?: UsersWhereInput | undefined;
}
