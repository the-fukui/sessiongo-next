import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { status } from "../../enums/status";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumstatusFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => status, {
    nullable: true
  })
  set?: "DRAFT" | "PUBLISHED" | undefined;
}
