import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsScalarWhereInput {
  @TypeGraphQL.Field(_type => [Sessions_session_tagsScalarWhereInput], {
    nullable: true
  })
  AND?: Sessions_session_tagsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsScalarWhereInput], {
    nullable: true
  })
  OR?: Sessions_session_tagsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsScalarWhereInput], {
    nullable: true
  })
  NOT?: Sessions_session_tagsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  session_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tag_id?: IntFilter | undefined;
}
