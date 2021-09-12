import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateNestedOneWithoutSessionsInput } from "../inputs/UsersCreateNestedOneWithoutSessionsInput";
import { status } from "../../enums/status";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionsCreateWithoutTagsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  slug?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  started_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ended_at?: Date | undefined;

  @TypeGraphQL.Field(_type => status, {
    nullable: true
  })
  status?: "DRAFT" | "PUBLISHED" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => UsersCreateNestedOneWithoutSessionsInput, {
    nullable: false
  })
  author!: UsersCreateNestedOneWithoutSessionsInput;
}
