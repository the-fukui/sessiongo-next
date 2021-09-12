import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Sessions_session_tagsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Sessions_session_tagsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Sessions_session_tagsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Sessions_session_tagsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  session_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  tag_id?: IntWithAggregatesFilter | undefined;
}
