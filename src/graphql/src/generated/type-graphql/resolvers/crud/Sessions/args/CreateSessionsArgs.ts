import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SessionsUncheckedCreateInput } from "../../../inputs/SessionsUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSessionsArgs {
  @TypeGraphQL.Field(_type => SessionsUncheckedCreateInput, {
    nullable: false
  })
  data!: SessionsUncheckedCreateInput;
}
