import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsWhereInput } from "../inputs/SessionsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionsRelationFilter {
  @TypeGraphQL.Field(_type => SessionsWhereInput, {
    nullable: true
  })
  is?: SessionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => SessionsWhereInput, {
    nullable: true
  })
  isNot?: SessionsWhereInput | undefined;
}
