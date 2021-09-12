import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Session_tagsWhereUniqueInput } from "../../../inputs/Session_tagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSession_tagsArgs {
  @TypeGraphQL.Field(_type => Session_tagsWhereUniqueInput, {
    nullable: false
  })
  where!: Session_tagsWhereUniqueInput;
}
