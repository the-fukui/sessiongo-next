import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Session_tagsUncheckedCreateInput } from "../../../inputs/Session_tagsUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSession_tagsArgs {
  @TypeGraphQL.Field(_type => Session_tagsUncheckedCreateInput, {
    nullable: false
  })
  data!: Session_tagsUncheckedCreateInput;
}
