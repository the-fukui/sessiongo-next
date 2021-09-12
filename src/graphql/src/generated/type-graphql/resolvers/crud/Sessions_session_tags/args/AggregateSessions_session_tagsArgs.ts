import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sessions_session_tagsOrderByWithRelationInput } from "../../../inputs/Sessions_session_tagsOrderByWithRelationInput";
import { Sessions_session_tagsWhereInput } from "../../../inputs/Sessions_session_tagsWhereInput";
import { Sessions_session_tagsWhereUniqueInput } from "../../../inputs/Sessions_session_tagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSessions_session_tagsArgs {
  @TypeGraphQL.Field(_type => Sessions_session_tagsWhereInput, {
    nullable: true
  })
  where?: Sessions_session_tagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Sessions_session_tagsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Sessions_session_tagsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Sessions_session_tagsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
