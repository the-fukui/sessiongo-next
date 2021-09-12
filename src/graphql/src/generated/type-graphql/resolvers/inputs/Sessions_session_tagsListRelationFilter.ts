import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sessions_session_tagsWhereInput } from "../inputs/Sessions_session_tagsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsListRelationFilter {
  @TypeGraphQL.Field(_type => Sessions_session_tagsWhereInput, {
    nullable: true
  })
  every?: Sessions_session_tagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Sessions_session_tagsWhereInput, {
    nullable: true
  })
  some?: Sessions_session_tagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Sessions_session_tagsWhereInput, {
    nullable: true
  })
  none?: Sessions_session_tagsWhereInput | undefined;
}
