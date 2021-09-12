import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Session_tagsCreateManyInput } from "../../../inputs/Session_tagsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySession_tagsArgs {
  @TypeGraphQL.Field(_type => [Session_tagsCreateManyInput], {
    nullable: false
  })
  data!: Session_tagsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
