import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumstatusFilter } from "../inputs/NestedEnumstatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { status } from "../../enums/status";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumstatusWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumstatusWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumstatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumstatusFilter, {
    nullable: true
  })
  _min?: NestedEnumstatusFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumstatusFilter, {
    nullable: true
  })
  _max?: NestedEnumstatusFilter | undefined;
}
