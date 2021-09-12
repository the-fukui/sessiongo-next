import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { Session_tagsRelationFilter } from "../inputs/Session_tagsRelationFilter";
import { SessionsRelationFilter } from "../inputs/SessionsRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsWhereInput {
  @TypeGraphQL.Field(_type => [Sessions_session_tagsWhereInput], {
    nullable: true
  })
  AND?: Sessions_session_tagsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsWhereInput], {
    nullable: true
  })
  OR?: Sessions_session_tagsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsWhereInput], {
    nullable: true
  })
  NOT?: Sessions_session_tagsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => SessionsRelationFilter, {
    nullable: true
  })
  session?: SessionsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  session_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => Session_tagsRelationFilter, {
    nullable: true
  })
  tag?: Session_tagsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tag_id?: IntFilter | undefined;
}
