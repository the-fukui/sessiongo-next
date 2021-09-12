import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sessions_session_tagsUncheckedCreateInput } from "../../../inputs/Sessions_session_tagsUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSessions_session_tagsArgs {
  @TypeGraphQL.Field(_type => Sessions_session_tagsUncheckedCreateInput, {
    nullable: false
  })
  data!: Sessions_session_tagsUncheckedCreateInput;
}
