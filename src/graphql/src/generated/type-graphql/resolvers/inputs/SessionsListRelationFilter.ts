import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsWhereInput } from "../inputs/SessionsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionsListRelationFilter {
  @TypeGraphQL.Field(_type => SessionsWhereInput, {
    nullable: true
  })
  every?: SessionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => SessionsWhereInput, {
    nullable: true
  })
  some?: SessionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => SessionsWhereInput, {
    nullable: true
  })
  none?: SessionsWhereInput | undefined;
}
