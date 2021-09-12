import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Session_tagsUncheckedUpdateManyInput } from "../../../inputs/Session_tagsUncheckedUpdateManyInput";
import { Session_tagsWhereInput } from "../../../inputs/Session_tagsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySession_tagsArgs {
  @TypeGraphQL.Field(_type => Session_tagsUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: Session_tagsUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => Session_tagsWhereInput, {
    nullable: true
  })
  where?: Session_tagsWhereInput | undefined;
}
