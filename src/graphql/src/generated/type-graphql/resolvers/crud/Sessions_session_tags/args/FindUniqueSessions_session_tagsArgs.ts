import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sessions_session_tagsWhereUniqueInput } from "../../../inputs/Sessions_session_tagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSessions_session_tagsArgs {
  @TypeGraphQL.Field(_type => Sessions_session_tagsWhereUniqueInput, {
    nullable: false
  })
  where!: Sessions_session_tagsWhereUniqueInput;
}
