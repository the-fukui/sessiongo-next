import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumstatusFilter } from "../inputs/NestedEnumstatusFilter";
import { status } from "../../enums/status";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumstatusFilter {
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
