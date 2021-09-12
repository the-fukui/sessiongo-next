import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SessionsWhereUniqueInput } from "../../../inputs/SessionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSessionsArgs {
  @TypeGraphQL.Field(_type => SessionsWhereUniqueInput, {
    nullable: false
  })
  where!: SessionsWhereUniqueInput;
}
