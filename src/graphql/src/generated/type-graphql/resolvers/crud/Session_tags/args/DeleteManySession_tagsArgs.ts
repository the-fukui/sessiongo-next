import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Session_tagsWhereInput } from "../../../inputs/Session_tagsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySession_tagsArgs {
  @TypeGraphQL.Field(_type => Session_tagsWhereInput, {
    nullable: true
  })
  where?: Session_tagsWhereInput | undefined;
}
