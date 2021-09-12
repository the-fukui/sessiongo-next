import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sessions_session_tagsUncheckedCreateNestedManyWithoutTagInput } from "../inputs/Sessions_session_tagsUncheckedCreateNestedManyWithoutTagInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Session_tagsUncheckedCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

  @TypeGraphQL.Field(_type => Sessions_session_tagsUncheckedCreateNestedManyWithoutTagInput, {
    nullable: true
  })
  sessions?: Sessions_session_tagsUncheckedCreateNestedManyWithoutTagInput | undefined;
}
