import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sessions_session_tagsCreateManyInput } from "../../../inputs/Sessions_session_tagsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySessions_session_tagsArgs {
  @TypeGraphQL.Field(_type => [Sessions_session_tagsCreateManyInput], {
    nullable: false
  })
  data!: Sessions_session_tagsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
