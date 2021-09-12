import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Session_tagsOrderByWithRelationInput } from "../inputs/Session_tagsOrderByWithRelationInput";
import { SessionsOrderByWithRelationInput } from "../inputs/SessionsOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SessionsOrderByWithRelationInput, {
    nullable: true
  })
  session?: SessionsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  session_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Session_tagsOrderByWithRelationInput, {
    nullable: true
  })
  tag?: Session_tagsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tag_id?: "asc" | "desc" | undefined;
}
