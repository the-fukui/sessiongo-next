import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sessions_session_tagsUncheckedCreateInput } from "../../../inputs/Sessions_session_tagsUncheckedCreateInput";
import { Sessions_session_tagsUncheckedUpdateInput } from "../../../inputs/Sessions_session_tagsUncheckedUpdateInput";
import { Sessions_session_tagsWhereUniqueInput } from "../../../inputs/Sessions_session_tagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSessions_session_tagsArgs {
  @TypeGraphQL.Field(_type => Sessions_session_tagsWhereUniqueInput, {
    nullable: false
  })
  where!: Sessions_session_tagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Sessions_session_tagsUncheckedCreateInput, {
    nullable: false
  })
  create!: Sessions_session_tagsUncheckedCreateInput;

  @TypeGraphQL.Field(_type => Sessions_session_tagsUncheckedUpdateInput, {
    nullable: false
  })
  update!: Sessions_session_tagsUncheckedUpdateInput;
}
