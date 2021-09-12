import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Session_tagsUncheckedCreateInput } from "../../../inputs/Session_tagsUncheckedCreateInput";
import { Session_tagsUncheckedUpdateInput } from "../../../inputs/Session_tagsUncheckedUpdateInput";
import { Session_tagsWhereUniqueInput } from "../../../inputs/Session_tagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSession_tagsArgs {
  @TypeGraphQL.Field(_type => Session_tagsWhereUniqueInput, {
    nullable: false
  })
  where!: Session_tagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Session_tagsUncheckedCreateInput, {
    nullable: false
  })
  create!: Session_tagsUncheckedCreateInput;

  @TypeGraphQL.Field(_type => Session_tagsUncheckedUpdateInput, {
    nullable: false
  })
  update!: Session_tagsUncheckedUpdateInput;
}
