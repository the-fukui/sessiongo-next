import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SessionsWhereInput } from "../../../inputs/SessionsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySessionsArgs {
  @TypeGraphQL.Field(_type => SessionsWhereInput, {
    nullable: true
  })
  where?: SessionsWhereInput | undefined;
}
