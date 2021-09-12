import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { status } from "../../enums/status";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumstatusFilter {
  @TypeGraphQL.Field(_type => status, {
    nullable: true
  })
  equals?: "DRAFT" | "PUBLISHED" | undefined;

  @TypeGraphQL.Field(_type => [status], {
    nullable: true
  })
  in?: Array<"DRAFT" | "PUBLISHED"> | undefined;

  @TypeGraphQL.Field(_type => [status], {
    nullable: true
  })
  notIn?: Array<"DRAFT" | "PUBLISHED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumstatusFilter, {
    nullable: true
  })
  not?: NestedEnumstatusFilter | undefined;
}
