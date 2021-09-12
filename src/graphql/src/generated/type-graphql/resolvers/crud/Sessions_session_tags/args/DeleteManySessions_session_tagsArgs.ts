import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sessions_session_tagsWhereInput } from "../../../inputs/Sessions_session_tagsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySessions_session_tagsArgs {
  @TypeGraphQL.Field(_type => Sessions_session_tagsWhereInput, {
    nullable: true
  })
  where?: Sessions_session_tagsWhereInput | undefined;
}
