import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Session_tagsUncheckedUpdateInput } from "../../../inputs/Session_tagsUncheckedUpdateInput";
import { Session_tagsWhereUniqueInput } from "../../../inputs/Session_tagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSession_tagsArgs {
  @TypeGraphQL.Field(_type => Session_tagsUncheckedUpdateInput, {
    nullable: false
  })
  data!: Session_tagsUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => Session_tagsWhereUniqueInput, {
    nullable: false
  })
  where!: Session_tagsWhereUniqueInput;
}
