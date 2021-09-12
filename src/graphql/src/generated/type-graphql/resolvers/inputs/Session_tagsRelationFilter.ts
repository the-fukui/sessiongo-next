import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Session_tagsWhereInput } from "../inputs/Session_tagsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Session_tagsRelationFilter {
  @TypeGraphQL.Field(_type => Session_tagsWhereInput, {
    nullable: true
  })
  is?: Session_tagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Session_tagsWhereInput, {
    nullable: true
  })
  isNot?: Session_tagsWhereInput | undefined;
}
