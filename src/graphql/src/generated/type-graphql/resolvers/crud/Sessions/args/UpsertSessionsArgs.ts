import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SessionsUncheckedCreateInput } from "../../../inputs/SessionsUncheckedCreateInput";
import { SessionsUncheckedUpdateInput } from "../../../inputs/SessionsUncheckedUpdateInput";
import { SessionsWhereUniqueInput } from "../../../inputs/SessionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSessionsArgs {
  @TypeGraphQL.Field(_type => SessionsWhereUniqueInput, {
    nullable: false
  })
  where!: SessionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SessionsUncheckedCreateInput, {
    nullable: false
  })
  create!: SessionsUncheckedCreateInput;

  @TypeGraphQL.Field(_type => SessionsUncheckedUpdateInput, {
    nullable: false
  })
  update!: SessionsUncheckedUpdateInput;
}
