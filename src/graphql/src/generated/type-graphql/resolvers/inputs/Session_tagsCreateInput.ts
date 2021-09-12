import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sessions_session_tagsCreateNestedManyWithoutTagInput } from "../inputs/Sessions_session_tagsCreateNestedManyWithoutTagInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Session_tagsCreateInput {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  label!: string;

  @TypeGraphQL.Field(_type => Sessions_session_tagsCreateNestedManyWithoutTagInput, {
    nullable: true
  })
  sessions?: Sessions_session_tagsCreateNestedManyWithoutTagInput | undefined;
}
